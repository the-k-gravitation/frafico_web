import React, { useState } from "react";

import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

import { motion } from "framer-motion";

import { fadeInRight } from "@/variants";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = accordion;

  return (
    <motion.div variants={fadeInRight} className="max-w-[34.375rem]">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" drop-shadow-primary bg-white cursor-pointer rounded-[.625rem] h-[5.625rem] px-[2.1875rem] flex items-center"
      >
        <div className=" w-full flex justify-between items-center">
          <p className="lead font-medium leading-snug max-w-[25rem]">
            {question}
          </p>
          {/* icons */}
          <div className=" transition-all duration-500">
            {isOpen ? (
              <motion.div
                initial="initial"
                animate={{
                  rotate: 180,
                }}
              >
                <HiOutlineMinus className="text-[1.75rem] text-accent" />
              </motion.div>
            ) : (
              <motion.div
                initial="initial"
                animate={{
                  rotate: 90,
                }}
              >
                {" "}
                <HiOutlinePlus className="text-[1.75rem] text-accent" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-[10rem] p-8 bg-[#fff7f5] rounded-[.625rem] drop-shadow-primary my-2"
            : "max-h-0"
        } h-[10rem] overflow-hidden transition-all`}
      >
        <p className="lead leading-[1.875rem] mt-2">{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
