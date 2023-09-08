'use client';

import { Button } from '@/components/Button';
import { InputBox } from '@/components/InputBox';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useRef } from 'react';

interface FormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignUpPage() {
    const register = async () => {
        const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
            name: data.current.name,
            email: data.current.email,
            password: data.current.password,
        });

        if (res.status !== 201) {
            alert(res.statusText);
            return;
        }

        signIn();
    };

    const data = useRef<FormInputs>({
        name: '',
        email: '',
        password: '',
    });

    return (
        <div className='m-2 border rounded overflow-hidden shadow'>
            <div className='p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600'>Sign up</div>
            <div className='p-2 flex flex-col gap-6'>
                <InputBox
                    autoComplete='off'
                    name='name'
                    labelText='Name'
                    required
                    onChange={e => (data.current.name = e.target.value)}
                />
                <InputBox
                    name='email'
                    labelText='Email'
                    required
                    onChange={e => (data.current.email = e.target.value)}
                />
                <InputBox
                    name='password'
                    labelText='password'
                    type='password'
                    required
                    onChange={e => (data.current.password = e.target.value)}
                />
                <div className='flex justify-center items-center gap-2'>
                    <Button onClick={register}>Submit</Button>
                    <Link href='/'>Cancel</Link>
                </div>
            </div>
        </div>
    );
}
