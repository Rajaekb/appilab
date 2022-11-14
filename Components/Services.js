import React from 'react'


const Services = () => {
  return (
    <div className='pt-10 md:pt-0 h-screen md:flex justify-between gap-16 items-center' id="Services">
    <div className='md:flex-1 '>

    <h1 className='text-5xl tracking-[.10em]'>Nos <span className='text-purple-500'>Services</span></h1>
    <br/>
    <hr className='bg-lime-400 w-20 h-1'/>
    <br/>
    <h2 className='text-3xl tracking-[.10em]'>Creation des applications mobile personalisés </h2>
    <br/>
    <p className='tracking-[.10em] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Scelerisque fermentum dui faucibus in or.</p>
      <br/>
    
    
    </div>

    <div className='absolute bg-purple-300 right-40 top-80 rounded-full w-80 h-80 filter blur-3xl opacity-30 animate-blob' ></div>
      <div className='absolute bg-yellow-600 right-20 top-100 rounded-full w-72 h-72 filter blur-3xl opacity-20 animate-blob'></div>
      <div className='absolute bg-purple-600 right-52 top-50 rounded-full w-72 h-72 filter blur-3xl opacity-30 animate-blob'></div>
            
      
    <div className='flex-1 md:items-end md:flex md:flex-col gap-6  place-items-center items-center	 '>
      <div className='flex gap-6 pb-6'>
        <div className='relative'>
         <div className=" absolute rounded-lg p-0.5 bg-gradient-to-tr from-purple-500 to-lime-400 md:w-64 md:h-64 w-44 h-44 blur animate-pulse"></div>
         <div className=' flex-1 border border-lime-400 rounded-lg  p-10 dark:bg-black bg-white drop-shadow-lg hover:scale-125 transition duration-700 ease-in-out md:w-64 md:h-64 w-44 h-44'>Mobile dev</div>

        </div>
        <div className='relative'>
        <div className="absolute rounded-lg p-0.5 bg-gradient-to-tr from-purple-500 to-lime-400 md:w-64 md:h-64 w-44 h-44 blur animate-pulse"></div>
        <div className=' flex-1 border rounded-lg p-10 dark:bg-black bg-white drop-shadow-lg hover:scale-125 transition duration-700 ease-in-out md:w-64 md:h-64  w-44 h-44'>Web Dev</div></div>
      </div>
      <div className='flex gap-6'>
      <div className='relative'>
      <div className=" absolute blur rounded-lg p-0.5 bg-gradient-to-tr from-purple-500 to-lime-400 md:w-64 md:h-64 w-44 h-44 animate-pulse"></div>
        <div className='flex-1 border rounded-lg p-10 dark:bg-black bg-white drop-shadow-lg hover:scale-125 transition duration-700 ease-in-out md:w-64 md:h-64 w-44 h-44' >
           Mobile dev

      </div>
      </div>
      <div className='relative'>
        <div className=" absolute blur rounded-lg p-0.5 bg-gradient-to-tr from-purple-500 to-lime-400 md:w-64 md:h-64 w-44 h-44 animate-pulse"></div>
        <div className='flex-1 border  border-lime-400 rounded-lg p-10 dark:bg-black bg-white drop-shadow-lg hover:scale-125 transition duration-700 ease-in-out md:w-64 md:h-64 w-44 h-44' > web dev</div>
        </div>
      </div>
    
  </div>
    
    
 

  </div>  
  )
}

export default Services