'use client';

import { Button } from '@/components/Button';
import { InputBox } from '@/components/InputBox';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { ROLES as roles } from '../../constants/role';

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
            role: 'user',
        });

        if (res.status !== 201) {
            alert(res.statusText);
            return;
        }

        signIn('credentials', {
            email: data.current.email,
            password: data.current.password,
            callbackUrl: '/',
            redirect: true,
        });
    };

    const data = useRef<FormInputs>({
        name: '',
        email: '',
        password: '',
    });

    return (
        <div className='m-5 border rounded shadow overflow-hidden'>
            <h3 className='p-5 font-semibold'>Register</h3>
            <hr />
            <div className='p-5 flex flex-col gap-6'>
                <InputBox
                    autoComplete='off'
                    name='name'
                    labelText='Username'
                    required
                    onChange={e => (data.current.name = e.target.value)}
                    placeholder='Your username'
                />
                <InputBox
                    name='email'
                    labelText='Email'
                    required
                    onChange={e => (data.current.email = e.target.value)}
                    placeholder='Your email'
                />
                <InputBox
                    name='password'
                    labelText='Password'
                    type='password'
                    required
                    onChange={e => (data.current.password = e.target.value)}
                    placeholder='Your password'
                />
                <div>
                    <label className='block text-slate-600  mb-2 text-xs lg:text-sm xl:text-base'>Your Role</label>
                    <select
                        name='role'
                        id='role'
                        className='capitalize border rounded-md disabled:border-slate-100 w-full block outline-none py-3 px-1 transition-all text-xs lg:text-sm 
                        xl:text-base bg-slate-50 focus:shadow focus:shadow-blue-500'>
                        {Object.values(roles).map(role => {
                            return (
                                <option key={role} value={role} className='capitalize'>
                                    {role}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='flex justify-end items-center gap-3'>
                    <Link href='/'>Cancel</Link>
                    <Button onClick={register} variant='success'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
