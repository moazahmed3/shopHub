import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Loader2,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  Check,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import LoadingComponent from "../components/LoadingComponent";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  async function fetchProductDetails() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Loading State
  if (loading) {
    return (
     <LoadingComponent/>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to={-1}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left: Product Image */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col space-y-6">
              {/* Category Badge */}
              <div>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(product.rating?.rate || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-xl">
                  ${(product.price * 1.3).toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Save 30%
                </span>
              </div>

              {/* Description */}
              <div className="border-t border-b py-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 cursor-pointer py-2 hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x  border-gray-300 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 cursor-pointer py-2 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  className={`flex-1 flex items-center cursor-pointer justify-center gap-2 py-4 rounded-lg font-semibold transition-all bg-blue-600 text-white hover:bg-blue-800`}
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 cursor-pointer border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition">
                  <Heart size={24} />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Truck className="text-blue-600" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Free Shipping</p>
                    <p className="text-xs">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Shield className="text-blue-600" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Secure Payment</p>
                    <p className="text-xs">100% protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <RefreshCw className="text-blue-600" size={24} />
                  <div>
                    <p className="font-semibold text-sm">Easy Returns</p>
                    <p className="text-xs">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
