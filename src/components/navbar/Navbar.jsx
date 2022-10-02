import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import { logout } from "../../firebase";
import { useState } from 'react';
import { auth } from '../../firebase-config';

function Navbar() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };


    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white ml-3"><b>Goal Tracker</b></span>
                    </Link>
                    <div className='flex'>
                        {!isAuth ? (
                            // <Link to="/login"> Login </Link>
                            <Link to='/login' className="flex md:order-2">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Login</b></button>
                            </Link>
                        ) : (
                            <>
                                {/* <Link to='/add-project' className="flex md:order-2"> */}
                                <Link to='/createpost' className="flex md:order-2">
                                    <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Add Project</b></button>
                                </Link>

                                <Link className="flex md:order-2">
                                    <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={signUserOut}><b>Logout</b></button>
                                </Link>
                            </>
                        )}

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar