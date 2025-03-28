
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isSale?: boolean;
    isOrganic?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white dark:bg-card rounded-xl shadow-soft overflow-hidden hover-scale group transition-all">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-500 text-white rounded-md">
              New
            </span>
          )}
          {product.isSale && (
            <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-md">
              {discount}% Off
            </span>
          )}
          {product.isOrganic && (
            <span className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-md">
              Organic
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-3 right-3">
          <button className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground">{product.category}</span>
          <h3 className="font-medium text-base line-clamp-1">{product.name}</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
