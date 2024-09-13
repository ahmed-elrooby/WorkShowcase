"use client";
import React from "react";
import StarParticle from "../StarParticle/StarParticle";
import Lottie from "lottie-react";
import aboutLottie from "../../Images/aboutLottie.json"
import about from "../../Images/about"
import ProfisSkills from "../ProfisSkills/ProfisSkills";
import Services from "../Services/Services";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className="w-[90%] text-white mt-[50px] pt-[100px] m-auto ">
        <div className="flex flex-wrap items-center justify-center gap-4 md:items-start">
          <motion.div
          initial={{  x: -300 }}
          transition={{
              duration: 0.7,
              type: "tween",
          }}
          whileInView={{
              x: 0,
          }}

          className="flex flex-col w-full md:w-[50%] xl:w-[60%] gap-2 ">
                 <h1 className="text-[30px] flex items-center    capitalize font-bold">
              Here's a quick
                introduction

               about me 
                           <Lottie animationData={about} className="w-[100px] h-[100px] max-w-full" loop={true} />

            </h1>
           
            <p className="text-[21px] leading-[2] capitalize">
            "Hi, I'm Ahmed Eid, a Frontend Developer from <span className="text-[--main-color] font-bold">Beni Suef</span> , Egypt. I specialize in React and Next.js, with expertise in HTML, CSS, and JavaScript. I graduated in 2022 with a degree in Computer Science and have completed my military service. I’m passionate about continuous learning, teamwork, and staying current with tech trends. Available for freelance or full-time work."

            </p>
          </motion.div>
          <motion.div
          initial={{  x: 300 }}
          transition={{
              duration: 0.7,
              type: "tween",
          }}
          whileInView={{
              x: 0,
          }}

          >
            <Lottie animationData={aboutLottie}  className="max-w-full w-[350px] md:w-[400px]"              loop={true}/>
          </motion.div>
        </div>
        <p className="m-auto text-[25px] capitalize  w-full md:w-[70%] text-center mt-[25px]"> 👉 Code is like humor. When you have to explain it, it’s bad. Write clean, simple, and understandable code, so it speaks for itself.</p>
<ProfisSkills />
      </div>
      <Services />
      <StarParticle />

    </>
  );
};

export default About;