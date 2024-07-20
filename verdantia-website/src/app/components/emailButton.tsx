'use client'

import React from 'react';
import { motion } from "framer-motion";

type TestProps = {
    emailAddress : string
}

const EmailButton: React.FC<TestProps> = ({emailAddress} : TestProps) => {
  const handleClick = () => {
    const subject = encodeURIComponent("Employee Connection Request");
    const body = encodeURIComponent("Hi, \n\nI hope this email finds you well. I would love to connect with you to discuss potential opportunities for collaboration. Looking forward to hearing from you. \n\nBest regards");
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

    const buttonVariants = {
        hover: {
            backgroundColor: "#384f3f", // Darker shade
        },
    };

  return (
    <motion.button 
        className="flex w-[25vw] h-[8.3vw] rounded-[5vw] sm:w-[9vw] sm:h-[3vw] items-center justify-center sm:gap-[2vw]  bg-[#5b8c69] sm:rounded-[2vw] overflow-hidden "
        variants={buttonVariants}
        whileHover="hover"
        onClick={handleClick}
    >
        <div className="w-fit mt-[-1vw] mb-[-1vw] [font-family:'Bellota Text'] font-normal text-white text-[3.05vw] sm:text-[1vw] text-center tracking-[0] leading-[normal]">
            Connect
        </div>
    </motion.button>
  );
};

export default EmailButton;