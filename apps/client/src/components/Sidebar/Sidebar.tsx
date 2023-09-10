'use client';

import { navLinks } from '@/data/nav-links';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { PiSignOutFill } from 'react-icons/pi';

export default function Sidebar() {
    const { data: session } = useSession();

    const currentRoute = usePathname();

    // if (!session) return null;

    const sidebarLinks = navLinks.map(link => {
        return (
            <li key={link.name}>
                <Link
                    href={link.url === '/profile' ? link.url + `/${session?.user.id}` : link.url}
                    className={`pl-5 py-3 transition cursor-pointer flex items-center gap-3 ${
                        currentRoute.startsWith(link.url)
                            ? 'bg-white bg-opacity-25'
                            : 'hover:bg-opacity-10 hover:bg-white'
                    }`}>
                    <span className='text-xl'>{link.icon()}</span>
                    {link.name}
                </Link>
            </li>
        );
    });

    return (
        <aside className='h-screen w-80 bg-kb-darkblue-300 text-white hidden md:block'>
            <figure className='flex justify-start h-16 w-full relative'>
                <Image
                    src='/images/logo.png'
                    alt='Logo'
                    objectFit='contain'
                    layout='fill'
                    objectPosition='left'
                    className='p-2 pl-3'
                />
            </figure>
            <hr className='opacity-25' />
            <nav className='flex h-[calc(100%-65px)] w-full'>
                <ul className='flex flex-col text-base w-full'>
                    {session?.user && (
                        <>
                            <li>
                                <Link
                                    href='/'
                                    className={`pl-5 py-3 transition cursor-pointer flex items-center gap-3 ${
                                        currentRoute === '/'
                                            ? 'bg-white bg-opacity-25'
                                            : 'hover:bg-opacity-10 hover:bg-white'
                                    }`}>
                                    <span className='text-xl'>
                                        <AiFillHome />
                                    </span>
                                    Home
                                </Link>
                            </li>
                            {sidebarLinks}
                            <li className='mt-auto'>
                                <button
                                    onClick={() =>
                                        signOut({
                                            callbackUrl: '/',
                                        })
                                    }
                                    className='pl-5 py-3 hover:bg-white hover:bg-opacity-25 transition cursor-pointer flex items-center gap-3 w-full'>
                                    <PiSignOutFill className='text-2xl' />
                                    Sign out
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </aside>
    );
}
