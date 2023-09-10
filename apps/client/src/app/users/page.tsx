import { User } from '@/models/user';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

export default async function UsersPage() {
    const session = await getServerSession(options);

    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/user');
    const users = res.data;

    const currentUser = users.find((user: User) => user.id === session?.user.id);

    const userList = users.map((user: User) => (
        <div className='p-2 border rounded shadow' key={user.id}>
            <h4 className='font-semibold'>
                {user.name} <span className='text-kb-primary'>{currentUser.id === user.id && '(You)'}</span>
            </h4>
            <h5 className='text-sm text-gray-500'>
                Role: <strong>{user.role}</strong>
            </h5>
            <p className='text-sm text-gray-500'>ID: {user.id}</p>
            <p className='text-sm text-gray-500'>Email: {user.email}</p>
        </div>
    ));

    return (
        <div className='m-5 border rounded shadow overflow-hidden'>
            <h3 className='p-5 font-semibold'>All Users</h3>
            <hr />
            <div className='grid grid-cols-2 p-3 gap-2'>{userList}</div>
        </div>
    );
}
