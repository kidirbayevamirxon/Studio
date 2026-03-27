import { Mail, } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Videographer & Founder",
      image:
        "https://images.unsplash.com/photo-1688080338629-04c2705a160b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NDUxNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "With over 12 years of experience, Sarah founded Azat Studio with a vision to capture authentic moments. Her cinematic style and attention to detail have made her one of the most sought-after wedding videographers.",
      email: "sarah@azatstudio.com",
      level: "Senior",
      specialties: ["Cinematic Storytelling", "Color Grading", "Direction"],
    },
    {
      name: "Michael Chen",
      role: "Senior Video Editor",
      image:
        "https://images.unsplash.com/photo-1603207757585-b5ca5b740596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdmlkZW8lMjBlZGl0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ0NTE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Michael brings 8 years of post-production expertise to the team. His creative editing and mastery of visual effects transform raw footage into breathtaking wedding films.",
      email: "michael@azatstudio.com",
      level: "Senior",
      specialties: ["Post Production", "Visual Effects", "Sound Design"],
    },
    {
      name: "Emily Rodriguez",
      role: "Videographer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      bio: "Emily joined the team 5 years ago and has quickly become known for her ability to capture candid, emotional moments. Her warm personality puts couples at ease.",
      email: "emily@azatstudio.com",
      level: "Mid-Level",
      specialties: ["Candid Moments", "Drone Operation", "Event Coverage"],
    },
    {
      name: "David Kim",
      role: "Videographer & Sound Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      bio: "With 6 years in the industry, David specializes in capturing crystal-clear audio and managing multiple camera setups. His technical expertise ensures nothing is missed.",
      email: "david@azatstudio.com",
      level: "Mid-Level",
      specialties: ["Audio Recording", "Multi-Camera Setup", "Live Streaming"],
    },
    {
      name: "Jessica Martinez",
      role: "Junior Videographer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      bio: "Jessica is our newest team member with 2 years of experience. Her fresh perspective and enthusiasm bring energy to every project she works on.",
      email: "jessica@azatstudio.com",
      level: "Junior",
      specialties: ["Social Media Content", "Behind the Scenes", "Assisting"],
    },
    {
      name: "Alex Thompson",
      role: "Junior Editor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      bio: "Alex joined us 1.5 years ago and is rapidly developing his editing skills. He specializes in creating engaging same-day edits and social media content.",
      email: "alex@azatstudio.com",
      level: "Junior",
      specialties: ["Same-Day Edits", "Quick Turnaround", "Social Media"],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Senior":
        return "bg-purple-100 text-purple-800";
      case "Mid-Level":
        return "bg-blue-100 text-blue-800";
      case "Junior":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Meet Our Team</h1>
          <p className="text-xl">
            Talented professionals dedicated to capturing your special day
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-80 bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{member.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getLevelColor(
                      member.level
                    )}`}
                  >
                    {member.level}
                  </span>
                </div>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="mb-4">
                  <p className="text-sm mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Mail size={16} className="mr-2" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-blue-600"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Our Team Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-2">2</div>
              <p className="text-xl mb-2">Senior Members</p>
              <p className="text-gray-600 text-sm">
                10+ years of experience leading projects
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-2">2</div>
              <p className="text-xl mb-2">Mid-Level Members</p>
              <p className="text-gray-600 text-sm">
                5-8 years of specialized expertise
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-2">2</div>
              <p className="text-xl mb-2">Junior Members</p>
              <p className="text-gray-600 text-sm">
                1-2 years bringing fresh perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl mb-6">Why Our Team Stands Out</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Azat Studio, we believe that great wedding videos come from a
            combination of technical skill, artistic vision, and genuine care
            for our clients. Our diverse team brings different strengths and
            perspectives, ensuring comprehensive coverage of your special day.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl mb-3">Collaborative Approach</h3>
              <p className="text-gray-700">
                Our team works together seamlessly, with each member bringing
                their expertise to create the perfect final product.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl mb-3">Continuous Learning</h3>
              <p className="text-gray-700">
                We stay updated with the latest techniques and equipment to
                provide you with cutting-edge videography services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
