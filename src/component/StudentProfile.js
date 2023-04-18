import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function StudentProfile() {

    const [student, setstudent] = useState({});

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

    }, [])

    return (

        <div>



            <div className="mt-6 border-t border-gray-100 bg-white elative overflow-x-auto shadow-md sm:rounded-lg">
                <dl className="divide-y divide-gray-100  border-b dark:bg-gray-800 dark:border-gray-700 p-6 dark:text-gray-400">

                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 font-medium dark:text-white">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 dark:text-white">Personal details and application.</p>
                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">First name</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.firstName}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Last name</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.lastNane}</dd>
                    </div>


                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Date of Birth</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.dateOfBirth}</dd>
                    </div>

                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Email address</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.email}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Blood Group</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400"> {student.bloodGroup}</dd>
                    </div>
                    <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Address</dt>
                        <dd className="font-medium text-gray-900 whitespace-nowrap  dark:text-gray-400">
                            {`${student.streetAddress}, ${student.city}, ${student.region} ${student.postalCode}`}
                        </dd>
                    </div>

                </dl>
            </div>

        </div>
    )
}







