"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {  HiPhone } from "react-icons/hi";
import { BsArrowRight} from "react-icons/bs";
import { useActiveSectionContext, useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://photos.psychologytoday.com/b8dd5334-b284-4a22-b500-5b865d53e494/2/320x400.jpeg"
              priority={true}
              width={200}
              height={200}
              quality={95}
              alt={"Aaron Portrait"}
              className="h-26 w-26 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 50,
              transition: {
                type: "spring",
                stiffness: 125,
                duration: 0.2,
              },
            }}
            className="absolute bottom-0 right-0 text-6xl focus:scale-110"
          >
            👋
          </motion.span>
        </div>
      </div>
     <div className="flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl max-w-[50rem] justify-center"
        > 
          Hello, I&apos;m <span className="font-bold">Julie Valiquette LMFT</span>, a
          <span className="font-bold"> Marriage & Family Therapist, </span>
          with over 7 year of professional experience. 
          I specialize in solution focused, strength based, and cognitive behavioral therapy. 
          <span className="underline">
   
          </span>
        </motion.p>
     </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-2 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 curser-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
        <Link
          href="tel:562-578-7006"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 curser-pointer"
        >
          Make an Appointment
          <HiPhone className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
        <Link
          href="tel:988"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 curser-pointer"
        >
          National Suicide & Crisis Hotline (988)
         <HiPhone className="transition opacity-70 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
