import React from 'react';
import img1 from '../../c.jpeg';
const NavBar = () => {
  
  return (
    <div className="flex justify-around p-4 ">
       
       <img src={"https://www.sciastra.com/Assets/Images/newsciastra.jpg"||img1} className='w-16 h-16 rounded-full'/>
          <a className='m-2 text-black  ' href="/">HOME</a>
          <a className='m-2 text-black ' href="/about">COURSES</a>
          <a className='m-2 text-black ' href="/contact">SELECTIONS</a>
          <a className='m-2 text-black ' href="/write">BLOGS</a>
          <a className='m-2 text-black ' href="/login">MATERIALS</a>
          <a className='m-2 text-black ' href="/register">TEAM</a>
          <a className='m-2 text-black ' href="/register">CONTACT US</a>
          <a className='m-2 text-black ' href="/register">LOGIN</a>
        

       
        </div>


  )
}

export default NavBar
