import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React / Next.js",
        "Vue.js / Nuxt.js",
        "TypeScript / JavaScript",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Redux / Zustand",
        "React Query",
        "Webpack / Vite"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js / Express",
        "Python / Django / FastAPI",
        "Go",
        "RESTful APIs",
        "GraphQL",
        "WebSockets",
        "Microservices",
        "JWT / OAuth"
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "Prisma / TypeORM",
        "Firebase",
        "Elasticsearch",
        "S3 / Cloud Storage"
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker / Kubernetes",
        "AWS / Azure / GCP",
        "CI/CD (GitHub Actions, Jenkins)",
        "Terraform",
        "Nginx",
        "Linux Administration",
        "Monitoring (Prometheus, Grafana)",
        "Git / GitHub"
      ]
    },
    {
      title: "Project Management",
      skills: [
        "Agile / Scrum",
        "Kanban",
        "Sprint Planning",
        "Backlog Management",
        "Stakeholder Communication",
        "Risk Management",
        "Jira / Confluence",
        "Team Facilitation"
      ]
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        "Certified Scrum Master",
        "Team Leadership",
        "Conflict Resolution",
        "Mentoring & Coaching",
        "Cross-functional Collaboration",
        "Technical Documentation",
        "Presentation & Communication",
        "Strategic Planning"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-center text-[#00ff41]">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-12 rounded-full" />
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning fullstack development, DevOps, and Agile leadership.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-[#00ff41]/50 transition-all"
              >
                <h3 className="text-2xl mb-4 text-[#00ff41]">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 bg-[#00ff41] rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
