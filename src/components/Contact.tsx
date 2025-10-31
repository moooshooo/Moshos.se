import { motion } from "motion/react";
import { Mail, Github, Linkedin, MessageSquare, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl mb-6 text-[#00ff41]">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-12 rounded-full" />
          
          <div className="glass-strong rounded-2xl p-12 mb-8">
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and conversations about 
              technology, leadership, and building great products. Whether you're looking for a 
              developer, need help with a project, or just want to chat about Agile methodologies, 
              feel free to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-[#00ff41] text-black hover:bg-[#00cc33] neon-border"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10"
                onClick={() => window.open('https://www.linkedin.com/in/moises-leon/', '_blank')}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Message on LinkedIn
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center pt-8 border-t border-[#00ff41]/20">
              <a 
                href="https://github.com/moooshooo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/60 hover:text-[#00ff41] transition-colors group"
              >
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/moises-leon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/60 hover:text-[#00ff41] transition-colors group"
              >
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/mooshitoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/60 hover:text-[#00ff41] transition-colors group"
              >
                <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="mailto:moises.santoyoleon@gmail.com"
                className="flex flex-col items-center gap-2 text-white/60 hover:text-[#00ff41] transition-colors group"
              >
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
          
          <p className="text-white/40 text-sm">
            © 2025 All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
