'use client'

import Image from "next/image"

import { motion } from 'framer-motion'

import Accordion from "@/components/Accordion"

import { fadeInLeft, fadeInRight, staggerAccordionContainer, staggerTextContainer} from '@/variants'


const faqData = {
  pretitle: "faq",
  title: "Questions and Answers on Professional Traffic Permits:",
  boyImg: "/images/faq/boy.svg",
  accordions: [
    {
      question: "What is a professional traffic permit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "How to check the traffic condition?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    },
    {
      question: "What are the requirements for a professional traffic permit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "Are there professional traffic permit training courses at a distance?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    },
    {
      question: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "Where to look for a traffic permit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    },
    {
      question: "Are there differences between a traffic permit and a professional traffic permit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "How much does a commercial traffic permit cost for goods?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    },
    {
      question: "How to plug in for the traffic permit test?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "How is the sample for a professional traffic permit booked?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    },
    {
      question: "What is a professional traffic permit?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
    },
    {
      question: "How to check the traffic condition?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
    }
  ]
}

const Faq = () => {

  const {pretitle, title, boyImg, accordions} = faqData

  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[3.75rem] lg:mb-[10rem]">
      <div className="container mx-auto">
        {/* top */}
        <motion.div variants={staggerTextContainer} initial='initial' whileInView={'animate'} viewport={{
          once:false, amount:0.6
        }} className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32">
          <motion.div variants={fadeInRight} className="lg:max-w-[45%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          <motion.div variants={fadeInLeft} className="lg:absolute lg:-right-16 lg:-top-16">
            <Image src={boyImg} width={708} height={498} alt="" />
          </motion.div>
        </motion.div>
        <motion.div  variants={staggerAccordionContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: false,
          amount: 0.4,
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-[1.25rem] gap-y-[.625rem] justify-items-center">
          {
            accordions.map((accordion, index) => {
              return <Accordion key={index} accordion={accordion} />
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Faq