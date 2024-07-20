'use client'

import LandingContent from "../components/landingContent";
import React from 'react';
import JobBlock from "../components/jobBlock";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, useMotionValue } from "framer-motion";
import { useState } from "react";
import Carousel from '../components/Carousel';
import Sources from '../../../public/images/Verdantia_Sources.svg';
import Footer from "../components/Footer";

const Citations = () => {

  return (
    <main>
      <LandingContent heading="Citations and\nReferences" subheading="" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Sources.src} className='mt-[16vw] mb-[4vw] w-[50vw] h-auto'></img>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Citations;
