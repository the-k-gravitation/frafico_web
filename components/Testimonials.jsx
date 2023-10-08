"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerTextContainer } from "@/variants";

import Slider from "@/components/Slider";

const testimonialData = {
  pretitle: "testimonials",
  title: "Our Awesome Clients",
  clients: [
    {
      message:
        "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
      image: "/images/testimonials/avatar1.png",
      name: "Isak Pettersson",
    },
    {
      message:
        "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
      image: "/images/testimonials/avatar2.png",
      name: "Simon Sandberg",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
    {
      message:
        "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
      image: "/images/testimonials/avatar1.png",
      name: "Isak Pettersson",
    },
    {
      message:
        "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
      image: "/images/testimonials/avatar2.png",
      name: "Simon Sandberg",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
  ],
};

const Testimonials = () => {
  const { pretitle, title, clients } = testimonialData;

  return (
    <section className="relative min-h-[37.5rem]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp} className="lg:w-[40%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6">{title}</h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:w-[60%] lg:absolute lg:right-0">
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
