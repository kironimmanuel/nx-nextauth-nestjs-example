import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { AccessControl } from '../AccessControl';

export default async function AppBar() {
    const session = await getServerSession(options);

    return (
        <header className='flex p-5 shadow-md items-center justify-between w-full h-16'>
            {session?.user && (
                <input type='search' placeholder='Search...' className='bg-gray-200 rounded-md p-2 w-80' />
            )}
            <AccessControl />
        </header>
    );
}
