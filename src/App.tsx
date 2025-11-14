import { Hero } from "./components/Hero";
import { SkillsTags } from "./components/SkillsTags";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import MatrixRain from "react-matrix-rain"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,65,0.05),transparent_50%)] pointer-events-none" />
      {/* Main content */}
      <div className="relative z-10">
      <MatrixRain color="#00ff0020" />
        <Hero />
        <SkillsTags />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
