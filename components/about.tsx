"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Julie</SectionHeading>
      <p className="mb-3 font-medium">
      Hello. I am a Licensed Marriage and Family Therapist in California.
       I believe that to achieve a goal, one has to have drive and motivation in which self-esteem and resilience are the engine.
        I became a therapist because sharing a journey and being a partner in someone's healing process is a privilege. 
        My experience has been eclectic working with clients with dual diagnosis and addiction, trauma, sexual abuse,
       domestic violence, depression, anxiety, OCD, ADHD, relationship issues, attachment, and adjustment difficulties.
       I have worked with all age groups including children, teens, foster youth, women, men, and families.
      </p>
      <p className="mb-3 font-medium">
      My treatment modalities tend to have an integrated approach combining rapport and trust building,
       Cognitive Behavioral Therapy, Solution-Focused Brief Therapy, Trust-Based Relational Interventions,
        and Mindfulness based interventions to center therapy around you and your needs and strengths. 
        I am honored to be a part of my client's journey to empowerment.
      </p>
      <p className="font-medium">
      I am an ally of our LGBTQ community and believe that non-judgement and taking a stance allows me to get to know 
      my client's culture and beliefs to integrate into the healing process. You deserve to be treated with positive regard and dignity.
       I look forward to the opportunity to meet with you to discuss your next steps in your journey.
      </p>
    </motion.section>
  );
};

export default About;
