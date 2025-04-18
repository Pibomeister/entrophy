import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onChange, 
  min = 1, 
  max = 10 
}) => {
  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`p-2 transition-colors ${
          quantity <= min 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Minus size={16} />
      </button>
      
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className="w-12 text-center focus:outline-none py-1"
      />
      
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`p-2 transition-colors ${
          quantity >= max 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;