"use client";

import React, { FormEvent, useRef } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./submit-button";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }
    if (formRef.current) {
      formRef.current.reset();
    }
    toast.success("Message sent!");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please reach out to me directly to my{" "}
        <a
          className="underline"
          href="mailto:jewelie530530@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Email,
        </a>{" "}
        <a
          className="underline"
          href="tel:562-578-7006"
          target="_blank"
          rel="noopener noreferrer"
        >
      Phone,
        </a>{" "}
        or through this form for consultations, appointments, or private pay fees:
      </p>
      <form
        ref={formRef}
        id="form"
        className="flex flex-col mt-10 dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 mb-3 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderName"
          id="senderName"
          type="name"
          required
          placeholder="Your name"
        />
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          id="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          id="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
