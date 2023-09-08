'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AccessControl() {
    const { data: session } = useSession();

    if (session && session.user)
        return (
            <div className='flex gap-4 ml-auto'>
                <p className='text-sky-600'>{session.user.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
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
