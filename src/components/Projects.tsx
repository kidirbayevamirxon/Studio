// components/Projects.tsx
import { useState } from "react";
import { Download, Play, Loader } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useData } from "../contexts/DataContext";
import { axiosInstance } from "../api/api";

export function Projects() {
  const { projects, loading, error, refreshProjects } = useData();
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (videoId: string, projectTitle: string) => {
    setDownloadingId(videoId);
    try {
      // API dan video yuklash
      const response = await axiosInstance.get(`/yt/download/${videoId}`, {
        responseType: 'blob',
      });
      
      // Blob ni yuklab olish
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${projectTitle}.mp4`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download video. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  const handlePlayVideo = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center bg-red-50 p-8 rounded-lg">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={refreshProjects}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
              <div className="text-3xl font-bold mb-1">{projects.length}+</div>
              <p className="text-gray-600">Total Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">
                {projects.filter(p => new Date(p.date).getFullYear() === new Date().getFullYear()).length}
              </div>
              <p className="text-gray-600">This Year</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Recent Work</h2>
          <p className="text-gray-600">
            Here are some of our latest wedding video projects. Each one tells a unique love story.
          </p>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects available yet. Check back soon!</p>
          </div>
        ) : (
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                    <button
                      onClick={() => handlePlayVideo(project.videoUrl)}
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-600 mb-1">
                    {project.date} • {project.location}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handlePlayVideo(project.videoUrl)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Play size={16} />
                      Watch
                    </button>
                    <button
                      onClick={() => handleDownload(project.id, project.title)}
                      disabled={downloadingId === project.id}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {downloadingId === project.id ? (
                        <Loader size={16} className="animate-spin" />
                      ) : (
                        <Download size={16} />
                      )}
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-lg mb-8">
            Let's capture your special moments and create a video you'll treasure forever
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Date
          </a>
        </div>
      </section>
    </div>
  );
}