import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import LoadingComponent from "./LoadingComponent";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=8"
      );
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch products from API
    fetchProducts();
  }, []);

  // Loading State
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products at unbeatable
            prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/*  Show ALl Products */}
        <div className="text-center mt-12">
          <Link to={"/products"}  >
            <button className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Show ALl Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
