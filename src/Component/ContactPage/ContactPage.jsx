"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../Images/contact.json";
import StarParticle from "../StarParticle/StarParticle";
import { Presentation,House, User, Mail } from "lucide-react";
import Link from "next/link";
import { useForm,ValidationError } from "@formspree/react";
import successAnimation from "../../Images/loading.json"
import { motion } from 'framer-motion';

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xbjngqrb");



  return (
    <>
    <div className="relative w-[95%] mx-auto mt-[120px] mb-[50px]">

      <div className="fixed border-2 border-[--main-color]  rounded-full  px-3 h-[250px] flex flex-col gap-[10px]  items-center justify-center  left-4 top-[40%] text-[--main-color]">
      <Link className="transition-all hover:text-white " href="/"><House size={36}/></Link>
      <Link className="transition-all hover:text-white " href="/About"> <User size={36}/></Link>
      <Link className="transition-all hover:text-white " href="/Contact"> <Mail size={36}/></Link>
      <Link className="transition-all hover:text-white " href="/Projects"> <Presentation size={36}/></Link>
        
       
      
      
           </div>
    <div>
        <div className="flex flex-wrap items-center justify-center gap-[30px] ">
          <motion.div
                           initial={{  x: -300 }}
                           transition={{
                               duration: 0.7,
                               type: "tween",
                           }}
                           whileInView={{
                               x: 0,
                           }}
          
          >
            <Lottie
              animationData={contact}
              loop={true}
              classNa="max-w-full  md:w-[300px] md:h-[300px]  "
            />
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
            <form
            onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-5 p-5 rounded-lg "
            >
              <input
               required
                className="outline-[--main-color] text-[--main-color] font-bold py-3 px-5 rounded-lg border-2 border-[--main-color]"
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
              />
              <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              <textarea
                              className="outline-[--main-color] text-[--main-color] font-bold py-3 px-5 rounded-lg border-2 border-[--main-color]"

                name=""
                id=""
                placeholder="write your message "
                cols="35"
                rows="10"
              ></textarea>
              <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              <button type="submit" disabled={state.submitting} className="py-1 px-2 text-[22px] border-1 border-[--main-color] text-white cursor-pointer transition-all hover:bg-[#0B3D88]  rounded-full bg-[--main-color] font-bold" >                {state.submitting ? "submitting" : "submit"}
              </button>
            
            </form>

          </motion.div>
          {state.succeeded && (
            <div
              className="flex px-4 rounded-full  text-[--main-color] text-center m-auto  font-bold border border-[--main-color] justify-center gap-2 mt-4 items-center"
            >
              <Lottie
                loop={false}
                style={{ height: "35px" }}
                animationData={successAnimation}
              />
              <div className="p-2 text-center text-[24px] capitalize  ">
                your message has been sent <span>&#9996;&#65039;</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

      <StarParticle />
    </>
  );
};

export default ContactPage;
