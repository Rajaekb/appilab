
import React from 'react'
import Post from './Post'
import { Carousel } from 'react-responsive-carousel';

const Blog = () => {
  return (
    <div  className="h-screen pt-36 " id="Blog">
      <h1 className='text-5xl '>Derniers<span className='text-purple-500'> Articles</span> </h1>
      <br/>
         <hr className='bg-lime-400 w-20 h-1'/>
         <br/>
       
            <div className='flex gap-6 pt-12'>
              <Post/>
              <Post/>
              <Post/>
            </div>
           
     

  </div>
  )
}

export default Blog