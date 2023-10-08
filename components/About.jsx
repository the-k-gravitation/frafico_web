'use client'
import Image from "next/image"

import {motion} from 'framer-motion'

import { fadeInUp, fadeInDown, staggerAccordionContainer } from '@/variants'

const aboutData = {
  title: "About us",
  subtitle: "The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all.",
  text: "How do you do when you need to obtain a commercial traffic permit for freight transport to your business?",
  boyImg: "/images/about/boy.svg"
}

const About = () => {

  const { title, subtitle, text, boyImg} = aboutData

  return (
    <section className="mb-[3.75rem] lg:mb-[10rem]">
      <div className="container mx-auto">
        <motion.div variants={staggerAccordionContainer} initial='initial' whileInView={'animate'} viewport={{
          once: false, amount:0.6
        }}  className="flex flex-col lg:flex-row gap-x-[1.25rem]">
          {/* text */}
          <motion.div variants={fadeInDown} className="flex-1 mt-[4.625rem]">
            <h3 className="h3">{title}</h3>
            <p className="lead max-w-[29.375rem] mb-[4.375rem]">{subtitle}</p>
            <div className=" bg-accent/10 border-l-[10px] border-accent max-w-[35.625rem] h-[10rem] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-[1.25rem] leading-normal lg:text-[1.5rem] lg:leading-[2rem] font-medium max-w-[20rem] lg:max-w-[28.75rem]">
                {text} 
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1">
            <Image src={boyImg} width={575} height={480} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About