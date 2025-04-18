import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Trash2, Calendar, ArrowRight, ShoppingBag } from 'lucide-react';
import QuantitySelector from '../components/QuantitySelector';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, updateEventDate, getCartTotal } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleDateChange = (productId: string, newDate: string) => {
    updateEventDate(productId, newDate);
  };

  const handleCheckout = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">¡Explora nuestros paquetes y encuentra el perfecto para tu evento!</p>
            <Link 
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
            >
              Ver Paquetes <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-6 border-b border-gray-200 last:border-0">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            item.product.tier === 'Basic' ? 'bg-blue-100 text-blue-700' :
                            item.product.tier === 'Premium' ? 'bg-purple-100 text-purple-700' :
                            'bg-pink-100 text-pink-700'
                          }`}>
                            {item.product.tier}
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 items-center mt-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Cantidad:</label>
                          <QuantitySelector
                            quantity={item.quantity}
                            onChange={(value) => handleQuantityChange(item.product.id, value)}
                            min={1}
                            max={5}
                          />
                        </div>

                        <div className="flex-1">
                          <label className="block text-sm text-gray-600 mb-1">
                            <Calendar className="inline-block h-4 w-4 mr-1" />
                            Fecha del Evento:
                          </label>
                          <input
                            type="date"
                            value={item.eventDate || ''}
                            onChange={(e) => handleDateChange(item.product.id, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-4 text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          ${new Intl.NumberFormat('es-MX').format(item.product.price * item.quantity)}
                          <span className="text-sm font-normal text-gray-600 ml-1">MXN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-gray-600">
                    <span>{item.product.name} (x{item.quantity})</span>
                    <span>${new Intl.NumberFormat('es-MX').format(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${new Intl.NumberFormat('es-MX').format(getCartTotal())} MXN</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors"
              >
                Proceder al Pago
              </button>

              {showSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center animate-fadeIn">
                  ¡Gracias por tu pedido! Te contactaremos pronto para confirmar los detalles.
                </div>
              )}

              <p className="text-sm text-gray-500 mt-4 text-center">
                Al proceder con el pago, aceptas nuestros términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;