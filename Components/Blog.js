
import React from 'react'
import Post from './Post'
import Image from 'next/image'
import work from '../public/img/working.jpg'
const Blog = () => {
  return (
    <div  className="h-screen" id="Blog">
      <h1 className='md:text-5xl sm:text-4xl text-3xl'>Derniers<span className='text-purple-500'> Articles</span> </h1>
        <br/>
         <hr className='bg-[#00ff00] w-20 h-1'/>
        <br/>
   
        <div className='flex md:flex-row flex-col gap-6'>
            
           <Post/>
           <Post/>
           <Post/>
        </div>

  </div>
  )
}

export default Blog