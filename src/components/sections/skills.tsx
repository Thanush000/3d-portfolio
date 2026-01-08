import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = {
    "Programming & Markup": [
      SKILLS[SkillNames.HTML],
      SKILLS[SkillNames.CSS],
      SKILLS[SkillNames.JS],
      SKILLS[SkillNames.JAVA],
    ],
    "Frontend Framework": [
      SKILLS[SkillNames.REACT],
      SKILLS[SkillNames.NEXTJS],
      SKILLS[SkillNames.TAILWIND],
    ],
    "UI/UX Design": [
      SKILLS[SkillNames.UIUX],
      SKILLS[SkillNames.WIREFRAMING],
    ],
    "Tools & Platforms": [
      SKILLS[SkillNames.KAGGLE],
      SKILLS[SkillNames.KIRO],
      SKILLS[SkillNames.ANTIGRAVITY],
      SKILLS[SkillNames.GIT],
      SKILLS[SkillNames.GITHUB],
    ],
  };

  return (
    <SectionWrapper id="skills" className="w-full min-h-screen py-20">
      <SectionHeader id="skills" title="Tech Stack" desc="Technologies I work with" />

      <div className="max-w-6xl mx-auto px-4 mt-16 space-y-12">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 rounded-xl bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="w-full h-full object-contain"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      />
                    </div>
                    <h4 className="font-semibold text-lg text-slate-800 dark:text-white">
                      {skill.label}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.shortDescription}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
