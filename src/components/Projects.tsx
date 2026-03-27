import { Download, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sarah & James - Garden Wedding",
      date: "June 2025",
      location: "Botanical Gardens",
      thumbnail:
        "https://images.unsplash.com/photo-1704455305845-d5f66a560e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwd2VkZGluZyUyMGNlcmVtb255JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzQ0NTE0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#",
      description:
        "A beautiful outdoor ceremony surrounded by nature. The couple's joy was infectious as they celebrated with 150 guests.",
      duration: "8:45",
    },
    {
      id: 2,
      title: "Maria & David - Beach Sunset",
      date: "August 2025",
      location: "Coastal Resort",
      thumbnail:
        "https://images.unsplash.com/photo-1768900043654-edf96dfc0105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWMlMjBtb21lbnR8ZW58MXx8fHwxNzc0NDUxNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#",
      description:
        "An intimate beach wedding at sunset. The golden hour lighting created magical moments that will last forever.",
      duration: "12:30",
    },
    {
      id: 3,
      title: "Emily & Robert - Classic Elegance",
      date: "October 2025",
      location: "Historic Mansion",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      videoUrl: "#",
      description:
        "A grand celebration in a historic venue. Traditional elegance meets modern romance in this stunning production.",
      duration: "15:20",
    },
    {
      id: 4,
      title: "Lisa & Michael - Rustic Charm",
      date: "September 2025",
      location: "Countryside Barn",
      thumbnail:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      videoUrl: "#",
      description:
        "A charming rustic wedding with handmade decorations and personal touches. The perfect blend of casual and elegant.",
      duration: "10:15",
    },
    {
      id: 5,
      title: "Anna & Chris - Modern Minimalist",
      date: "November 2025",
      location: "Contemporary Art Gallery",
      thumbnail:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      videoUrl: "#",
      description:
        "A sleek and sophisticated celebration in a modern space. Clean lines and artistic vision throughout.",
      duration: "9:30",
    },
    {
      id: 6,
      title: "Jessica & Tom - Winter Wonderland",
      date: "December 2024",
      location: "Mountain Lodge",
      thumbnail:
        "https://images.unsplash.com/photo-1522673607211-8f6f9b9fb75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      videoUrl: "#",
      description:
        "A magical winter wedding with snow-covered landscapes. Cozy elegance meets breathtaking mountain views.",
      duration: "11:45",
    },
  ];

  const handleDownload = (projectTitle: string) => {
    alert(
      `Download request for "${projectTitle}"\n\nIn a production environment, this would download the video file. For demo purposes, downloads are simulated.`
    );
  };

  const handlePlayVideo = (projectTitle: string) => {
    alert(
      `Play video: "${projectTitle}"\n\nIn a production environment, this would open a video player. For demo purposes, video playback is simulated.`
    );
  };

  return (
    <div className="min-h-screen">
      <section className="bg-linear-to-r from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Our Projects</h1>
          <p className="text-xl">
            Explore our portfolio of beautiful wedding videos
          </p>
        </div>
      </section>
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-1">500+</div>
              <p className="text-gray-600">Total Projects</p>
            </div>
            <div>
              <div className="text-3xl mb-1">50+</div>
              <p className="text-gray-600">This Year</p>
            </div>
            <div>
              <div className="text-3xl mb-1">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Recent Work</h2>
          <p className="text-gray-600">
            Here are some of our latest wedding video projects. Each one tells
            a unique love story.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden group">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(project.title)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-blue-600 rounded-full p-4 hover:bg-blue-600 hover:text-white"
                  >
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {project.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <div className="text-sm text-gray-600 mb-1">
                  {project.date} • {project.location}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePlayVideo(project.title)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play size={16} />
                    Watch
                  </button>
                  <button
                    onClick={() => handleDownload(project.title)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-lg mb-8">
            Let's capture your special moments and create a video you'll
            treasure forever
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Date
          </a>
        </div>
      </section>
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>
            Note: Download buttons provide video files in multiple formats (MP4,
            MOV). Files are typically 2-5GB depending on length and quality. All
            downloads include a license for personal use.
          </p>
        </div>
      </section>
    </div>
  );
}
