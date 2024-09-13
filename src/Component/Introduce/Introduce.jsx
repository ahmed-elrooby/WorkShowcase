"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Presentation, User, Github } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from 'framer-motion';

const Introduce = () => {
  return (
    <>
      <div className="parent mt-[100px] text-white">
        <motion.div
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.7, type: "tween" }}
          whileInView={{ scale: 1 }}
          className="grid grid-cols-1 mb-[20px] lg:grid-cols-2 gap-[20px] md:gap-[50px] items-center lg:items-start justify-center text-center"
        >
          <div className="flex justify-center">
            <div className="box relative w-[300px] md:w-[400px] md:h-[400px] h-[300px] overflow-hidden rounded-full bg-[#0D47A1]">
              <div className="content">
                <Image
                  alt="intro"
                  src={require("../../Images/me.jpeg")}
                  className="absolute top-0 left-0 w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h1 className="font-bold text-[20px] md:text-[26px] capitalize">
              Here's a brief
              <span className="text-[--main-color] ml-2">introduction</span> about me 🤩💬
            </h1>
            <p className="leading-[2] text-[19px] capitalize text-left">
              I am a dedicated and experienced software engineer with a specialization in
              <span className="text-[--main-color] font-bold"> front-end development</span> using
              <span className="text-[--main-color] font-bold"> React</span>. My technical journey also includes a solid foundation in
              <span className="text-[--main-color] font-bold"> C++</span>, which I leverage for complex algorithms and high-performance applications. This diverse skill set enables me to create...
            </p>
          </div>
        </motion.div>

        <span className="block w-[200px] md:w-[400px] m-auto h-[5px] rounded-lg bg-[--main-color]"></span>

        <motion.div
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.7, type: "tween" }}
          whileInView={{ scale: 1 }}
          className="mt-[30px] text-white"
        >
          <h1 className="text-[40px] text-center my-[13px] font-bold">
            My <span className="text-[--main-color]">Skills</span>
          </h1>
          <div className="flex flex-col gap-6">
            <ol className="relative after:absolute after:content-[''] after:w-[12px] after:h-[12px] after:rounded-full md:after:left-[-17px] ml-2 md:ml-1 after:left-[-13px] after:top-[12px] after:bg-white">
              <li>
                <h1 className="text-[25px] ml-2 font-bold">
                  ➤ Front-End Development:
                </h1>
                <ol className="mt-3 ml-[50px] text-[20px]">
                  <li className="relative mb-3 after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:left-[-19px] after:top-[6px] after:border-[3px] after:border-white">
                    <span className="text-[--main-color] mr-2 font-bold">
                      react | next:
                    </span>
                    Expert in building dynamic, high-performance web
                    applications with React. Proficient in React Hooks,
                    Redux for state management, and API integrations.
                  </li>
                  <li className="relative after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:left-[-19px] after:top-[6px] after:border-[3px] after:border-white">
                    <span className="font-bold mr-2 text-[--main-color]">
                      HTML/CSS/JavaScript:
                    </span>
                    Strong background in web development fundamentals,
                    ensuring that designs are semantic, accessible, and
                    responsive.
                  </li>
                </ol>
              </li>
            </ol>
            <ol className="relative after:absolute after:content-[''] after:w-[12px] after:h-[12px] after:rounded-full md:after:left-[-17px] ml-2 md:ml-1 after:left-[-13px] after:top-[12px] after:bg-white">
              <li>
                <h1 className="text-[25px] ml-2 font-bold">
                  ➤ Programming Expertise:
                </h1>
                <ol className="mt-3 ml-[50px] text-[20px]">
                  <li className="relative mb-3 after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:left-[-19px] after:top-[6px] after:border-[3px] after:border-white">
                    <span className="font-bold text-[--main-color] mr-2">
                      C++:
                    </span>{" "}
                    Adept at developing high-performance applications and
                    tackling complex algorithms and system-level programming.
                  </li>
                </ol>
              </li>
            </ol>
            <ol className="relative after:absolute after:content-[''] after:w-[12px] after:h-[12px] after:rounded-full md:after:left-[-17px] ml-2 md:ml-1 after:left-[-13px] after:top-[12px] after:bg-white">
              <li>
                <h1 className="text-[25px] ml-2 font-bold">
                  ➤ Tools & Technologies:
                </h1>
                <ol className="mt-3 ml-[50px] text-[20px]">
                  <li className="relative mb-3 after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:left-[-19px] after:top-[6px] after:border-[3px] after:border-white">
                    <span className="text-[--main-color] mr-2 font-bold">
                      Version Control:
                    </span>
                    Proficient in using Git and GitHub for version control and collaboration.
                  </li>
                  <li className="relative after:absolute after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:left-[-19px] after:top-[6px] after:border-[3px] after:border-white">
                    <span className="font-bold mr-2 text-[--main-color]">
                      Postman:
                    </span>
                    Strong background in using Postman for comprehensive API
                    testing, ensuring accurate and efficient API requests and
                    responses, as well as troubleshooting and validating
                    integrations.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.7, type: "tween" }}
          whileInView={{ scale: 1 }}
          className="flex mb-[50px] flex-col justify-center mx-auto mt-[20px] text-center items-center gap-[30px]"
        >
          <h1 className="text-[40px] capitalize font-bold">
            Reach <span className="font-bold text-[--main-color]">me</span> via
          </h1>
          <p className="text-[22px] capitalize">
            Don't hesitate to <span className="text-[--main-color] font-bold">reach</span> out to me 😊
          </p>
          <div className='flex items-center gap-[10px]'>
            <Link className='w-[50px] h-[50px] rounded-full border group hover:bg-[#4267B2] bg-white flex items-center justify-center' href="https://www.facebook.com/profile.php?id=100012194289790&mibextid=ZbWKwL">
              <FaFacebook className="cursor-pointer opacity-[0.8] transition-all group-hover:text-white text-[#4267B2] hover:opacity-[1]" size={32} />
            </Link>

            <Link className='w-[50px] h-[50px] rounded-full group border hover:bg-[#c13584] flex items-center justify-center' href="https://www.instagram.com/">
              <FaInstagram className="cursor-pointer text-[#c13584] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]" size={32} />
            </Link>

            <Link href="https://www.linkedin.com/in/ahmed-eid-8b66682a6" className='w-[50px] h-[50px] rounded-full border group hover:bg-[#0077b5] bg-white flex items-center justify-center'>
              <FaLinkedin className="cursor-pointer text-[#0077b5] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]" size={32} />
            </Link>

            <Link href="https://t.me/AhmedEid97" className='w-[50px] h-[50px] rounded-full border group hover:bg-[#0088cc] bg-white flex items-center justify-center'>
              <FaTelegramPlane className="cursor-pointer text-[#0088cc] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]" size={32} />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Introduce;
