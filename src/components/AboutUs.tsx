import { Award, Users, Video } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutUs() {
  return (
    <div className="min-h-screen">
      <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">About Azat Studio</h1>
          <p className="text-xl">
            Creating timeless wedding memories since 2015
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Azat Studio has been dedicated to capturing the
              most precious moments of your special day. With a passion for
              storytelling and an eye for detail, we've grown from a small team
              to one of the most trusted wedding videography studios in the
              region.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a simple belief: every couple deserves to
              relive their wedding day through beautiful, cinematic videos that
              capture not just the events, but the emotions and atmosphere that
              make each wedding unique.
            </p>
            <p className="text-gray-700">
              Over the years, we've refined our craft, invested in the best
              equipment, and built a team of talented professionals who share
              our vision of excellence.
            </p>
          </div>
          <div className="h-100 bg-gray-200 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1771924368428-e71c68d17a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaGVyJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ0NTE0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Azat Studio Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="text-center p-8 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-4xl mb-2">10+</h3>
            <p className="text-xl text-gray-700">Years of Experience</p>
            <p className="text-gray-600 mt-2">
              Serving couples since 2015 with dedication and professionalism
            </p>
          </div>
          <div className="text-center p-8 bg-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="text-white" size={32} />
            </div>
            <h3 className="text-4xl mb-2">500+</h3>
            <p className="text-xl text-gray-700">Projects Completed</p>
            <p className="text-gray-600 mt-2">
              Over 500 weddings captured and countless memories preserved
            </p>
          </div>
          <div className="text-center p-8 bg-pink-50 rounded-lg">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-4xl mb-2">98%</h3>
            <p className="text-xl text-gray-700">Client Satisfaction</p>
            <p className="text-gray-600 mt-2">
              Our clients' happiness is our greatest achievement
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-blue-600 bg-gray-50">
              <h3 className="text-xl mb-3">Quality First</h3>
              <p className="text-gray-700">
                We never compromise on quality. From filming to final editing,
                every frame is crafted with meticulous attention to detail.
              </p>
            </div>
            <div className="p-6 border-l-4 border-purple-600 bg-gray-50">
              <h3 className="text-xl mb-3">Personal Touch</h3>
              <p className="text-gray-700">
                Every couple is unique, and so is every wedding. We take time
                to understand your story and vision.
              </p>
            </div>
            <div className="p-6 border-l-4 border-pink-600 bg-gray-50">
              <h3 className="text-xl mb-3">Professional Excellence</h3>
              <p className="text-gray-700">
                Our team consists of experienced professionals who are
                passionate about their craft and committed to excellence.
              </p>
            </div>
            <div className="p-6 border-l-4 border-green-600 bg-gray-50">
              <h3 className="text-xl mb-3">Timeless Memories</h3>
              <p className="text-gray-700">
                We create videos that you'll cherish for a lifetime, capturing
                the essence and emotion of your special day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
