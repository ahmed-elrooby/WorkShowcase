"use client";
import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Github } from "lucide-react";
import { IoIosLink } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarParticle from "../StarParticle/StarParticle";
const ProjectsPage = () => {
  return (
    <>
      <div className="h-full  mt-[100px] pt-[50px] m-auto">
        <div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                  <h1 className="font-bold text-[25px] capitalize">
                    Vitruvius
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    This is my graduation project. This site specializes in
                    construction. It's available to carry out any project for
                    our clients, whether by sending 3D/2D models of private
                    projects or choosing from our site. Moreover, our clients
                    can send us models to calculate the costs for them. I used
                    HTML, CSS, and JavaScript to develop this website.
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/constructions/landing.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/constructions">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/constructions.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">Movies</h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    This project is your go-to destination for a diverse
                    collection of movies. This Movie Hub is created to enhance
                    your movie-watching experience by providing detailed
                    storylines, viewer voting, and various genres. Welcome to
                    Movie Hub, where you can discover, engage with, and enjoy a
                    diverse selection of interesting movies right at
                    your fingertips.
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://moviesproject-one.vercel.app/">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/moviesproject.git">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/home.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    furniture website
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    in this website i use html for building website and css to
                    .... website and javascript to make my website more
                    interactive
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/template-4/one.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/template-4">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/1-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    AddStore{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    in this website i show all medical tool that doctors need
                    .as commerce website i use react js
                    ,react-router-dom,framr-motion library,usestate hook
                    ,useParams,
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://medical-tools-6c31d.web.app/">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/medical-tools">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/addstore.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    Bondi theme{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    this website static designed by using html,css and bootstrap
                    framework
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/Boundi-project/boundi.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/Boundi-project">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/2-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    Nouvil clone{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    this website is clone for website called nouvile ,in this
                    website i use html,css,bootstrap
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/nouvill-clone/bondi.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/nouvill-clone">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/3-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    coffee project{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    Welcome to [Your Coffee Website Name], your digital
                    sanctuary for all things coffee. Immerse yourself in a world
                    where the love for coffee meets curated expertise, bringing
                    you an unparalleled coffee experience... i use html css only
                    to desgin this website.
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/coffee-project/coffe.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/coffee-project">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/4-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    Exclusive E-Commerce{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    I've recently worked on the e-commerce platform "Exclusive,"
                    utilizing modern technologies and best practices. Frontend:
                    Next.js for optimized performance, Tailwind CSS for
                    responsive design, React Lucide for icons, and Skeleton
                    Loading Screens for an enhanced user experience. Backend:
                    Strapi as a flexible and easy-to-use CMS.
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://www.linkedin.com/posts/ahmed-eid-8b66682a6_reactjs-nextjs-tailwindcss-activity-7228547088895115264-PEyF?utm_source=share&utm_medium=member_desktop">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/-e-commerce">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/exclusive.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    leon company{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    this static project that i use only Html and Css to design
                    it
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/leon-">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/leon-">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/5-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    commerce project{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    this website sells phones
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://github.com/ahmed-elrooby/templete-2">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://ahmed-elrooby.github.io/templete-2/second.html">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/6-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                    about my self{" "}
                  </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
                    in this website i am gonna to share everything about my life
                    books i am reading , games i am playing ,events , servics
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://ahmed-elrooby.github.io/templete-3/index3.html">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/templete-3">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/7-.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>



            <SwiperSlide>
              <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
                className="relative border border-[--main-color] p-3 cursor-pointer w-[350px]  group rounded-md h-[400px]"
              >
                <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-start text-white bg-[#3264afd6] w-full h-full overflow-hidden">
                <h1 className="font-bold text-[25px] capitalize">
                  HEXASHOPE                 </h1>
                  <p className="leading-[2] capitalize text-center text-sm px-2">
           
HEXASHOPE is a modern e-commerce platform built with Next.js and Tailwind CSS. It offers users an intuitive shopping experience, featuring a responsive design, smooth navigation, and fast product browsing. The platform allows customers to explore various products, view details, and complete purchases effortlessly, ensuring a seamless and enjoyable online shopping journey.
                  </p>
                  <div className="flex items-center  justify-center gap-[50px]">
                    <Link href="https://hexashop-pearl.vercel.app/">
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                    <Link href="https://github.com/ahmed-elrooby/hexashop">
                      <Github
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  </div>
                </div>
                <Image
                  src={require("../../Images/HEXASHOP.png")}
                  className="w-full h-full max-w-full"
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
<div className="w-[95%] m-auto">
<h1 className="md:text-[24px] text-[20px] lg:border-2 lg:border-[--main-color] p-3 rounded-full mt-[50px] flex-wrap flex gap-3 items-center text-[--main-color] justify-center font-bold capitalize  ">I have more projects available. If you're interested, click here to view them <Link className="transition-all hover:scale-[1.3]" href="https://github.com/ahmed-elrooby"><FaGitAlt size={60} className="text-[--main-color]"/></Link> </h1>

</div>
        </div>
        <StarParticle />
      </div>
    </>
  );
};

export default ProjectsPage;
