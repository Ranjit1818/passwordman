import React from 'react'

function footer() {
  return (
    <div className='bg-slate-800 h-15 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="log font-bold text-white text-2 my-2">
   <span className='text-green-700'>/ &lt;</span>
    Pass
   <span className='text-green-700'>OP/ &gt;</span>
 
   </div>
        <div className='flex justify-center items-center'>
     <span className='my-5'> Created By </span> 
      <img className='w-16'src="icons/rkcreation.png" alt="" />
      </div>
    </div>
  )
}

export default footer
