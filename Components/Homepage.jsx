import React from 'react'
import iphone from '../public/img/appilabphone.png'
import Image from 'next/image';
import { Link } from 'react-scroll';

const Homepage = () => {
  return (
    <>
    <div className='h-screen md:flex md:justify-between md:relative md:items-center md:mt-10 mt-24 overflow-y-hidden' id="home">
      <div className='flex-1 '>

      <h1 className='md:text-7xl md:tracking-[.25em] text-5xl font-bold '>APPILAB</h1>
      <br/>
      <hr className='bg-lime-400 w-20 h-1'/>
      <br/>
      <h2 className='text-3xl text-purple-500 tracking-[.10em] font-bold'>Développement des applications mobile </h2>
      <br/>
      <p className='tracking-[.10em] w-full'>Notre société de développement d'applications mobiles est là pour vous aider à construire, concevoir et développer votre application mobile. Nous réunissons tous les outils et toutes les plateformes nécessaires pour vous permettre de réaliser votre projet.</p>
      <br/>
      <div className='flex gap-3'>
        <Link to="Contact" smooth={true} offset={-100} duration={500}>
      <button className=" font-bold tracking-[.10em] sm:animate-pulse p-4 rounded-lg hover:scale-125 ease-in-out duration-300  border border-lime-400 dark:text-white cursor-pointer z-99999" type="submit">Get In Touch</button>
      </Link>
      <Link to="Services" smooth={true} offset={-100} duration={500}>
      <button className="font-bold tracking-[.10em]  p-4 rounded-lg hover:scale-125  ease-in-out duration-300  border border-lime-400 dark:text-white" type="submit">Nos Services</button>
      </Link>
      </div>
      </div>
      <div className=''>
      <div className='hidden  bg-purple-300 right-40 sm:top-80 rounded-full w-80 h-80 filter blur-3xl opacity-30 animate-blob' ></div>
      <div className='hidden bg-yellow-600 right-20 sm:top-100 rounded-full w-72 h-72 filter blur-3xl opacity-20 animate-blob'></div>
      <div className='hidden bg-purple-600 right-52 sm:top-50 rounded-full w-72 h-72 filter blur-3xl opacity-30 animate-blob'></div>
      </div>  
      <div className='flex-1'>
      <Image
        src={iphone}
        alt="Appilab"
        className='relative rounded-lg rotate-6 bg-cover'
   
      />
      </div>   

    </div>  
    <Link to="AboutUs" smooth={true} offset={-100} duration={500}>
    <div className='-mt-20 flex justify-center items-center animate-bounce cursor-pointer text-lime-400'>
    <ion-icon name="arrow-down-circle-outline" size="large"></ion-icon>

    </div>
    </Link>

    </>
  )
}

export default Homepage