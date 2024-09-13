"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from "../Images/loading animation.json"

const loading = () => {
  return <>
  <div className='h-screen w-full bg-[#0B3D88] flex items-center justify-center text-center relative z-[59955555]'>
<Lottie animationData={loadingAnimation} className="w-[400px] h-[400px]" loop={true}/>

  </div>
  </>
}

export default loading