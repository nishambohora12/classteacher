import React from 'react'


export default function Header() {
  return (
 
    <div className='items-center rounded-br-xl bg-neutral-900 h-16 px-4 flex justify-between text-white bg-black shadow-lg shadow-white-500/10'>
    <div className='relative'>
    <input type="text"
     placeholder=' Search Features N/A' 
     className='px-4 text-sm focus:outline-none h-10 active:outline-none w-[18rem] border rounded-xl text-grey bg-neutral-900'>

     </input>
     </div>
      <div> Button</div>
    </div>
   
  )
}
