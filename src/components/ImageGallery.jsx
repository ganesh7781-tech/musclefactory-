import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';

function ImageGallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      category: 'strength',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800',
      title: 'Premium Strength Racks',
      description: 'Olympic platforms, cages, and heavy lifter zone.'
    },
    {
      category: 'strength',
      image: 'https://images.unsplash.com/photo-1626251030363-d0231fddb582?q=80&w=800',
      title: 'Free Weight Station',
      description: 'Dumbbells ranging up to heavy sets and adjustable benches.'
    },
    {
      category: 'cardio',
      image: 'https://images.unsplash.com/photo-1571731979149-75be74325c6e?q=80&w=800',
      title: 'Cardio & Conditioning Line',
      description: 'High-end air runners, assault bikes, and rowers.'
    },
    {
      category: 'combat',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800',
      title: 'MMA & Grappling Turf',
      description: 'Professional padding mats, heavy bags, and striking mitts.'
    },
    {
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800',
      title: 'Functional Training Floor',
      description: 'Battle ropes, kettlebell tracks, and sled zones.'
    },
    {
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      title: 'Premium Gym Lounge',
      description: 'Welcoming entrance lobby and members reception.'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => {
    // find index in the filtered items array
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const categories = [
    { id: 'all', label: 'ALL IMAGES' },
    { id: 'strength', label: 'STRENGTH ZONE' },
    { id: 'cardio', label: 'CARDIO LINE' },
    { id: 'combat', label: 'MMA TURF' },
    { id: 'interior', label: 'INTERIORS' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3.5 max-w-3xl mx-auto px-4">
        <span className="text-xs text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block">
          Gym Gallery
        </span>
        <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white leading-tight">
          Explore the Muscle Factory Hub
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm font-semibold leading-relaxed max-w-xl mx-auto">
          Explore our premium training zones.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setFilter(cat.id);
              closeLightbox();
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
              filter === cat.id
                ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow'
                : 'bg-brand-card text-brand-muted border-brand-border hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="bg-brand-card border border-brand-border rounded-xl overflow-hidden shadow-lg group relative aspect-[4/3] cursor-pointer hover:border-brand-accent/40 transition-all duration-300 animate-fadeIn"
          >
            {/* Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left" />

            {/* View Icon Overlay (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-bg shadow-accent-glow scale-90 group-hover:scale-100 transition-transform duration-300">
                <Eye className="h-5 w-5" />
              </div>
            </div>

            {/* Image Info (Slides Up on Hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-left z-10">
              <h4 className="font-extrabold text-sm text-white">{item.title}</h4>
              <p className="text-[10px] text-brand-muted font-bold block mt-0.5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Popup */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-brand-muted hover:text-white p-2.5 bg-brand-card border border-brand-border hover:border-brand-accent rounded-lg transition-all z-50 cursor-pointer"
            aria-label="Close Gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={showPrev}
            className="absolute left-4 p-2.5 bg-brand-card/85 border border-brand-border hover:border-brand-accent text-brand-muted hover:text-white rounded-lg transition-all z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Large Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full px-4 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="bg-brand-card border border-brand-border p-2 rounded-2xl shadow-2xl relative overflow-hidden select-none">
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-h-[70vh] rounded-lg object-contain w-full mx-auto"
              />
            </div>
            
            {/* Caption */}
            <div className="space-y-1 bg-black/40 border border-brand-border/40 backdrop-blur-md px-6 py-3.5 rounded-xl max-w-xl">
              <h4 className="font-extrabold text-base text-white">{filteredItems[lightboxIndex].title}</h4>
              <p className="text-xs text-brand-muted font-semibold">{filteredItems[lightboxIndex].description}</p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={showNext}
            className="absolute right-4 p-2.5 bg-brand-card/85 border border-brand-border hover:border-brand-accent text-brand-muted hover:text-white rounded-lg transition-all z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
