import Image from 'next/image'
import React from 'react'

import work from '../public/img/working.jpg'


const Post = () => {
  return (
    <div class="flex md:flex-col dark:bg-gray-800 hover:bg-black bg-white border rounded-xl shadow-md overflow-hidden md:max-w-2xl">
 
    <div className='flex-1 flex overflow-hidden'>
      <Image className="object-cover hover:object-top duration-300" src={work} alt="Modern building architecture"/>
    </div>
    <div class="flex-1 p-4">
          
    <a href="#">
        <h5 class="dark:text-white text-black font-bold md:text-2xl text-xl tracking-tight mb-2">Noteworthy technology</h5>
    </a>
    <p class="font-thin p-2 dark:text-white text-gray-700">acquisitions of 2021 so far, in reverse chronological order.</p>
    <a class="text-black p-2 font-bold hover:bg-lime-400 bg-purple-500 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-3 text-center inline-flex items-center" href="#">
        Lire la suite
    </a>


</div>
    

    </div>

 
  )
}

export default Post