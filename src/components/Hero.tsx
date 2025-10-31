import { motion } from "motion/react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff41] rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff41] rounded-full blur-[120px] opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 text-[#00ff41] neon-glow">
            Moises St. Leon
          </h1>
          <div className="text-3xl md:text-4xl mb-8 text-white/90">
            <span className="text-[#00ff41]">Technical Excellence</span> × <span className="text-[#00ff41]">Leadership</span>
          </div>
          <p className="text-xl md:text-2xl mb-4 text-white/70 max-w-3xl mx-auto">
            IT Project Manager | Certified Scrum Master | Fullstack Engineer
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Bridging the gap between technical innovation and strategic leadership. 
            Building scalable solutions while empowering teams to deliver excellence.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-[#00ff41] text-black hover:bg-[#00cc33] neon-border transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://github.com/moooshooo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00ff41] transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/moises-leon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00ff41] transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/mooshitoo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#00ff41] transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="mailto:moises.santoyoleon@gmail.com"
              className="text-white/60 hover:text-[#00ff41] transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
