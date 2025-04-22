'use client';

import Image from 'next/image';
import RomanticButton from '../ui/RomanticButton';
import { FaHeart, FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  isFavorite?: boolean;
  rating?: number;
  size?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative group">
      {/* Product Image */}
      <div className="relative h-64">
        <Image 
          src={`/images/cakes/${product.image}`}
          alt={product.name}
          fill
          className="object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {product.isNew && (
            <span className="bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.rating && (
            <span className="bg-white text-amber-500 text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <FaStar className="mr-1" /> {product.rating}
            </span>
          )}
        </div>
        
        {/* Favorite Button */}
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full transition-all 
            ${product.isFavorite ? 'text-rose-600 bg-rose-50' : 'text-gray-400 bg-white'}`}
        >
          <FaHeart />
        </button>
        
        {/* Quick Add to Cart (shown on hover) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <RomanticButton 
            size="sm" 
            fullWidth 
            icon="cart"
            animate="pulse"
          >
            Add to Cart
          </RomanticButton>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-rose-900">{product.name}</h3>
          <span className="text-lg font-bold text-rose-600">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          {product.size && (
            <span className="text-sm text-gray-500 bg-rose-50 px-2 py-1 rounded">
              {product.size}
            </span>
          )}
          
          <RomanticButton 
            variant="outline" 
            size="sm"
            icon="arrow"
          >
            View Details
          </RomanticButton>
        </div>
      </div>
    </div>
  );
}
