import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out through any of the methods below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-sm rounded-xl p-6 flex items-center gap-4">
            <Mail className="text-blue-600" size={28} />
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">support@shophub.com</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 flex items-center gap-4">
            <Phone className="text-blue-600" size={28} />
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 flex items-center gap-4">
            <MapPin className="text-blue-600" size={28} />
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">123 Market Street, NY</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-600 outline-none"
              required
            ></textarea>
            <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
