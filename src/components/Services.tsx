import { Check } from "lucide-react";
import { useData } from "../contexts/DataContext";

export function Services() {
  const { services } = useData();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive wedding videography packages tailored to your needs
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                className="p-6 rounded-lg border-2 border-pink-200 bg-pink-50 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl mb-2 font-semibold">{service.title}</h3>
                <p className="text-2xl text-pink-600 mb-3">{service.price}</p>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Check className="text-pink-600 mr-2 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-8">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">Professional Equipment</h3>
              <p className="text-gray-700">
                We use the latest 4K cameras, professional audio equipment, and
                stabilization gear to ensure the highest quality footage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">Experienced Team</h3>
              <p className="text-gray-700">
                Our videographers have years of experience covering weddings
                and know how to capture the perfect moments without being
                intrusive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">Fast Turnaround</h3>
              <p className="text-gray-700">
                Receive your highlight film within 4-6 weeks and full footage
                within 8-10 weeks after your wedding day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-3">Customizable Packages</h3>
              <p className="text-gray-700">
                Mix and match services to create the perfect package for your
                needs and budget. We're flexible and accommodating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
