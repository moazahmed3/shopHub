import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="card h-[100%] ">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="relative h-60 flex items-center justify-center p-4 bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          />

          {/* Category Tag */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-md font-medium capitalize">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
            {product.title.slice(0,25) +"......."}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating?.rate || 0)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300 fill-gray-300"
                  }
                />
              ))}
            </div>
            <span>({product.rating?.count || 0})</span>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">
              ${product.price}
            </span>

            <Link to={`/product/${product.id}`}>
              <button className="bg-blue-600 hover:bg-blue-800 text-white text-sm px-8  cursor-pointer py-2 rounded-md transition">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
