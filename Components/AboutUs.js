import React from 'react'
import work from '../public/img/working.jpg'
import { motion } from "framer-motion";
import Image from 'next/image'
import { fadeIn, staggerContainer, textVariant } from './utils/motion';

const AboutUs = () => {
  return (
    <motion.div 
    variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}>
    <div className="md:flex gap-6 justify-between mt-20 overflow-hidden" id="AboutUs">
      <motion.div 
      variants={fadeIn('up', 'tween', 0.2,1)}
      className='flex-1'>
        <Image
          src={work}
          alt="Appilab"
          className='md:w-20 sm:w-10 w-10 h-10 bg-cover rounded-lg'
    
        />
      </motion.div>
      <motion.div 
       variants={fadeIn('up', 'tween', 0.5,1)}
       className="flex-1 self-center">
         <h1
             
             className='md:text-5xl sm:text-4xl z-10 text-3xl tracking-[.10em]'>Qui Sommes <span className='font-bold text-purple-500'>Nous !</span></h1>
         <br/>
         <hr className='bg-[#00ff00] w-20 h-1'/>
         <br/>
         <h2 className='md:text-3xl sm:text-2xl text-xl tracking-[.10em]'>Creation des applications mobile personalisés </h2>
         <br/>
          <p className='tracking-[.10em] '>Notre société de développement d'applications mobiles est là pour vous aider à construire, concevoir et développer votre application mobile. Nous réunissons tous les outils et toutes les plateformes nécessaires pour vous permettre de réaliser votre projet.</p>
          <p className='tracking-[.10em] '>Notre société de développement d'applications mobiles est là pour vous aider à construire, concevoir et développer votre application mobile. Nous réunissons tous les outils et toutes les plateformes nécessaires pour vous permettre de réaliser votre projet.</p>
     
      </motion.div> 
          
    </div>
   <motion.div
         variants={fadeIn('up', 'tween', 0.9,1)}
         className='flex justify-around items-center text-center mt-8 text-5xl'>
    <div className='flex-1  text-blue-400 hover:scale-125 duration-300 '><ion-icon name="logo-react"></ion-icon></div>
    <div className='flex-1 text-slate-300 hover:scale-125 transition duration-700 ease-in-out'><ion-icon name="logo-apple"></ion-icon></div>
    <div className='flex-1 text-green-600 hover:scale-125 transition duration-700 ease-in-out'><ion-icon name="logo-android"></ion-icon></div>
    <div className='flex-1 text-green-600 hover:scale-125 transition duration-700 ease-in-out'><ion-icon name="logo-nodejs"></ion-icon></div>
    <div className='flex-1 text-blue-500 hover:scale-125 transition duration-700 ease-in-out'><ion-icon name="logo-css3"></ion-icon></div>
    
 
   </motion.div>
    </motion.div>
  )
}

export default AboutUs