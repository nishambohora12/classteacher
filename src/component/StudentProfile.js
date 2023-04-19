import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function StudentProfile() 
{
    ///get single student by ID//
    const [student, setstudent] = useState({});
    const [studentchange, setstudentchange] = useState([]);

    const { id } = useParams();
 

    const getSingleStudent = async (id) => {

        const response = await fetch(`http://localhost:8080/student/${id}`, {
            method: 'GET'

        });

        let data = await response.json();
        console.log(data);
        setstudent(data);
        console.log(student);

    }
    useEffect(() => {

        getSingleStudent(id);
  

    }, [id])

    /// updating existing single student

    const handleform = (e) => {
        console.log(e.target.value, e.target.name);
        setstudentchange({
            ...studentchange,
            [e.target.name]: e.target.value
        })

    }


    const updateStudent = async (id) => {
        console.log(id);
        const response = await fetch(`http://localhost:8080/update/${id}`, {
            method:'put',
            body:JSON.stringify(studentchange),
            headers:{
              'Content-Type':'application/json'
            }

        });
        
        let data = await response.json();
        console.log(data);
      

       

    }
  



    ///changeing input filed on condition
    const [show, setShow] = useState(true);



    return (

        <div>



            <div className="mt-6 border-t border-gray-100 bg-white relative overflow-x-auto shadow-md sm:rounded-lg">
                {show ? <dl className="divide-y divide-gray-100  border-b dark:bg-gray-800 dark:border-gray-700 p-6 dark:text-gray-400">

                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 font-medium dark:text-white">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-white">Personal details and application.</p>

                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">First name</dt>
                        <dd className=" px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.firstName}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Last name</dt>
                        <dd className=" px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.lastName}</dd>
                    </div>


                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Date of Birth</dt>
                        <dd className=" px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.dateOfBirth}</dd>
                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Email address</dt>
                        <dd className=" px-3 py-1 rounded-xlfont-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.email}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Blood Group</dt>
                        <dd className=" px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.bloodGroup}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Address</dt>
                        <dd className="px-3 py-1 rounded-xlfont-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            {`${student.streetAddress}, ${student.city}, ${student.region} ${student.postalCode}`}
                        </dd>
                    </div>

                </dl> : <dl className="divide-y divide-gray-100  border-b dark:bg-gray-800 dark:border-gray-700 p-6 dark:text-gray-400">

                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 font-medium dark:text-white">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-white">Personal details and application.</p>

                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">First name</dt>
                        <dd  className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'

                            onChange={handleform}
                            defaultValue={`${student.firstName}`}


                        /></dd>

                    </div>

                    
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white" >Last name</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="given-name"
                                className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'

                                onChange={handleform}
                                defaultValue={`${student.lastName}`}


                            />
                        </dd>
                    </div>


                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Date of Birth</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            <input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                autoComplete="given-name"
                                className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'

                                onChange={handleform}
                                defaultValue={`${student.dateOfBirth}`}


                            />
                        </dd>
                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Email address</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="given-email"
                                className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'

                                onChange={handleform}
                                defaultValue={`${student.email}`}


                            />
                        </dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Blood Group</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            <input
                                type="text"
                                name="bloodGroup"
                                id="bloodGroup"
                                autoComplete="given-name"
                                className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'

                                onChange={handleform}
                                defaultValue={`${student.bloodGroup}`}


                            />
                        </dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Address</dt>

                        <div className='gap-2 flex flex-row'>

                            <div>

                                <input
                                    type="text"
                                    name="streetAddress"
                                    id="streetAddress"
                                    autoComplete="given-name"
                                    className='w-80 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'
                                    placeholder='Street Address'  
                                    onChange={handleform}
                                    defaultValue={`${student.streetAddress}`}


                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="given-name"
                                    className='w-30 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'
                                    placeholder='city'       
                                    onChange={handleform}
                                    defaultValue={`${student.city}`}


                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="given-name"
                                    className='w-20 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'
                                    placeholder='state'   
                                    onChange={handleform}
                                    defaultValue={`${student.region}`}


                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    autoComplete="given-name"
                                    className='w-25 px-3 py-1 rounded-xl font-medium text-gray-900 whitespace-nowrap  dark:text-gray-900'
                                    placeholder='Postal code'
                                    onChange={handleform}
                                    defaultValue={`${student.postalCode}`}


                                />
                            </div>

                        </div>
                    
                    </div>

                </dl>}


                <div className='content-center p-4 flex flex-row  '>
                    {show ?
                        <div className='flex-1'>    <button className='p-3 border rounded-xl border bg-sky-500 shadow-l hover:shadow-lg text-white font-medium ' onClick={() => setShow(!show)}>Edit Student</button></div>
                        : <div className='flex-1'>    <button className='text-white font-medium bg-rose-900 p-3 border  rounded-xl border shadow-l hover:shadow-lg ' onClick={() => setShow(!show)}>Cancel Edit</button></div>

                    }
                    
                    { !show ? <div>   <button className='bg-green-500 text-white font-medium p-3 border rounded-xl border  shadow-l hover:shadow-lg ' onClick={()=> updateStudent(`${id}`)}>Update</button></div> : ''}
                </div>
            </div>

        </div>
    )
}







