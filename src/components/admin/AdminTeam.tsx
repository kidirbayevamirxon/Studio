import { useState } from "react";
import { useData, TeamMember } from "../../contexts/DataContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Plus, Edit2, Trash2, X } from "lucide-react";

export function AdminTeam() {
  const {
    teamMembers,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    loading,
    error,
  } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "", // 🔹 qo‘shildi
    role: "",
    specialties: "", // 🔹 string sifatida
    telegram: "", // 🔹 qo‘shildi
  });
  const resetForm = () => {
    setFormData({
      name: "",
      position: "",
      role: "",
      specialties: "",
      telegram: "",
    });
    setEditingMember(null);
    setIsModalOpen(false);
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const memberData = {
      name: formData.name,
      position: formData.position,
      role: formData.role,
      specialties: formData.specialties, // ⚠️ string
      telegram: formData.telegram,
    };

    try {
      if (editingMember) {
        await updateTeamMember(editingMember.id, memberData);
      } else {
        await addTeamMember(memberData);
      }
      resetForm();
    } catch (err) {
      console.error("Failed to save team member:", err);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      ...member,
      specialties: member.specialties,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      try {
        await deleteTeamMember(id);
      } catch (err) {
        console.error("Failed to delete team member:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Team Management</h2>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus size={16} className="mr-2" />
          Add Team Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="p-6">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <p className="text-xs text-gray-500 mb-2">{member.position}</p>
            <p className="text-xs text-gray-500 mb-2">{member.telegram}</p>

            <div className="flex space-x-2">
              {/* <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(member)}
              >
                <Edit2 size={14} className="mr-1" />
                Edit
              </Button> */}
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDelete(member.id)}
                className="text-red-600 hover:text-red-700 px-4 py-2"
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
              <h3 className="text-xl font-bold">
                {editingMember ? "Edit Team Member" : "Add Team Member"}
              </h3>
              <button onClick={resetForm}>
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <Input
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <Input
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Telegram
                </label>
                <Input
                  value={formData.telegram}
                  onChange={(e) =>
                    setFormData({ ...formData, telegram: e.target.value })
                  }
                  placeholder="@username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Specialties (comma-separated)
                </label>
                <Input
                  value={formData.specialties}
                  onChange={(e) =>
                    setFormData({ ...formData, specialties: e.target.value })
                  }
                  placeholder="Video Editing, Color Grading, Sound Design"
                  required
                />
              </div>

              <div className="flex space-x-2">
                <Button type="submit" className="flex-1">
                  {editingMember ? "Update" : "Add"} Team Member
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
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
