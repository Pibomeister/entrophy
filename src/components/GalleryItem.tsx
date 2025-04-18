import React, { useState } from 'react';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const getTierTag = (tier: string) => {
  switch (tier) {
    case 'Basic':
      return { class: 'bg-blue-100 text-blue-700', label: 'Básico' };
    case 'Premium':
      return { class: 'bg-purple-100 text-purple-700', label: 'Premium' };
    case 'Luxury':
      return { class: 'bg-pink-100 text-pink-700', label: 'Luxury' };
    default:
      return { class: 'bg-gray-100 text-gray-700', label: tier };
  }
};

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const tierTag = getTierTag(image.tier);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
      onClick={onClick}
    >
      <div className={`aspect-square bg-gray-200 ${isLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
        <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <img 
        src={image.url} 
        alt={image.alt}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <p className="font-medium">{image.alt}</p>
        </div>
      </div>
      <div className={`absolute top-3 right-3 ${tierTag.class} px-2 py-1 rounded-full text-xs font-medium`}>
        {tierTag.label}
      </div>
    </div>
  );
};

export default GalleryItem;