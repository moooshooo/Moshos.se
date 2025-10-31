import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with microservices architecture for scalability.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://demo.example.com"
    },
    {
      title: "Task Management System",
      description: "Agile project management tool with sprint planning, backlog management, and team collaboration features. Applied Scrum principles in both design and development.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
      github: "https://github.com/yourusername/task-management",
      demo: "https://demo.example.com"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Enterprise analytics platform providing real-time insights with customizable widgets, data visualization, and automated reporting capabilities.",
      tech: ["Vue.js", "Python", "FastAPI", "TimescaleDB", "D3.js"],
      github: "https://github.com/yourusername/analytics-dashboard",
      demo: "https://demo.example.com"
    },
    {
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation tool that streamlines deployment workflows, monitors application health, and provides rollback capabilities for rapid iteration.",
      tech: ["Go", "React", "Kubernetes", "Terraform", "Prometheus"],
      github: "https://github.com/yourusername/devops-suite",
      demo: "https://demo.example.com"
    },
    {
      title: "AI-Powered Code Review Assistant",
      description: "Machine learning tool that analyzes pull requests, suggests improvements, and enforces coding standards across teams. Improves code quality and reduces review time.",
      tech: ["Python", "TensorFlow", "React", "GraphQL", "PostgreSQL"],
      github: "https://github.com/yourusername/code-review-ai",
      demo: "https://demo.example.com"
    },
    {
      title: "Team Collaboration Platform",
      description: "Unified workspace for distributed teams featuring video conferencing, document collaboration, and integrated project tracking. Designed with Scrum teams in mind.",
      tech: ["React", "WebRTC", "Node.js", "MongoDB", "AWS"],
      github: "https://github.com/yourusername/team-collab",
      demo: "https://demo.example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-center text-[#00ff41]">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-12 rounded-full" />
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my technical abilities and problem-solving approach.
            Each project is available on GitHub with comprehensive documentation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-[#00ff41]/50 transition-all group"
              >
                <h3 className="text-2xl mb-3 text-white group-hover:text-[#00ff41] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 min-h-[100px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-[#00ff41]/10 text-[#00ff41] border-[#00ff41]/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-[#00ff41]/20 text-[#00ff41] hover:bg-[#00ff41]/30 border-[#00ff41]/30"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
