import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-pink-500 flex items-center"
        >
          <span className="text-3xl">🍬</span>
          <span className="ml-2">DulceMesa</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-pink-500 transition-colors font-medium">
            Inicio
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-pink-500 transition-colors font-medium">
            Paquetes
          </Link>
          <Link to="/gallery" className="text-gray-800 hover:text-pink-500 transition-colors font-medium">
            Galería
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-pink-500 transition-colors font-medium">
            Contacto
          </Link>
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="text-gray-800 hover:text-pink-500 transition-colors" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalCartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation Icon */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="text-gray-800" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalCartItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-pink-500 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/products" 
              className="text-gray-800 hover:text-pink-500 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Paquetes
            </Link>
            <Link 
              to="/gallery" 
              className="text-gray-800 hover:text-pink-500 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-pink-500 transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;