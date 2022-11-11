import React, { useState } from 'react'
import profile from '../public/img/profile.jpg'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Team = () => {


  return (
    <div  className="h-screen" id="Team">
      
      <h1 className='text-5xl tracking-[.10em] pt-12'>Notre <span className='text-purple-500'>Equipe</span></h1>
      <br/>
      <hr className='bg-lime-400 w-20 h-1 '/>
      <br/>
      
      <Carousel>
        <div className="grid grid-cols-4 place-items-center pt-12 gap-6 px-24">
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
      <div className="grid grid-cols-4 place-items-center pt-12 gap-6 px-24">
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
      <div className="grid grid-cols-4 place-items-center pt-12 gap-6 px-24">
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