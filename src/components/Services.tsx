import { Camera, Film, Music, Sparkles, Video, Clock } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Full Wedding Coverage",
      description:
        "Complete coverage of your wedding day from preparation to reception. We capture every moment, every smile, and every tear of joy.",
      features: [
        "Pre-wedding preparation",
        "Ceremony coverage",
        "Reception highlights",
        "8-12 hours of coverage",
      ],
      color: "blue",
    },
    {
      icon: Film,
      title: "Cinematic Highlight Film",
      description:
        "A beautifully edited 5-10 minute film that tells your love story in a cinematic style with music and professional color grading.",
      features: [
        "5-10 minute highlight reel",
        "Professional color grading",
        "Licensed music",
        "Multiple revisions",
      ],
      color: "purple",
    },
    {
      icon: Camera,
      title: "Drone Videography",
      description:
        "Stunning aerial shots that add a unique perspective to your wedding video. Capture the beauty of your venue from above.",
      features: [
        "4K aerial footage",
        "Licensed drone pilot",
        "Weather backup plan",
        "Venue coordination",
      ],
      color: "pink",
    },
    {
      icon: Music,
      title: "Same-Day Edit",
      description:
        "A quick edit of highlights from your ceremony and early reception, ready to play at your evening reception.",
      features: [
        "3-5 minute edit",
        "Same-day delivery",
        "Reception screening",
        "Social media ready",
      ],
      color: "green",
    },
    {
      icon: Sparkles,
      title: "Pre-Wedding Shoot",
      description:
        "A separate video session before your wedding day to capture your love story, engagement, or couple moments in a relaxed setting.",
      features: [
        "2-3 hours session",
        "Location of choice",
        "Edited video included",
        "Perfect for save-the-dates",
      ],
      color: "orange",
    },
    {
      icon: Clock,
      title: "Raw Footage Delivery",
      description:
        "Get access to all the raw footage from your wedding day. Every moment captured, unedited and complete.",
      features: [
        "Full ceremony footage",
        "Complete reception coverage",
        "All camera angles",
        "USB drive delivery",
      ],
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; border: string }> = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
      },
      pink: {
        bg: "bg-pink-50",
        icon: "text-pink-600",
        border: "border-pink-200",
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200",
      },
      orange: {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "text-indigo-600",
        border: "border-indigo-200",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      <section className="bg-linear-to-r from-purple-600 to-pink-600 text-white py-20 px-4">
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
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className={colors.icon} size={28} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className={`${colors.icon} mr-2`}>✓</span>
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
