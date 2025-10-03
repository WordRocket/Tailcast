import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-gradient-to-br from-bgDark1 via-bgDark2 to-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 relative overflow-hidden pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryColor opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondaryColor opacity-8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primaryColor to-secondaryColor opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primaryColor/20 to-secondaryColor/20 border border-primaryColor/30 backdrop-blur-sm mb-6 sm:mt-32 mt-16">
            <div className="w-2 h-2 bg-primaryColor rounded-full mr-2 animate-pulse"></div>
            <span className="text-primaryColor text-sm sm:text-base font-semibold tracking-wide">
              Crafting Digital Experiences
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center px-4 sm:px-8 md:px-20 lg:px-4 relative">
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              <span className="inline md:hidden">Stunning Web</span>
              <span className="hidden md:inline">Stunning Web Design</span>
            </h1>
          </div>
          <h1 className="mt-2 sm:mt-4 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-primaryColor via-secondaryColor to-primaryColor bg-clip-text text-transparent px-4 sm:px-8 md:px-20 lg:px-4 leading-tight">
            for Your Business
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="max-w-2xl mx-auto mt-8 mb-12">
            <h2 className="text-secondaryText text-lg lg:text-xl xl:text-2xl leading-relaxed px-6 sm:px-12">
              Elevate your online presence with bespoke web design that drives engagement, 
              improves SEO, and boosts conversions.
            </h2>
            
            {/* Key benefits pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
              <div className="px-4 py-2 bg-bgDark3/50 backdrop-blur-sm rounded-full border border-mainBorder">
                <span className="text-sm text-primaryText font-medium">SEO Optimized</span>
              </div>
              <div className="px-4 py-2 bg-bgDark3/50 backdrop-blur-sm rounded-full border border-mainBorder">
                <span className="text-sm text-primaryText font-medium">CRO Focused</span>
              </div>
              <div className="px-4 py-2 bg-bgDark3/50 backdrop-blur-sm rounded-full border border-mainBorder">
                <span className="text-sm text-primaryText font-medium">Mobile First</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-24">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondaryColor to-primaryColor opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              className="group px-8 py-4 rounded-xl font-bold text-primaryText border-2 border-primaryColor/50 bg-bgDark2/50 backdrop-blur-sm hover:bg-primaryColor/10 hover:border-primaryColor transition-all duration-300 flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
              aria-label="Live demo"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Live Demo
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-screen flex justify-center">
            <div className="relative">
              {/* Glow effect behind dashboard */}
              <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/20 to-secondaryColor/20 blur-2xl transform scale-110"></div>
              
              <img
                src={dashboard.src}
                alt="Dashboard showcasing web design work"
                className="relative w-4/5 2xl:w-[1200px] mx-auto rounded-2xl border border-mainBorder shadow-2xl lg:top-6 xl:top-0 hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating elements around dashboard */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primaryColor rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-secondaryColor rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2 relative z-10"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};