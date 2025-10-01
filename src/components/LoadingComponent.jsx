import { Loader2 } from "lucide-react";
import React from "react";

export default function LoadingComponent() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
          <p className="text-gray-600 text-lg">Loading amazing products...</p>
        </div>
      </div>
    </section>
  );
}
