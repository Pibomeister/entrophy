import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ChevronRight, Calendar, CheckCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import QuantitySelector from '../components/QuantitySelector';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe o ha sido eliminado.</p>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedDate || null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Calculate minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Calculate maximum date (1 year from now)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-pink-500 transition-colors">Inicio</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="/products" className="hover:text-pink-500 transition-colors">Paquetes</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-video lg:aspect-square"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              product.tier === 'Basic' ? 'bg-blue-100 text-blue-700' :
              product.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
              'bg-pink-100 text-pink-700'
            }`}>
              {product.tier}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            
            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${new Intl.NumberFormat('es-MX').format(product.price)}
              <span className="text-sm font-normal text-gray-600 ml-2">MXN</span>
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Características:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <label htmlFor="eventDate" className="block text-gray-700 font-medium mb-2 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-pink-500" />
                Fecha del Evento
              </label>
              <input
                type="date"
                id="eventDate"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDate}
                max={maxDateStr}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Selecciona la fecha de tu evento (disponibilidad sujeta a confirmación)</p>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Cantidad</label>
              <QuantitySelector 
                quantity={quantity} 
                onChange={setQuantity} 
                min={1} 
                max={5} 
              />
              <p className="text-sm text-gray-500 mt-1">Número de mesas de dulces para tu evento</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={!selectedDate}
                className={`flex items-center justify-center px-8 py-3 rounded-lg font-bold ${
                  selectedDate 
                    ? 'bg-pink-500 text-white hover:bg-pink-600' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors flex-1`}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Agregar al Carrito
              </button>
              
              <button 
                onClick={() => {
                  if (selectedDate) {
                    addToCart(product, quantity, selectedDate || null);
                    navigate('/cart');
                  }
                }}
                disabled={!selectedDate}
                className={`px-8 py-3 rounded-lg font-bold ${
                  selectedDate 
                    ? 'bg-gray-800 text-white hover:bg-gray-900' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors flex-1`}
              >
                Comprar Ahora
              </button>
            </div>
            
            {showSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center animate-fadeIn">
                <CheckCircle className="h-5 w-5 mr-2" />
                ¡Producto agregado al carrito!
              </div>
            )}
            
            {!selectedDate && (
              <div className="mt-4 p-3 bg-amber-100 text-amber-700 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Selecciona una fecha para continuar
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-4 text-pink-500 border-b-2 border-pink-500 font-medium">
                Información Adicional
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Detalles del Paquete</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">¿Qué incluye?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Montaje y desmontaje completo</li>
                  <li>✓ Decoración temática según el tipo de evento</li>
                  <li>✓ Mesa principal con mantelería</li>
                  <li>✓ Recipientes y accesorios decorativos</li>
                  <li>✓ Personal de atención durante el evento</li>
                  {product.tier !== 'Basic' && <li>✓ Bolsitas de recuerdo para invitados</li>}
                  {product.tier === 'Luxury' && <li>✓ Fuente de chocolate y mesa de postres</li>}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Política de Reserva</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Se requiere un depósito del 50% para confirmar la reserva</li>
                  <li>• El 50% restante debe liquidarse 7 días antes del evento</li>
                  <li>• Cancelaciones con más de 30 días: reembolso del 75%</li>
                  <li>• Cancelaciones entre 15-30 días: reembolso del 50%</li>
                  <li>• Cancelaciones con menos de 15 días: sin reembolso</li>
                  <li>• Cambios de fecha sin costo con 15 días de anticipación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;