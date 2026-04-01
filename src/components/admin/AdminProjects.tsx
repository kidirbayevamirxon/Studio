// components/admin/AdminProjects.tsx
import { useState } from "react";
import { useData, Project } from "../../contexts/DataContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Plus, Edit2, Trash2, X, RefreshCw } from "lucide-react";

export function AdminProjects() {
  const { projects, loading, error, refreshData, addProject, updateProject, deleteProject } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    thumbnail: "",
    url: "",
    description: "",
    duration: "", // string for input
    created_at: "", // string for input
  });

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      thumbnail: "",
      url: "",
      description: "",
      duration: "",
      created_at: "",
    });
    setEditingProject(null);
    setIsModalOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      location: project.location || "",
      thumbnail: project.thumbnail,
      url: project.url,
      description: project.description || "",
      duration: project.duration.toString(),
      created_at: project.created_at,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        title: formData.title,
        location: formData.location,
        thumbnail: formData.thumbnail,
        url: formData.url,
        description: formData.description,
        duration: Number(formData.duration),
        created_at: formData.created_at,
      };

      if (editingProject) {
        await updateProject(editingProject.id, payload); 
      } else {
        await addProject(payload); 
      }

      resetForm();
    } catch (err) {
      console.error("Failed to save project:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id);
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
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Project Management</h2>
          <p className="text-sm text-gray-600 mt-1">Total: {projects?.length || 0} projects</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus size={16} className="mr-2" />
          Add Project
        </Button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image")}
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-1">📍 {project.location}</p>
            <p className="text-sm text-gray-600 mb-2">📅 {new Date(project.created_at).toLocaleDateString()}</p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-2">{project.description}</p>
            <p className="text-xs text-gray-500 mb-3">Duration: {project.duration}</p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={() => handleEdit(project)} className="flex-1">
                <Edit2 size={14} className="mr-1" />
                Edit
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-700 flex-1">
                <Trash2 size={14} className="mr-1" />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{editingProject ? "Edit Project" : "Add Project"}</h3>
              <button onClick={resetForm} disabled={isSubmitting}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField label="Title *" value={formData.title} onChange={(v) => setFormData({ ...formData, title: v })} disabled={isSubmitting} />
              <InputField label="Location *" value={formData.location} onChange={(v) => setFormData({ ...formData, location: v })} disabled={isSubmitting} />
              <InputField label="Thumbnail URL *" value={formData.thumbnail} onChange={(v) => setFormData({ ...formData, thumbnail: v })} disabled={isSubmitting} />
              <InputField label="Video URL *" value={formData.url} onChange={(v) => setFormData({ ...formData, url: v })} disabled={isSubmitting} />
              <InputField label="Duration *" value={formData.duration} onChange={(v) => setFormData({ ...formData, duration: v })} disabled={isSubmitting} />
              <InputField label="Date *" value={formData.created_at} onChange={(v) => setFormData({ ...formData, created_at: v })} disabled={isSubmitting} />
              <div>
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex space-x-2">
                <Button type="submit" className="flex-1" disabled={isSubmitting}>{isSubmitting ? "Saving..." : editingProject ? "Update" : "Add"} Project</Button>
                <Button type="button" variant="outline" onClick={resetForm} disabled={isSubmitting}>Cancel</Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}

// Helper component for input
const InputField = ({ label, value, onChange, disabled }: { label: string; value: string; onChange: (v: string) => void; disabled?: boolean }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <Input value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} />
  </div>
);