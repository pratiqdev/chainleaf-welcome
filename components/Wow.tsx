"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, Variants } from 'framer-motion';

type WowProps = {
    /** Object containing hidden and visible variants with style objects */
    variants?: Variants;
    /** Is component visible at start - default false */
    visible?: boolean;

    children?: React.ReactNode;
}

const Component = (props:WowProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.h2
      className="hidden"
        initial="hidden"
        animate={controls}
        variants={props.variants ?? {
          visible: { opacity: 1, transform: 'translateX(0rem)', transition: { duration: 1 } },
          hidden: { opacity: 0, transform: 'translateX(2rem)', transition: { duration: 1} },
        }}
      >
        {props.children}
      </motion.h2>
    </div>
  );
};

export default Component