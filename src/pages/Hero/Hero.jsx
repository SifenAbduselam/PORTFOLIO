import { useEffect } from "react";
import hijabi from "@/assets/images/hijabi.png";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";

// ✨ Shooting Star Effect
const ShootingStar = () => (
  <div className="shooting-star">
    <style jsx>{`
      .shooting-star {
        position: absolute;
        top: 20%;
        left: -5%;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
        animation: shoot 3s ease-in infinite;
        animation-delay: 1s;
        opacity: 0;
        z-index: 10;
      }
      @keyframes shoot {
        0% { transform: translateX(0) translateY(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateX(120vw) translateY(40vh); opacity: 0; }
      }
    `}</style>
  </div>
);

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40 animate-gridPulse"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function HomePage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
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
      .fade-in-up {
        animation: fadeInUp 1s ease forwards;
      }
      .fade-in-up-delay-1 {
        animation-delay: 0.3s;
      }
      .fade-in-up-delay-2 {
        animation-delay: 0.6s;
      }
      .gradient-text {
        background: linear-gradient(270deg, #60a5fa, #3b82f6, #2563eb, #60a5fa);
        background-size: 600% 600%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientShift 8s ease infinite;
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      /* Reduce spacing */
      section + section {
        margin-top: 3rem;
      }
      /* Glowing text for "Developer, Innovator, Creator" */
      @keyframes gradient-slide {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes glowBreathe {
        0%, 100% { text-shadow: 0 0 10px rgba(96, 165, 255, 0.4); }
        50% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(52, 211, 153, 0.4); }
      }
      .title-animated {
        background: linear-gradient(90deg, #60A5FA, #8B5CF6, #34D399, #60A5FA);
        background-size: 300% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-slide 8s ease-in-out infinite, glowBreathe 3s ease-in-out infinite 2s;
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--hero-padding-top", "10rem");
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "2rem");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>
        <ShootingStar />

        {/* Hero Section - Your Original, Just Fixed */}
        <section
          className="hero min-h-[70vh] flex flex-col items-center justify-center relative px-6 sm:px-8 lg:px-12 py-10 md:py-14 lg:py-16"
          style={{ paddingTop: "var(--hero-padding-top, 2rem)" }}
        >
          <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center relative z-10 text-center space-y-6 mt-20">
            {/* Welcome - Pushed Lower */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mt-16">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Welcome</span>
            </div>

            {/* Your Original Name Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight fade-in-up">
              <SparklesText text="Hello" />{" "}
              <span className="gradient-text">I'm Sifen Abduselam</span>
            </h1>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              aria-label="Download Resume"
            >
              <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                  <span>Get Resume</span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </section>

        {/* About Section - Updated Title */}
        <section className="py-10 md:py-20 text-white bg-[#04081A]">
          <div className="mx-auto max-w-5xl px-6 md:space-y-16 space-y-8 text-center">
            {/* Beautiful Animated Title */}
            <h2
              className="text-4xl font-medium lg:text-5xl mb-6 fade-in-up"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="title-animated">Developer, Innovator, Creator</span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="mx-auto max-w-md fade-in-up fade-in-up-delay-1">
                <img
                  src={hijabi}
                  alt="Hijabi girl"
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-4 fade-in-up fade-in-up-delay-2">
                <p>
                  Hello! I'm <span className="font-bold">Sifen Abduselam</span>, a passionate web developer specializing in building user-friendly websites and applications using HTML, CSS, JavaScript, Tailwind CSS, and React.
                </p>
                <p className="text-gray-400 italic mt-4">
                  I am currently studying Software Engineering to deepen my skills and knowledge.
                </p>
                <p>
                  My expertise covers both frontend development allowing me to create seamless digital experiences that meet client needs.
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-4 mt-6">
                  <p>
                    I'm a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
                  </p>
                  <cite className="block font-medium mt-3">
                    — Sifen Abduselam, Web Developer
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}