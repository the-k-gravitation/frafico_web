"use client";

import Image from "next/image";
import Link from "next/link";

import { CgArrowLongRight } from "react-icons/cg";

import { motion } from "framer-motion";

import { fadeInUp, footerTruckAnim, staggerFooterContainer } from "@/variants";

const footerData = {
  truckImg: "/images/footer/truck.svg",
  hillImg: "/images/footer/hill.svg",
  text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
  logo: "/images/footer/logo.svg",
  links: [
    { name: "about", href: "/" },
    { name: "how to", href: "/" },
    { name: "faqs", href: "/" },
  ],
  form: {
    labelName: "Name",
    placeholderName: "Your name",
    labelEmail: "Email address",
    placeholderEmail: "Your email adddress",
    btnText: "Get Started",
  },
};

const Footer = () => {
  const { truckImg, hillImg, text, logo, links, form } = footerData;

  return (
    <footer className="bg-darkblue  lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative">
      <motion.div variants={staggerFooterContainer} initial='initial' whileInView={'animate'} viewport={{once:false, amount:0.1}} className="container mx-auto lg:min-h-[46.125rem] flex flex-col justify-between">
        {/* truck image */}
        <motion.div variants={footerTruckAnim} className="hidden lg:flex absolute -top-24 -left-[6.8%]">
          <Image src={truckImg} width={430} height={210} alt="" />
        </motion.div>

        <div className="hidden lg:flex absolute z-10 top-[1.375rem] left-0">
          <Image src={hillImg} width={137} height={92} alt="" />
        </div>

        {/* text & form */}
        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row items-center lg:pr-[5.9375rem] lg:gap-x-[5.9375rem] gap-y-10 lg:gap-y-0">
          <div className="text-white flex-1 border-l-[.625rem] border-accent py-4 lg:mt-24">
            <p className=" max-w-[20.625rem] text-[1.375rem] leading-[1.875rem] ml-[2.5rem]">{text}</p>
          </div>
          <form className=" w-full max-w-[34.375rem] bg-white flex-1 rounded-[10px] lg:order-2 flex flex-col px-[2.1875rem] lg:px-[4.6875rem] py-[1.5625rem] lg:py-[3.25rem] space-y-[2.5rem] drop-shadow-primary">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-light mb-[.625rem]">
                {form.labelName}
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder={form.placeholderName}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-light mb-[10px]">
                {form.labelEmail}
              </label>
              <input
                type="text"
                id="email"
                className="input"
                placeholder={form.placeholderEmail}
              />
            </div>
            <button className="btn self-start hover:bg-accent-hover transition">
              {form.btnText}
              <CgArrowLongRight className=" text-[1.875rem]" />
            </button>
          </form>
        </motion.div>
        {/* Logo & links */}
        <motion.div variants={fadeInUp} className=" py-[7.5rem] flex flex-col lg:flex-row justify-between lg:pr-24">
          <div className="mb-6 mx-auto lg:mb-0 lg:mx-0">
            <Link href={'/'}> 
                <Image src={logo} width={170} height={41} alt="" />
            </Link>
          </div>
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[6.25rem] text-center">
            {
              links.map((link, index) => {
                return <li key={index} className=" text-white font-light hover:text-accent transition">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              })
            }
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
