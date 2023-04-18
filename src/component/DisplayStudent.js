import React from 'react'
import { useState, useEffect } from 'react';
import EditStudent from './EditStudent';
import { Link } from 'react-router-dom';
import StudentProfile from './StudentProfile';
import { useNavigate } from 'react-router-dom';

export default function DisplayStudent()
{


    const [student, setstudent] = useState([]);

    

    const getUsers = async () => {
        const response = await fetch('http://localhost:8080/',
            {
                method: 'GET',

            })
        const data = await response.json();
        console.log(data);
        setstudent(data);
    }

    useEffect(() => {
        getUsers();
    }, [])




    return (
        <div >

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date of Birth
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Blood Group
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>



                        </tr>
                    </thead>
                    <tbody>
                        {student.map((i) => {

                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <Link to={`/student/${i._id}`}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{`${i.firstName} ${i.lastName}`}</th> </Link>   
                                    <td class="px-6 py-4">{i.dateOfBirth}</td>
                                    <td class="px-6 py-4">{i.bloodGroup}</td>
                                    <td class="px-6 py-4">{i.email}  {i.region}</td>
                                    <td class="px-6 py-4">{`${i.streetAddress}, ${i.city}, ${i.region} ${i.postalCode}`}</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

