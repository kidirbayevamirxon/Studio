import { useData } from "../contexts/DataContext";

export function Team() {
  const { teamMembers } = useData();

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
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Meet Our Team</h1>
          <p className="text-xl">
            Talented professionals dedicated to capturing your special day
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const specialtiesArray = member.specialties
              ? member.specialties.split(",").map((s) => s.trim())
              : [];

            return (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* <div className="h-80 bg-gray-200 overflow-hidden"></div> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {member.position}
                  </p>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-blue-500 mb-3">
                    <a
                      href={`https://t.me/${member.telegram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.telegram}
                    </a>
                  </p>
                  <div className="mb-4">
                    <p className="text-sm mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {specialtiesArray.length > 0 ? (
                        specialtiesArray.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {specialty}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-400">
                          No specialties listed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Structure */}
      {/* <section className="bg-gray-50 py-16 px-4">
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
      </section> */}
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
