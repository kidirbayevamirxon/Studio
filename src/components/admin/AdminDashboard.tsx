import { useData } from "../../contexts/DataContext";
import { Card } from "../ui/card";
import { Users, FolderOpen, Briefcase, TrendingUp } from "lucide-react";

export function AdminDashboard() {
  const { teamMembers, projects, services } = useData();

  const stats = [
    {
      label: "Team Members",
      value: teamMembers.length,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Projects",
      value: projects.length,
      icon: FolderOpen,
      color: "bg-purple-500",
    },
    {
      label: "Services",
      value: services.length,
      icon: Briefcase,
      color: "bg-pink-500",
    },
    {
      label: "Total Views",
      value: "12.5K",
      icon: TrendingUp,
      color: "bg-green-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-gray-600">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Team Overview</h3>
          <div className="space-y-3">
            {teamMembers.slice(0, 5).map((member) => (
              <div key={member.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {member.level}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
