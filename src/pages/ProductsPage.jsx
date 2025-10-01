import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Loader2, Package } from "lucide-react";
import LoadingComponent from "../components/LoadingComponent";

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(8);

  async function fetchAllProducts() {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
      setDisplayedProducts(response.data.slice(0, 8));
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch all products from API
    fetchAllProducts();
  }, []);

  // Load More Function
  const handleLoadMore = () => {
    const newItemsToShow = itemsToShow + 8;
    setItemsToShow(newItemsToShow);
    setDisplayedProducts(allProducts.slice(0, newItemsToShow));
  };

  // Show Less Function
  const handleShowLess = () => {
    setItemsToShow(8);
    setDisplayedProducts(allProducts.slice(0, 8));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading State
  if (loading) {
    return (
      <LoadingComponent/>
    );
  }


  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Package size={20} />
            <span className="font-semibold">
              {allProducts.length} Products Available
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            All Products
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        <div className="flex flex-col items-center gap-4">
          {displayedProducts.length < allProducts.length && (
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Load More Products
              <span className=" px-2 py-0.5 rounded text-sm">
                +8
              </span>
            </button>
          )}

          {displayedProducts.length === allProducts.length && (
            <button
              onClick={handleShowLess}
              className="text-gray-600 border-2 cursor-pointer border-blue-600 hover:text-blue-600 font-medium transition-colors  px-8 py-3 rounded-lg   flex items-center gap-2"
            >
              Show Less
            </button>
          )}

          {/* Progress Indicator */}
          <p className="text-gray-500 text-sm">
            Showing {displayedProducts.length} of {allProducts.length} products
          </p>
        </div>
      </div>
    </div>
  );
}
