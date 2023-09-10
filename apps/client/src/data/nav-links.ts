import { BiSolidDashboard, BiSolidReport } from 'react-icons/bi';
import { BsBuildingFill, BsFillTicketFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { PiUsersFourFill } from 'react-icons/pi';

export const navLinks = [
    {
        url: '/dashboard',
        name: 'Dashboard',
        icon: BiSolidDashboard,
    },
    {
        url: '/tickets',
        name: 'Tickets',
        icon: BsFillTicketFill,
    },
    {
        url: '/reports',
        name: 'Reports',
        icon: BiSolidReport,
    },
    {
        url: '/departments',
        name: 'Departments',
        icon: BsBuildingFill,
    },
    {
        url: '/users',
        name: 'Users',
        icon: PiUsersFourFill,
    },
    {
        url: '/profile',
        name: 'Profile',
        icon: FaUserAlt,
    },
    {
        url: '/settings',
        name: 'Settings',
        icon: GiSettingsKnobs,
    },
];
