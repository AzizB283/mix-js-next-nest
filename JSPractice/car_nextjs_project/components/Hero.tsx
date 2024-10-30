'use client';
import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function Hero() {
  const handleScroll = () => {};
  return (
    <>
      <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>
            Find, book or rent a car - quickly and easily!
          </h1>

          <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless booking
            process.
          </p>

          <CustomButton
            title='Explore Cars'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
          />
        </div>

        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src='/hero.png' alt='hero' fill className='object-contain' />
            {/* <motion.img
              //  key={page}
              src='/hero.png'
              //  custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
            /> */}
            <div className='hero__image-overlay' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
