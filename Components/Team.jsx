import React, { useState } from 'react'
import profile from '../public/img/profile.jpg'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Team = () => {


  return (
    <div  className="h-screen" id="Team">
      
      <h1 className='md:text-5xl sm:text-4xl text-3xl tracking-[.10em]'>Notre <span className='text-purple-500'>Equipe</span></h1>
      <br/>
      <hr className='bg-[#00ff00] w-20 h-1 '/>
      <br/>
      
      <Carousel>
        <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-3 pt-12 md:gap-6 md:px-24">
      <div className='bg-black rounded-full border-2 border-[#00ff00] md:w-52 w-32 '>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-3 pt-12 md:gap-6 md:px-24">
      <div className='bg-black rounded-full border-2 border-[#00ff00] md:w-52 w-32 '>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-3 pt-12 md:gap-6 md:px-24">
      <div className='bg-black rounded-full border-2 border-[#00ff00] md:w-52 w-32 '>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-[#00ff00] md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      </Carousel>









    </div>
  )
}

export default Team