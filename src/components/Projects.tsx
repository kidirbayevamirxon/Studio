import { Download, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useData } from "../contexts/DataContext";

export function Projects() {
  const { projects } = useData();

  const handleDownload = (projectTitle: string) => {
    // In a real application, this would trigger an actual download
    alert(
      `Download request for "${projectTitle}"\n\nIn a production environment, this would download the video file. For demo purposes, downloads are simulated.`
    );
  };

  const handlePlayVideo = (projectTitle: string) => {
    // In a real application, this would open a video player
    alert(
      `Play video: "${projectTitle}"\n\nIn a production environment, this would open a video player. For demo purposes, video playback is simulated.`
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Our Projects</h1>
          <p className="text-xl">
            Explore our portfolio of beautiful wedding videos
          </p>
        </div>
      </section>

      {/* Filter/Stats Section */}
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

      {/* CTA Section */}
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

      {/* Note about downloads */}
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
