import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (

    <div className='bg-neutral-800 h-screen w-screen overflow-hidden' >

      <div className='items-center rounded-br-xl bg-neutral-900 h-16 px-4 flex justify-between text-white bg-black s'>
        <div className='relative px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          School Manage
        </div>
        <div className='relative px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'> Button</div>
      </div>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>


        <div className='content-center p-8 border rounded-lg bg-gray-900'>
          <div className=' text-center font-medium text-white'>Login for teacher</div>
          <div className='p-6  sm:rounded text-white'>
            <label className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Username</label>
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              className="px-4 text-sm focus:outline-none h-10 active:outline-none w-[18rem] border rounded-xl text-grey bg-gray-900"


            />
          </div>
          <div className='p-6  sm:rounded text-white'>
            <label className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              className="px-4 text-sm focus:outline-none h-10 active:outline-none w-[18rem] border rounded-xl text-grey bg-gray-900"


            />
          </div>
          <div className='flex flex-row'>
            <div className='flex-1 '>
            <Link to="/"> <button  className='p-1 px-2  border text-white rounded-lg'>Login</button> </Link></div>
            <div>
              <button className='p-1 px-2 border text-white rounded-lg'>Sign Up</button></div>

          </div>

        </div>
      </div>
    </div>
  )
}
