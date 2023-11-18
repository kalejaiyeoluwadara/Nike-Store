import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo2 from './../assets/icons/nike.svg';

function Onboard() {
  const svgVariant = {
    hidden: {
      // fill: 'transparent'
    },
    animate: {
      rotate: 0,
      // fill:'white'
    },
    transition: {},
  };

  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  };

  return (
    <Link to="/home">
      <div className="h-screen board w-screen bg-blue-500 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="visible"
            width="157"
            height="54"
            viewBox="0 0 157 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={pathVariant}
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M78.4823 20.2931L51.4201 27.3814C41.863 29.7475 33.503 32.899 25.4471 30.1402C14.4966 25.4081 14.6929 13.0968 22.8567 0C8.42284 11.9186 -17.5502 50.0308 17.5777 53.8793C22.0521 54.4683 30.0196 52.8975 38.674 49.2552L78.4823 32.9088L157 0.785412L88.2357 17.7307L78.4823 20.2931Z"
              fill="#FFF6F2"
            />
          </motion.svg>

          <h1 className="font-[700] text-white text-[70px]">NIKE</h1>
          <motion.p
          animate={{
            opacity:[1,0,0,1],transition:{
              duration:3,repeat:Infinity
            }
          }}
          className='translate-y-20 text-white text-[20px] font-[300] '>Tap Me</motion.p>
        </div>
      </div>
    </Link>
  );
}

export default Onboard;
