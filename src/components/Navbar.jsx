import React from 'react'

const Navbar = () => {
  return (
  <nav className='bg-slate-800 text-white'>
    <div className="mycontainer flex justify-between items-center px-4 py-5 h-14  mycontaine">
    <div className="log font-bold text-white text-2">
   
      
      <span className='text-green-700'>/ &lt;</span>
      Pass 
      <span className='text-green-700'>OP/ &gt;</span>
    
      </div>
    <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold'href='#'>Home</a>
            <a className='hover:font-bold'href='#'>About</a>
            <a className='hover:font-bold'href='#'>contact us</a>
            
        </li>
    </ul>
    <button className='text-white bg-green-500 flex  my-4 rounded-full justify-between items-center ring-blue-50 ring-2'>
      <img className='invert  py-1 w-10'src="icons/github-removebg-preview.png" alt="Github logo" />
      <span className=' font-bold px-2'>GitHub</span>
    </button>
    </div>
  </nav>
  )
}

export default Navbar
