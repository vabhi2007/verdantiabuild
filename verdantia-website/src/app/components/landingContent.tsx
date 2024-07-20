// components/LandingPage.tsx
"use client"

import arrowDown from '../../../public/images/arrow-down.svg'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import JobPostForm from "@/app/components/jopPostForm";
import {useRouter} from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

interface LandingPageProps {
  heading: string;
  subheading: string;
  buttonText?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ heading, subheading, buttonText }) => {
  const [headingPart1, headingPart2] = heading.split('\\n');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleJopAppPopUp = () => {
    if (buttonText === 'Post Application') {
      setIsOpen(!isOpen);
      router.push('#popUp');
    }
    if (buttonText === 'Join the Team' || buttonText === 'Explore Careers') {
      if (user) {
        router.push('/jobs');
      } else {
        router.push('/signIn');
      }
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="absolute inset-0 w-[100vw] h-[46vw] bg-center bg-cover" style={{ backgroundImage: `url('/images/background-cropped.png')`, zIndex: -1}}></div>
      <Navbar />
      <div className="container py-[1vw] text-white relative z-10 ml-[8vw] mt-[5vw]">
        <AnimatePresence>
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl mb-[1vw]"
              style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '7vw', lineHeight: '8vw' }}
            >
              <div>&nbsp;</div> {/* Placeholder for headingPart1 */}
              <div>&nbsp;</div> {/* Placeholder for headingPart2 */}
            </motion.div>
          )}
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg mb-[2vw]"
              style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '2.1vw', lineHeight: '3vw' }}
            >
              &nbsp; {/* Placeholder for subheading */}
            </motion.div>
          )}
          {!isVisible && buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.5 }} // Instant hover grow animation
                className="bg-gray-700 text-white font-semibold px-[1.5vw] py-[0.5vw] rounded hover:bg-gray-800 shadow-lg"
                style={{
                  fontFamily: 'Bellota Text',
                  fontSize: '1.4vw',
                  backgroundColor: '#3E3E3E',
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
                }}
              >
                {buttonText}
              </motion.button>
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl mb-[1vw]"
              style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '7vw', lineHeight: '8vw' }}
            >
              {headingPart1 && <div>{headingPart1}</div>}
              {headingPart2 && <div>{headingPart2}</div>}
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg mb-[2vw]"
              style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '2.1vw', lineHeight: '3vw' }}
            >
              {subheading}
            </motion.div>
          )}
          {isVisible && buttonText && (
            <motion.button
              onClick={toggleJopAppPopUp}
              whileHover={{ scale: 1.1, transition: { duration: 1, delay: 0 } }} // Scale up by 10% on hover
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }} // Transition for initial and animate
              className="bg-gray-700 text-white font-semibold px-[1.5vw] py-[0.5vw] rounded hover:bg-gray-800 shadow-lg"
              style={{
                fontFamily: 'Bellota Text',
                fontSize: '1.4vw',
                backgroundColor: '#3E3E3E',
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
              }}
            >
              {buttonText}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className={"w-screen flex justify-center items-center mb-[15vw]"} id={"popUp"}>
        {isOpen && <JobPostForm close={() => setIsOpen(false)} />}
      </div>

      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2">
  <AnimatePresence>
    <motion.img
      src={arrowDown.src}
      alt="Scroll Down"
      className="cursor-pointer"
      onClick={scrollDown}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ y: { duration: 3 } }}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }} // Arrow moves up slightly on hover
      style={{ width: '3vw', height: '3vw' }}
    />
  </AnimatePresence>
</div>
    </div>
  );
};

export default LandingPage;
