import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import IconCloudDemo from "@/components/globe";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";

// Skills Data with Beautiful, Friendly Descriptions
const skills = [
  {
    name: "React",
    icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
    description:
      "The powerhouse behind modern web apps. React lets me build fast, interactive user interfaces that feel smooth and responsive — like the ones you love on Instagram, Netflix, and Airbnb.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    description:
      "JavaScript with superpowers. TypeScript helps catch bugs before they happen, making code cleaner, safer, and easier to scale — perfect for professional, long-term projects.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8 text-[#38B2AC]" />,
    description:
      "A modern way to style websites fast. Instead of writing custom CSS, I use utility classes to build beautiful, responsive designs quickly — without sacrificing creativity.",
  },
  {
    name: "HTML5",
    icon: <BsFileEarmarkCode className="w-8 h-8 text-[#E34F26]" />,
    description:
      "The foundation of every website. HTML5 structures content so it's clear, accessible, and search-engine friendly — like the skeleton of a great design.",
  },
  {
    name: "CSS3",
    icon: <BsFileEarmarkCode className="w-8 h-8 text-[#1572B6]" />,
    description:
      "Where design comes alive. CSS3 adds colors, animations, and layout magic to make websites not just functional, but beautiful and engaging.",
  },
];

const SkillsSection = () => {
  return (
    <main className="pt-20 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      {/* Animated Globe with Tech Icons */}
      <section className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
      </section>

      {/* Frontend Section Title - Animated & Beautiful */}
      <section className="container mx-auto px-4 relative z-10">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background: "linear-gradient(90deg, #60A5FA, #8B5CF6, #34D399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeInUp 1.2s ease forwards",
            textShadow: "0 0 10px rgba(96, 165, 255, 0.2)",
          }}
        >
          Frontend Development
        </h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gray-900/80 border border-gray-700 hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden group"
              style={{
                animation: `fadeInUp 0.8s ease forwards ${0.3 + index * 0.1}s`,
                opacity: 0,
              }}
            >
              <CardContent className="p-6">
                {/* Icon + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gray-800/60 group-hover:bg-gray-700/70 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Animations & Grid Style */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
    // main styles 
  );                                            
};

export default SkillsSection;