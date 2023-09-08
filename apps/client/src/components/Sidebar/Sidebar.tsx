'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
    const { data: session } = useSession();

    return (
        <aside className='h-screen w-80 bg-kb-gray-900 text-white'>
            <figure className='w-full flex justify-center p-2'>
                <Image src='/images/logo.webp' alt='Logo' width={200} height={200} />
            </figure>
            <nav>
                <ul className='flex flex-col text-lg'>
                    <li className='pl-5 py-2 hover:bg-white hover:bg-opacity-25 transition cursor-pointer'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='pl-5 py-2 hover:bg-white hover:bg-opacity-25 transition cursor-pointer'>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    <li className='pl-5 py-2 hover:bg-white hover:bg-opacity-25 transition cursor-pointer'>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li className='pl-5 py-2 hover:bg-white hover:bg-opacity-25 transition cursor-pointer'>
                        <Link href='/settings'>Settings</Link>
                    </li>
                    <li className='pl-5 py-2 hover:bg-white hover:bg-opacity-25 transition cursor-pointer'>
                        <button onClick={() => signOut()}>Sign out</button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
