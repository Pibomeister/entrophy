import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

type TierFilter = 'All' | 'Basic' | 'Premium' | 'Luxury';

const Products: React.FC = () => {
  const [tierFilter, setTierFilter] = useState<TierFilter>('All');
  const [sortOption, setSortOption] = useState<string>('default');

  const filteredProducts = products.filter(product => {
    if (tierFilter === 'All') return true;
    return product.tier === tierFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'guests-asc':
        return a.maxGuests - b.maxGuests;
      case 'guests-desc':
        return b.maxGuests - a.maxGuests;
      default:
        return 0;
    }
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Paquetes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra variedad de mesas de dulces para hacer de tu evento una experiencia inolvidable.
            Elige el paquete que mejor se adapte a tus necesidades y personalízalo como desees.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center">
            <Filter className="text-gray-500 mr-2" size={20} />
            <span className="text-gray-700 font-medium mr-4">Filtrar:</span>
            <div className="flex flex-wrap gap-2">
              {(['All', 'Basic', 'Premium', 'Luxury'] as TierFilter[]).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tierFilter === tier
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tier === 'All' ? 'Todos' : tier}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center w-full md:w-auto">
            <span className="text-gray-700 font-medium mr-4">Ordenar por:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full md:w-auto"
            >
              <option value="default">Relevancia</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="guests-asc">Capacidad: Menor a Mayor</option>
              <option value="guests-desc">Capacidad: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-3 py-16 text-center">
              <p className="text-xl text-gray-600">No se encontraron productos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;