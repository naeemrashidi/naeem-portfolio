"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { heroSection } from "@/config/data";

function getSocialIcon(title: string) {
  switch (title) {
    case "GitHub":
      return <FaGithub className="w-8 h-8 text-gray-200 hover:text-white" />;
    case "Twitter":
      return <FaSquareXTwitter className="w-8 h-8 text-gray-200 hover:text-gray-500" />;
    case "Instagram":
      return <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />;
    default:
      return <FaLinkedinIn className="w-8 h-8 text-blue-500 hover:text-blue-700" />;
  }
}

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-28 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col items-center lg:w-56 shrink-0 lg:self-stretch"
      >
        <Avatar className="w-42 h-42 mb-4 ring-2 ring-gray-800">
          <AvatarImage
            src={heroSection.personalInfo.avatar}
            alt={heroSection.personalInfo.name}
            className="object-cover"
          />
          <AvatarFallback className="text-3xl font-semibold bg-gray-800">
            NR
          </AvatarFallback>
        </Avatar>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4"
        >
          <FiMapPin className="w-4 h-4" />
          {heroSection.personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex w-full items-center justify-between mt-auto pt-2"
        >
          {heroSection.socialLinks.map(({ title, url }, index) => (
            <motion.a
              key={title}
              title={title}
              initial={{ x: 5, scale: 0.2 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcon(title)}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full min-w-0 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight"
        >
          {heroSection.personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-400 mb-4"
        >
          {heroSection.personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          {heroSection.personalInfo.description}
        </motion.p>

        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mt-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <a
              className="flex items-center border border-blue-700/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-md"
              href={`mailto:${heroSection.personalInfo.email}`}
              title={heroSection.personalInfo.email}
            >
              <FiMail className="w-4 h-4 mr-2" />
              <span>Work With Me</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            <div className="flex items-center border border-gray-700/50 text-gray-300 py-2 px-4 rounded-md">
              <FiPhone className="w-4 h-4 mr-2" />
              <span>{heroSection.personalInfo.phone}</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <a
              className="flex items-center border border-gray-700/50 text-gray-300 hover:bg-gray-800/30 transition-all duration-300 py-2 px-4 rounded-md"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
