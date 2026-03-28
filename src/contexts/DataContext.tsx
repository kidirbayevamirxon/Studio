import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from 'react'

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  level: string;
  specialties: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

interface DataContextType {
  teamMembers: TeamMember[];
  projects: Project[];
  services: Service[];
  addTeamMember: (member: Omit<TeamMember, "id">) => void;
  updateTeamMember: (id: string, member: Omit<TeamMember, "id">) => void;
  deleteTeamMember: (id: string) => void;
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Omit<Project, "id">) => void;
  deleteProject: (id: string) => void;
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: string, service: Omit<Service, "id">) => void;
  deleteService: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Lead Videographer & Founder",
    image: "https://images.unsplash.com/photo-1688080338629-04c2705a160b?w=400",
    bio: "With over 12 years of experience, Sarah founded Azat Studio with a vision to capture authentic moments.",
    email: "sarah@azatstudio.com",
    level: "Senior",
    specialties: ["Cinematic Storytelling", "Color Grading", "Direction"],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Senior Video Editor",
    image: "https://images.unsplash.com/photo-1603207757585-b5ca5b740596?w=400",
    bio: "Michael brings 8 years of post-production expertise to the team.",
    email: "michael@azatstudio.com",
    level: "Senior",
    specialties: ["Post Production", "Visual Effects", "Sound Design"],
  },
];

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Sarah & James - Garden Wedding",
    date: "June 2025",
    location: "Botanical Gardens",
    thumbnail: "https://images.unsplash.com/photo-1704455305845-d5f66a560e6f?w=600",
    videoUrl: "#",
    description: "A beautiful outdoor ceremony surrounded by nature.",
    duration: "8:45",
  },
  {
    id: "2",
    title: "Maria & David - Beach Sunset",
    date: "August 2025",
    location: "Coastal Resort",
    thumbnail: "https://images.unsplash.com/photo-1768900043654-edf96dfc0105?w=600",
    videoUrl: "#",
    description: "An intimate beach wedding at sunset.",
    duration: "12:30",
  },
];

const initialServices: Service[] = [
  {
    id: "1",
    title: "Essential Package",
    description: "Perfect for intimate weddings",
    price: "$2,500",
    features: ["6 hours coverage", "1 videographer", "Highlight video (3-5 min)", "Online delivery"],
  },
  {
    id: "2",
    title: "Premium Package",
    description: "Our most popular choice",
    price: "$4,500",
    features: ["8 hours coverage", "2 videographers", "Highlight + Full ceremony", "Drone footage", "Same-day edit"],
  },
];

export function DataProvider({ children }: { children: ReactNode }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const storedTeam = localStorage.getItem("team_members");
    const storedProjects = localStorage.getItem("projects");
    const storedServices = localStorage.getItem("services");

    setTeamMembers(storedTeam ? JSON.parse(storedTeam) : initialTeamMembers);
    setProjects(storedProjects ? JSON.parse(storedProjects) : initialProjects);
    setServices(storedServices ? JSON.parse(storedServices) : initialServices);
  }, []);

  useEffect(() => {
    if (teamMembers.length > 0) {
      localStorage.setItem("team_members", JSON.stringify(teamMembers));
    }
  }, [teamMembers]);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  useEffect(() => {
    if (services.length > 0) {
      localStorage.setItem("services", JSON.stringify(services));
    }
  }, [services]);

  const addTeamMember = (member: Omit<TeamMember, "id">) => {
    const newMember = { ...member, id: Date.now().toString() };
    setTeamMembers((prev) => [...prev, newMember]);
  };

  const updateTeamMember = (id: string, member: Omit<TeamMember, "id">) => {
    setTeamMembers((prev) => prev.map((m) => (m.id === id ? { ...member, id } : m)));
  };

  const deleteTeamMember = (id: string) => {
    setTeamMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const addProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProjects((prev) => [...prev, newProject]);
  };

  const updateProject = (id: string, project: Omit<Project, "id">) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...project, id } : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addService = (service: Omit<Service, "id">) => {
    const newService = { ...service, id: Date.now().toString() };
    setServices((prev) => [...prev, newService]);
  };

  const updateService = (id: string, service: Omit<Service, "id">) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...service, id } : s)));
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        teamMembers,
        projects,
        services,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        addProject,
        updateProject,
        deleteProject,
        addService,
        updateService,
        deleteService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
}
