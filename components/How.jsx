"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight, staggerTextContainer } from "@/variants";

const howData = {
  title: "How to apply",
  subtitle:
    "When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.",
  girlImg: "/images/how/girl.svg",
};

const How = () => {
  const { title, subtitle, girlImg } = howData;

  return (
    <section className="mb-[60px] lg:mb-[10rem]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={720} height={678} alt="" />
          </motion.div>
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[28.4375rem]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
