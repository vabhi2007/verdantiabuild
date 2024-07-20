// Carousel.tsx

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import JobBlock from '../components/jobBlock';

interface Block {
  data: string;
  applicantCount: string;
  workMethod: string;
  location: string;
  jobTitle: string;
  duration: string;
  onClick: () => void; // Add onClick prop
}

interface CarouselProps {
  blocks: Block[];
}

const Carousel: React.FC<CarouselProps> = ({ blocks }) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 3;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <motion.div
      className="absolute left-0 flex gap-4"
      ref={ref}
      style={{x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {[...blocks, ...blocks].map((item, idx) => (
        <JobBlock
          data={item.data}
          applicantCount={item.applicantCount}
          workMethod={item.workMethod}
          location={item.location}
          jobTitle={item.jobTitle}
          duration={item.duration}
          onClick={item.onClick}
          key={idx}
        />
      ))}
    </motion.div>
  );
};

export default Carousel;
