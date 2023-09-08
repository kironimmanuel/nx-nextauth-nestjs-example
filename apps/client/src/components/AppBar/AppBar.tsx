import React from 'react';
import { AccessControl } from '../AccessControl';

export default function AppBar() {
    return (
        <header className='flex p-5 shadow-md items-center justify-between w-full h-16'>
            <input type='search' placeholder='Search...' className='bg-gray-200 rounded-md p-2' />
            <AccessControl />
        </header>
    );
}
