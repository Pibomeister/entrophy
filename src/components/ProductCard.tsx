import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Basic':
      return 'bg-blue-100 text-blue-700';
    case 'Premium':
      return 'bg-purple-100 text-purple-700';
    case 'Luxury':
      return 'bg-pink-100 text-pink-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, description, price, tier, imageUrl, maxGuests } = product;
  const tierColorClass = getTierColor(tier);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={`absolute top-4 right-4 ${tierColorClass} px-3 py-1 rounded-full text-sm font-medium`}>
          {tier}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center text-amber-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#F59E0B" />
            ))}
          </div>
          <span className="text-gray-600 text-sm">5.0 (24 reseñas)</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Users size={18} className="mr-1" />
          <span className="text-sm">Hasta {maxGuests} invitados</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl font-bold text-gray-900">
            ${new Intl.NumberFormat('es-MX').format(price)}
            <span className="text-sm font-normal text-gray-600"> MXN</span>
          </div>
          <Link 
            to={`/product/${id}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;