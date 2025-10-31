import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

export function Timeline() {
  const education = [
    {
      year: "2026",
      institution: "Chas Academy",
      program: "Fullstack Developer Open Source"
    },
    {
      year: "2025",
      institution: "TUC",
      program: "IT Project Manager"
    },
    {
      year: "2024",
      institution: "Scrum.org",
      program: "PSM1 Certified Scrum Master"
    },
    {
      year: "2019",
      institution: "Nackademin",
      program: "Energiingenjör"
    },
    {
      year: "2017",
      institution: "Akademiska Sjukhuset",
      program: "Miljöombud"
    },
    {
      year: "2012",
      institution: "ABF",
      program: "Cirkelledare"
    },
    {
      year: "2007",
      institution: "Open Text",
      program: "Admincertified"
    },
    {
      year: "1997",
      institution: "Fyriskolan",
      program: "El-programmet"
    }
  ];

  const experience = [
    {
      years: "2020 - 2024",
      company: "Systra AB",
      role: "BI Analyst & Scrum Master"
    },
    {
      years: "2016 - 2020",
      company: "Akademiska sjukhuset",
      role: "Biträde"
    },
    {
      years: "2012 - 2015",
      company: "ABF",
      role: "Verksamhetskoordinator"
    },
    {
      years: "2008 - 2011",
      company: "Trippus Event Solutions",
      role: "Projektsupport & Webdesign"
    },
    {
      years: "2006 - 2007",
      company: "Tägströms konsult",
      role: "Webadmin"
    },
    {
      years: "2002 - 2005",
      company: "Fresenius Kabi",
      role: "Processoperatör"
    },
    {
      years: "2000 - 2003",
      company: "GateGourmet",
      role: "Lagerarbetare"
    }
  ];

  const maxLength = Math.max(education.length, experience.length);

  return (
    <section id="timeline" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6 text-center text-[#00ff41]">
            Journey & Experience
          </h2>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mb-12 rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <h3 className="text-2xl text-right text-[#00ff41]">
              Education & Courses
            </h3>
            <h3 className="text-2xl text-left text-[#00ff41]">
              Work Experience
            </h3>
          </div>
          
          <div className="relative">
            {/* Single center timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00ff41]/30 transform -translate-x-1/2" />
            
            <div className="space-y-6">
              {Array.from({ length: maxLength }).map((_, index) => {
                const eduItem = education[index];
                const expItem = experience[index];
                
                return (
                  <motion.div
                    key={`timeline-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative grid lg:grid-cols-2 gap-8"
                  >
                    {/* Left side - Education */}
                    <div className="flex justify-end">
                      {eduItem && (
                        <div className="glass rounded-lg p-3 hover:border-[#00ff41]/50 transition-all group w-full max-w-xs text-right">
                          <div className="flex items-start gap-2 flex-row-reverse">
                            <GraduationCap className="w-4 h-4 text-[#00ff41] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 min-w-0">
                              <div className="text-[#00ff41] text-sm mb-1">{eduItem.year}</div>
                              <h4 className="text-white text-sm mb-1">{eduItem.program}</h4>
                              <p className="text-white/60 text-xs">@ {eduItem.institution}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Timeline dot */}
                    {(eduItem || expItem) && (
                      <div className="absolute left-1/2 top-3 w-3 h-3 bg-[#00ff41] rounded-full border-4 border-black transform -translate-x-1/2 neon-border z-10" />
                    )}
                    
                    {/* Right side - Experience */}
                    <div className="flex justify-start">
                      {expItem && (
                        <div className="glass rounded-lg p-3 hover:border-[#00ff41]/50 transition-all group w-full max-w-xs text-left">
                          <div className="flex items-start gap-2">
                            <Briefcase className="w-4 h-4 text-[#00ff41] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 min-w-0">
                              <div className="text-[#00ff41] text-sm mb-1">{expItem.years}</div>
                              <h4 className="text-white text-sm mb-1">{expItem.role}</h4>
                              <p className="text-white/60 text-xs">@ {expItem.company}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
