import React from 'react'
import iphone from '../public/img/appilabphone.png'
import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from './utils/motion';

const Hero = () => {
  return (
    <section>
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        >
    <div className='h-screen md:flex md:justify-between md:relative md:items-center md:mt-10 mt-24 overflow-hidden' id="home">
      <div className='flex-1 '>

      <motion.h1
      variants={textVariant(0.2)}

        className='md:text-7xl md:tracking-[.25em] text-5xl font-bold '>
          APPILAB</motion.h1>
      <br/>
      <hr className='bg-[#00ff00] w-20 h-1'/>
      <br/>
      <motion.h2 
      variants={textVariant(0.5)}
      className='text-3xl text-purple-500 tracking-[.10em] font-bold'>Développement des applications mobile </motion.h2>
      <br/>
      <motion.p 
      variants={textVariant(0.9)}
      className='tracking-[.10em] w-full'>Notre société de développement d'applications mobiles est là pour vous aider à construire, concevoir et développer votre application mobile. Nous réunissons tous les outils et toutes les plateformes nécessaires pour vous permettre de réaliser votre projet.</motion.p>
      <br/>
      <motion.div 
      variants={textVariant(1.1)}
      className='flex gap-3'>
        <Link to="Contact" smooth={true} offset={-100} duration={500}>
      <button className=" font-bold tracking-[.10em] sm:animate-pulse  p-4 rounded-lg hover:scale-125 ease-in-out duration-300  border border-[#00ff00] dark:text-white cursor-pointer z-99999" type="submit">Get In Touch</button>
      </Link>
      <Link to="Services" smooth={true} offset={-100} duration={500}>
      <button className="font-bold tracking-[.10em]  p-4 rounded-lg hover:scale-125  ease-in-out duration-300  border border-[#00ff00] dark:text-white" type="submit">Nos Services</button>
      </Link>
      </motion.div>
      </div>
            
      <motion.div 
      variants={slideIn('right', 'tween', 0.2 , 1)}
      className='flex-1'>
      <Image
        src={iphone}
        alt="Appilab"
        className='relative rounded-lg rotate-6 bg-cover '
   
      />
      </motion.div>   

    </div>  
    <Link to="AboutUs" smooth={true} offset={-100} duration={500}>
    <div className='-mt-20 flex justify-center items-center animate-bounce cursor-pointer text-[#00ff00]'>
    <ion-icon name="arrow-down-circle-outline" size="large"></ion-icon>

    </div>
    </Link>
    </motion.div>
    </section>
  )
}

export default Hero