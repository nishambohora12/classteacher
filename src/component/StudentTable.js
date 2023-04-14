import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const design =
  'p-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'

export default function StudentTable()
 {

  const [form,setform] = useState({});
  const [students, setStudents]= useState({});

  const handleform = (e)=>
  {
    console.log(e.target.value,e.target.name);
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
    
  }

  const handleSubmit = async (e) =>{
     
    e.preventDefault();
   
    const response = await fetch('http://localhost:8080/',
    {
      method:'POSt',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      This is student <Link to="/dashboard">Click to</Link>

      <form onSubmit={handleSubmit}>
        <p>{JSON.stringify(form)}</p>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
           
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Please Validate Data Before Submission</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="LastName"
                      id="last-name"
                      autoComplete="family-name"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="Date of birth" className="block text-sm font-medium leading-6 text-gray-900">
                    Date of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="dateOfBirth"
                      id="date-of-birth"
                      autoComplete="family-name"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="Blood Group" className="block text-sm font-medium leading-6 text-gray-900">
                    Blood Group
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="bloodGroup"
                      id="blood-group"
                      autoComplete="family-name"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={design}
                      onChange={handleform}
                     
                    />
                  </div>
                </div>

         

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="streetAddress"
                      id="street-address"
                      autoComplete="street-address"
                      onChange={handleform}
                      className={design}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      onChange={handleform}
                      className={design}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postalCode"
                      id="postal-code"
                      autoComplete="postal-code"
                      className={design}
                      onChange={handleform}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form >
    </div >
  )
}
