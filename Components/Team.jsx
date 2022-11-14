import React, { useState } from 'react'
import profile from '../public/img/profile.jpg'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Team = () => {


  return (
    <div  className="h-screen sm:pt-32 mt-44 " id="Team">
      
      <h1 className='text-5xl tracking-[.10em] md:pt-12 pt-56'>Notre <span className='text-purple-500'>Equipe</span></h1>
      <br/>
      <hr className='bg-lime-400 w-20 h-1 '/>
      <br/>
      
      <Carousel>
        <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-3 pt-12 md:gap-6 md:px-24">
      <div className='bg-black rounded-full border-2 border-lime-400 md:w-52 w-32 '>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-lime-400 md:w-52 w-32'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center pt-12 gap-6 px-24">
      <div className='bg-black rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center pt-12 gap-6 px-24">
      <div className='bg-black rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>  
      <div className='bg-black  rounded-full border-2 border-lime-400 w-52'>
        <Image src={profile} alt="Appilab" className='rounded-full p-1'/>
      </div>
      </div>
      </Carousel>









    </div>
  )
}

export default Team