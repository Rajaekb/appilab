import Image from 'next/image'
import React from 'react'

import work from '../public/img/working.jpg'


const Post = () => {
  return (

      <div class="max-w-lg mx-auto">
    <div class="dark:bg-black bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    <Image
        src={work}
        alt="Appilab"
        className='bg-cover rounded-t-lg'
   
      />
        <div class="p-5">
            <a href="#">
                <h5 class="dark:text-white text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="font-normal dark:text-white text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a class="text-black font-bold bg-lime-400 hover:bg-purple-500 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Lire la suite
            </a>
        </div>
    </div>
     </div>
 
  )
}

export default Post