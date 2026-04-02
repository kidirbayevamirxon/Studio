// components/admin/AdminProjects.tsx
import { useState } from "react";
import { useData, Project } from "../../contexts/DataContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Plus, Edit2, Trash2, X, RefreshCw } from "lucide-react";

export function AdminProjects() {
  const {
    projects,
    loading,
    error,
    refreshData,
    addProject,
    updateProject,
    deleteProject,
  } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [duration, setDuration] = useState(0);

  const resetForm = () => {
    setUrl("");
    setEditingProject(null);
    setIsModalOpen(false);
  };
const handleEdit = (project: Project) => {
  if (!project.video_id) {
    console.error("Project video_id is missing!", project);
    return;
  }
  setEditingProject(project);
  setUrl(project.url || "");
  setTitle(project.title || "");
  setThumbnail(project.thumbnail || "");
  setDuration(project.duration || 0);
  setIsModalOpen(true);
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingProject && editingProject.video_id) {
        await updateProject(editingProject.video_id, { url }); // PATCH video_id bilan
      } else if (!editingProject) {
        await addProject({ url }); // POST yangi video
      } else {
        throw new Error("Editing project video_id is undefined!");
      }
      resetForm();
    } catch (err) {
      console.error("Failed to save project:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleDelete = async (video_id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(video_id); // string video_id
      } catch (err) {
        console.error("Failed to delete project:", err);
      }
    }
  };
  if (loading && projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={refreshData}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 mx-auto"
        >
          <RefreshCw size={16} />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Project Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            Total: {projects?.length || 0} projects
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus size={16} className="mr-2" />
          Add Project
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card
            key={project.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/400x300?text=No+Image")
              }
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-1">📍 {project.location}</p>
            <p className="text-sm text-gray-600 mb-2">
              📅 {new Date(project.created_at).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
              {project.description}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Duration: {project.duration}
            </p>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(project)}
                className="flex-1"
              >
                <Edit2 size={14} className="mr-1" />
                Edit
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDelete(project.video_id)}
                className="text-red-600 hover:text-red-700 flex-1"
              >
                <Trash2 size={14} className="mr-1" />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Edit Project</h3>
              <button onClick={resetForm} disabled={isSubmitting}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thumbnail URL *</label>
                <Input
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration (hours) *</label>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Update Project"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} disabled={isSubmitting}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
