import React from 'react'
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import StudentProfile from './StudentProfile';
import { useNavigate } from 'react-router-dom';

export default function DisplayStudent() {


    const [student, setstudent] = useState([]);
    const [search, setsearch] = useState('');


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
            <div className='py-4'>
                <input type="text"
                    placeholder='Search Student'
                    className=' uppercase w-full p-4 px-4 text-sm focus:outline-none h-10 active:outline-none w-[18rem] border rounded-xl dark:bg-gray-700 dark:text-gray-400 shadow-l hover:shadow-lg'
                    onChange={(e) => setsearch(e.target.value)}
                />
            </div>

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
                        {student.filter((i) => {
                            return search?.toLocaleLowerCase() === '' ? i : i.firstName?.toLowerCase()?.includes(search)
                                || search?.toLocaleLowerCase() === '' ? i : i.lastName?.toLowerCase()?.includes(search)
                                    || search?.toLocaleLowerCase() === '' ? i : i.bloodGroup?.toLowerCase()?.includes(search)
                                        || search?.toLocaleLowerCase() === '' ? i : i.city?.toLowerCase()?.includes(search)
                                            || search?.toLocaleLowerCase() === '' ? i : i.streetAddress?.toLowerCase()?.includes(search)
                                                || search?.toString() === '' ? i : i.dateOfBirth?.toString()?.includes(search)
                                                    || search?.toLocaleLowerCase() === '' ? i : i.region?.toLowerCase()?.includes(search)
                                                        || search?.toString() === '' ? i : i.email?.toString()?.includes(search)
                        }).map((i) => {

                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <Link to={`/student/${i._id}`}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{`${i.firstName} ${i.lastName}`}</th> </Link>
                                    <td class="px-6 py-4">{i.dateOfBirth}</td>
                                    <td class="px-6 py-4">{i.bloodGroup}</td>
                                    <td class="px-6 py-4">{i.email}</td>
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

