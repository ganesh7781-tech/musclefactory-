import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Initialize Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Auto-create gym_enquiries table on startup
const initDb = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS gym_enquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      gender VARCHAR(50) NOT NULL,
      city VARCHAR(100) NOT NULL,
      plan VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    const client = await pool.connect();
    await client.query(createTableQuery);
    console.log('✅ PostgreSQL "gym_enquiries" table verified/created successfully.');
    client.release();
  } catch (err) {
    console.error('❌ Error initializing database:', err.message);
  }
};

// Route to handle enquiry submission
app.post('/api/enquiries', async (req, res) => {
  const { name, email, phone, gender, city, plan, date } = req.body;

  // Simple validation
  if (!name || !email || !phone || !gender || !city || !plan || !date) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, phone, gender, city, plan, date) are required.' 
    });
  }

  const insertQuery = `
    INSERT INTO gym_enquiries (name, email, phone, gender, city, plan, date)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  try {
    const result = await pool.query(insertQuery, [name, email, phone, gender, city, plan, date]);
    res.status(201).json({
      success: true,
      message: 'Enquiry saved successfully!',
      data: result.rows[0]
    });
  } catch (err) {
    console.error('❌ Error inserting enquiry:', err.message);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: could not save enquiry.' 
    });
  }
});

// Route to fetch all enquiries (optional / admin view)
app.get('/api/enquiries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM gym_enquiries ORDER BY created_at DESC');
    res.json({ success: true, count: result.rowCount, data: result.rows });
  } catch (err) {
    console.error('❌ Error fetching enquiries:', err.message);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: could not fetch enquiries.' 
    });
  }
});

// Start the server
app.listen(PORT, async () => {
  console.log(`🚀 Express Server is running on http://localhost:${PORT}`);
  await initDb();
});
