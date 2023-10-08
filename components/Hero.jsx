"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "@/variants";

import {CgArrowLongRight} from 'react-icons/cg'

import Header from "./Header";

const Hero = () => {
  return (
    <section className=" bg-hero bg-no-repeat bg-left-top min-h-[50rem] lg:min-h-[59.375rem] lg:mb-80">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px] lg:min-h-[59.375rem]"
      >
        {/* header */}
        <motion.div variants={fadeInDown}>
          <Header />
        </motion.div>
        {/* title */}
        <motion.h1
          variants={fadeInDown}
          className="h1 min-w-[46.25rem] text-white pt-[12rem] mb-[3.75rem]"
        >
          Your awesome traffic permit consultant.
        </motion.h1>
        <motion.button
          value={fadeInDown}
          whileHover={{
            scale: 1.05,
          }}
          className="btn"
        >
          Get Started
          <CgArrowLongRight className="text-[1.875rem]" />
        </motion.button>
        <motion.div variants={girlAnim} className=" hidden lg:flex absolute bottom-0">
          <Image
            src={"/images/hero/girl.svg"}
            width={206}
            height={495}
            alt=""
          />
        </motion.div>
        <motion.div variants={heroTruckAnim} className="hidden lg:flex absolute -bottom-[25%] -left-[30%]">
          <Image
            src={"/images/hero/truck.svg"}
            width={811}
            height={395}
            alt=""
          />
        </motion.div>
        <motion.div variants={boyAnim} className="hidden lg:flex absolute right-[23.75rem] bottom-0 z-10">
          <Image src={"/images/hero/boy.svg"} width={206} height={495} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
