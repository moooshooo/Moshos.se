import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function SkillsTags() {
  const skills = [
    //Actual mos 2025-10-31
    "Project Management",
    "Product Manegment",
    "Servant Leadership",
    "Scrum",
    "Agile",
    "Team Development",
    "Business Intelligence",
    "Power BI",
    "Tableau",
    "Excel",
    "MS PowerAutomate",
    "SQL",
    "MariaDB",
    "MySQL",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Vite",
    "Node.js",
    "Express.js",
    "REST API",
    "Socket.io",
    "GraphQL",
    "PHP",
    "PhpMyAdmin",
    "WordPress",
    "Git",
    "GitHub",
    "GitHub Actions",
    "DNS",
    "Linux",
    "Ubuntu",
    "SSH",
    "Bastion",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Azure",
    "AWS",
    "Vercel",
    "NPM",
    "Bun",
    "Postman",
    "ESLint",
    "Prettier",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Next.js",
    "Less",
    "Responsive Design",
    "Accessibility",
    "WCAG 2.2",
    "SEO",
    "Web Security",
    "Microservices",
    "TDD",
    "WebSocket",
    "OAuth",
    "Authentication",
    "Performance Optimization",
    "IOT",
    "Raspberry Pi",
    "GIS",
    "Esri",
    "ArcGIS Pro",
    "AI Grunderna",
    "CoPilot",
    "Google Analytics",
    "Figma",
    "Miro",
    "Slack",
    "Discord",
    "SharePoint",
    "MS365",
    "Kanban",
    "Gamification",
    "Coaching",
    "Facilitation",
    "Stakeholder Management",
    "Conflict Resolution",
    "Communication",
    "Problem Solving",
    "Critical Thinking",
    "Mentoring",
    "Collaboration",
    "Adaptability",
    "Time Management",
    "Premiere Pro",
    "Lightroom",
    "Photoshop",
    "Notepad ++",
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-center mb-8 text-[#00ff41]">
            Technical & Professional Expertise
          </h2>

          <div className="glass rounded-2xl p-6 md:p-8 neon-border">
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="border-[#00ff41]/40 bg-black/40 text-white/90 hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all cursor-default text-xs px-3 py-1.5"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
