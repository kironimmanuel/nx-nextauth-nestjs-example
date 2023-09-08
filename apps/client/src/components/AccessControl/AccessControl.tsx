'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function AccessControl() {
    const { data: session } = useSession();

    if (session && session.user)
        return (
            <div className='flex gap-4 items-center'>
                <p className='font-semibold'>Hello, {session.user.name}</p>
                <Image src='/images/profile.webp' width={46} height={46} className='rounded-full' alt='Profile Image' />
            </div>
        );

    return (
        <div className='flex gap-4 ml-auto items-center'>
            <Link href='/api/auth/signin' className='uppercase hover:text-kb-primary font-semibold transition'>
                Login
            </Link>
            <Link
                href='/signup'
                className='uppercase bg-kb-primary text-white py-2 px-4 rounded-md font-semibold transition'>
                Register
            </Link>
        </div>
    );
}
