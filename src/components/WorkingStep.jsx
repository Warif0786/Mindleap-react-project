import React from 'react';

import {motion} from "framer-motion";
import {fadeIn} from "../utilis/animationVariants";

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
        <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='relative container mx-auto py-20 px-4'>
            <div className='text-white text-center mb-20'>
                <h2 className='text-4xl font-secondary font-bold mb-4'>How It Works</h2>
                <p className='text-lg md:w-1/2 w-full mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero voluptatum distinctio praesentium quos sint quas nulla minus asperiores expedita.</p>
            </div>

            <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 md:space-y-0 space-y-4'>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold'>1</div>
                    <h3 className='text-lg font-medium mt-8'>Fill a Form</h3>
                    <p className='my-2'>Step 1 description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold'>2</div>
                    <h3 className='text-lg font-medium mt-8'>Get Matched</h3>
                    <p className='my-2'>Step 2 description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center font-bold'>3</div>
                    <h3 className='text-lg font-medium mt-8'>Schedule</h3>
                    <p className='my-2'>Step 3 description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default WorkingStep
