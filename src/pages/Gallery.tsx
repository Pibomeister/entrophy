import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';
import GalleryItem from '../components/GalleryItem';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'Basic', label: 'Básico' },
    { id: 'Premium', label: 'Premium' },
    { id: 'Luxury', label: 'Luxury' }
  ];

  const filteredImages = galleryImages.filter(image => 
    activeFilter === 'all' || image.tier === activeFilter
  );

  const selectedImageData = selectedImage 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Galería</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestras mesas de dulces en eventos reales. Encuentra inspiración para tu próxima celebración
            y descubre la calidad y creatividad que ofrecemos en cada proyecto.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              onClick={() => setSelectedImage(image.id)}
            />
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No se encontraron imágenes para el filtro seleccionado.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImageData.url} 
                alt={selectedImageData.alt}
                className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
              />
              <div className="mt-4 text-white">
                <p className="text-lg font-medium">{selectedImageData.alt}</p>
                <p className="text-sm opacity-80">Paquete: {selectedImageData.tier}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;