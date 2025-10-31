import { motion } from "motion/react";
import { Award, Users, Target, Code } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Fullstack development with modern frameworks and best practices"
    },
    {
      icon: Award,
      title: "IT Project Manager",
      description: "Strategic planning and execution of complex technical projects"
    },
    {
      icon: Users,
      title: "Certified Scrum Master",
      description: "Agile leadership, facilitating high-performing development teams"
    },
    {
      icon: Target,
      title: "Hybrid Skillset",
      description: "Unique blend of hands-on development and strategic leadership"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-center text-[#00ff41]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-12 rounded-full" />
          
          <div className="glass-strong rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              I'm a fullstack developer with a unique perspective shaped by my experience as an 
              <span className="text-[#00ff41]"> IT Project Manager</span> and 
              <span className="text-[#00ff41]"> Certified Scrum Master</span>. 
              This combination allows me to not only write clean, efficient code but also understand 
              the bigger picture of software development.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              My leadership approach focuses on <span className="text-[#00ff41]">soft skills and agile methodologies</span> to 
              tackle complex problems. Through active listening, empathy, and collaborative facilitation, 
              I create environments where teams can self-organize and thrive. I excel at breaking down 
              intricate challenges into manageable iterations, fostering open communication, and removing 
              impediments that block progress. Whether navigating organizational change or resolving 
              technical debt, I leverage Scrum principles and servant leadership to guide teams toward 
              sustainable, innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-[#00ff41]/50 transition-all group"
              >
                <item.icon className="w-12 h-12 text-[#00ff41] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
