import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";

const TechCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[200px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Languages I frequently use.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <TechCard  key={technology.name} index={index} title={technology.name} icon={technology.icon}/>
          // <div className='w-28 h-28' key={technology.name}>
          //   <BallCanvas icon={technology.icon} />
          //   <p className="text-center">{technology.name}</p>
          // </div>
        ))}
        
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "");
