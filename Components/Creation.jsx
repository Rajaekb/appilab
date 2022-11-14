
import Link from 'next/link'
import React from 'react'
import appistadium from '../public/img/appistadium.png'
import Image from 'next/image';

function Creation() {
  return (<>
   <div className='h-screen md:pt-0 pt-60'>
   <h1 className='text-5xl tracking-[.10em] '>Crée Par <span className='text-purple-500 font-bold'>AppiLAB</span></h1>
      <br/>
      <hr className='bg-lime-400 w-20 h-1 '/>
      <br/>
      
    <div className=' h-screen border border-lime-400 rounded-lg flex mx-20 px-5 items-center'>
        <div className='flex gap-5 items-center'>
            <div className='flex-1'>
               <Image
                    src={appistadium}
                    alt="appistadium"
                    className=' rounded-lg bg-cover'
                />
            </div>
            
            <div className='flex-1'>
                <h1 className='text-5xl font-bold '>AppiStadium</h1>
                <br/>
                <hr className='bg-lime-400 w-20 h-1'/>
                <br/>
                <p className='tracking-[.10em]'>AppiStadium est une application gratuite de jeux en réalité alternée. Suis les dernières actus. Joue pour gagner les cadeaux officiels de l'équipe que tu supportes..</p>
                <br/>
                <div>
                    <Link href="https://www.appistadium.com/">
                <button className="font-bold tracking-[.10em] animate-pulse  p-4 rounded-lg hover:scale-125 ease-in-out duration-300  border border-lime-400 dark:text-white" type="submit">Visitez le site web</button>
                </Link>
        
                </div>
           </div>
        </div>
    </div>
    </div>
  </>
   
  )
}

export default Creation