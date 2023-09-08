import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { options } from '../api/auth/[...nextauth]/options';

type Props = {
    children: React.ReactNode;
};

export default async function DashboardPage(props: Props) {
    const session = await getServerSession(options);

    return (
        <div className=' grid grid-cols-12'>
            <div className='grid-cols-4 border-r shadow h-screen p-2'>
                <Link
                    className='p-3 rounded hover:bg-emerald-600 hover:text-white hover:shadow transition '
                    href={`/dashboard/user/${session?.user.id}`}>
                    User Profile
                </Link>
            </div>
            <div className='col-span-4'>{props.children}</div>
        </div>
    );
}
