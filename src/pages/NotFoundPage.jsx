import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[180px] font-bold text-blue-600 opacity-20 select-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 -mt-20 relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <Search className="text-blue-600" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg shadow-lg hover:shadow-xl"
            >
              <Home size={20} />
              Go to Homepage
            </Link>
            
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              <Search size={20} />
              Browse Products
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium">
                Products
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft size={20} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}