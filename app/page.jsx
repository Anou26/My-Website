"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypingAnimation from "@/components/TypingAnimation"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// fade animation for naz
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2, // Delay the start by 3 seconds
      repeat: Infinity,
      repeatType: 'reverse', // This will create a blinking effect
    },
  },
};

const Home = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">
                <TypingAnimation /> {/* Use the TypingAnimation component */}
              </span>
              <h1 className="h1 mb-6">
                Hello! I'm <br />
                <span>
                  <motion.span
                    className="text-accent mr-2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeVariants}
                  >
                    Anoushka 
                  </motion.span>
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80 text-justify">
                Specializing in Data Science, Machine Learning, Data Engineering, Automation, and DevOps, I'm dedicated to driving innovation and uncovering valuable insights. Let's collaborate to transform data into actionable strategies and elevate your projects to new heights!
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
                <Button
                  size="md"
                  className="flex items-center gap-2 bg-accent text-primary"
                  onClick={() => window.open('/Resume - Anoushka.pdf', '_blank')}
                >
                  <FiDownload />
                  Resume
                </Button>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default Home;
