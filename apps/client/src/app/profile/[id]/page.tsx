import { options } from '@/app/api/auth/[...nextauth]/options';
import axios from 'axios';
import { getServerSession } from 'next-auth';

interface Props {
    params: {
        id: string;
    };
}

const ProfilePage = async (props: Props) => {
    const session = await getServerSession(options);

    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/user/${props.params.id}`, {
        headers: {
            authorization: `Bearer ${session?.backendTokens.accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const user = res.data;

    return (
        <div className='m-5 border rounded shadow overflow-hidden'>
            <h3 className='p-5 font-semibold'>User Profile</h3>
            <hr />
            <div className='grid grid-cols-2 p-3 gap-2'>
                <p className='p-2 text-slate-400'>ID:</p>
                <p className='p-2 text-slate-950'>{user.id}</p>
                <p className='p-2 text-slate-400'>Name:</p>
                <p className='p-2 text-slate-950'>{user.name}</p>
                <p className='p-2 text-slate-400'>Email:</p>
                <p className='p-2 text-slate-950'>{user.email}</p>
                <p className='p-2 text-slate-400'>Role:</p>
                <p className='p-2 text-slate-950 font-semibold capitalize'>{user.role}</p>
                <p className='p-2 text-slate-400'>Password Hash:</p>
                <p className='p-2 text-slate-950 break-words text-sm'>{user.password}</p>
                <p className='p-2 text-slate-400'>Access Token:</p>
                <p className='p-2 text-slate-950 break-words text-sm'>{session?.backendTokens.accessToken}</p>
                <p className='p-2 text-slate-400'>Refresh Token:</p>
                <p className='p-2 text-slate-950 break-words text-sm'>{session?.backendTokens.refreshToken}</p>
                <p className='p-2 text-slate-400'>Token Expiration:</p>
                <p className='p-2 text-slate-950 break-words text-sm'>{session?.backendTokens.expiresIn}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
