'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidDashboard, BiSolidReport, BiSolidServer } from 'react-icons/bi';
import { BsBuildingFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { PiSignOutFill, PiUsersFourFill } from 'react-icons/pi';

export default function Sidebar() {
    const { data: session } = useSession();

    return (
        <aside className='h-screen w-80 bg-kb-gray-900 text-white hidden md:block'>
            <figure className='w-full flex justify-center p-2'>
                <Image src='/images/logo.webp' alt='Logo' width={200} height={200} />
            </figure>
            <nav className='mt-5 flex h-[calc(100%-100px)] w-full'>
                <ul className='flex flex-col text-lg w-full'>
                    <li>
                        <Link
                            href='/'
                            className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                            <AiFillHome className='text-2xl' /> Home
                        </Link>
                    </li>
                    {session?.user && (
                        <>
                            <li>
                                <Link
                                    href='/dashboard'
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <BiSolidDashboard className='text-2xl' /> Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='/departments'
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <BsBuildingFill className='text-2xl' /> Departments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/users'
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <PiUsersFourFill className='text-2xl' /> Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/reports'
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <BiSolidReport className='text-2xl' /> Reports
                                </Link>
                            </li>
                            <hr className='m-3 opacity-25' />
                            <li className='mt-auto'>
                                <Link
                                    href={`/profile/${session?.user.id}`}
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <FaUserAlt className='text-2xl' /> Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/settings'
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3'>
                                    <GiSettingsKnobs className='text-2xl' /> Settings
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        signOut({
                                            callbackUrl: '/',
                                        })
                                    }
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3 w-full'>
                                    <PiSignOutFill className='text-2xl' /> Sign out
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </aside>
    );
}
