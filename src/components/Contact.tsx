import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Get In Touch</h1>
          <p className="text-xl">
            Let's discuss your wedding and how we can capture your special day
          </p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1">Email</h3>
                <p className="text-gray-600">info@azatstudio.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  We reply within 24h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-pink-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-1">Office</h3>
                <p className="text-gray-600">123 Wedding Lane</p>
                <p className="text-sm text-gray-500">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl mb-3">Send Us a Message</h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
        </div>
        {isSubmitted ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl mb-2">Thank You!</h3>
            <p className="text-gray-700">
              Your message has been sent successfully. We'll get back to you
              within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John & Jane"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="weddingDate" className="block text-sm mb-2">
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="block text-sm mb-2">
                Wedding Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Venue name or city"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your wedding, your vision, and any specific requests..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        )}
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-8">Visit Our Studio</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Embedded Map - Using iframe for demonstration */}
            <div className="relative h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9599286874964!2d58.850836400000006!3d43.0422746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41c2b59e09b00f41%3A0x7a952a21996a1e21!2sAzatStudi!5e0!3m2!1sru!2s!4v1775145249506!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Azat Studio Location"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl mb-3">Studio Address</h3>
                  <p className="text-gray-700 mb-2">Azat Studio</p>
                  <p className="text-gray-700 mb-2">123 Wedding Lane</p>
                  <p className="text-gray-700 mb-4">New York, NY 10001</p>
                  <p className="text-sm text-gray-600">
                    Free parking available. Studio visits by appointment only.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-3">Office Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>By appointment</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    We're often on location at weddings during weekends. Please
                    call ahead to schedule a visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
