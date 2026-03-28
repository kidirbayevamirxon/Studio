import { Link } from "react-router";
import { Play, Camera, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-150 flex items-center justify-center bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Azat Studio</h1>
          <p className="text-xl md:text-2xl mb-8">
            Capturing Your Perfect Wedding Moments
          </p>
          <p className="text-lg mb-8">
            Professional wedding videography that tells your unique love story
          </p>
          <Link
            to="/projects"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Professional Quality</h3>
            <p className="text-gray-600">
              State-of-the-art equipment and experienced videographers
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Cinematic Style</h3>
            <p className="text-gray-600">
              Beautiful storytelling that captures every emotion
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl mb-3">Your Story</h3>
            <p className="text-gray-600">
              Personalized videos that reflect your unique love
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create something beautiful together
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
