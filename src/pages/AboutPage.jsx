import { ShoppingBag, Users, Award, Truck, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            <ShoppingBag size={20} />
            <span className="font-semibold">About ShopHub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Trusted Shopping Destination
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ShopHub is your one-stop shop for premium products at unbeatable prices. 
            We're committed to providing quality products and exceptional customer service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="text-blue-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
            <p className="text-gray-600">Quality Products</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">50K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">99%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

      

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose ShopHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Shipping</h3>
              <p className="text-gray-600">
                Free shipping on orders over $50. Get your products delivered quickly and safely.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Payment</h3>
              <p className="text-gray-600">
                100% secure payment processing. Your information is always protected.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is always here to help you with any questions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our wide range of products and find exactly what you're looking for.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
          >
            Browse Products
          </a>
        </div>

      </div>
    </div>
  );
}