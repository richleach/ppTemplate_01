import { usePathname } from 'next/navigation';


import {Bell, Briefcase, CalendarIcon, Home, Settings, User} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const NavItems = () => {
    const pathname = usePathname();

    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }

    return [
        {
            name: 'Home',
            href: '/',
            icon: <Home size={20} />,
            active: pathname === '/',
            position: 'top',
        },
        {
            name: 'Leads & Events',
            href: '/',
            icon: <User size={20} />,
            active: isNavItemActive(pathname, '/profile'),
            position: 'top',
        },
        {
            name: 'Financials',
            href: '/',
            icon: <Bell size={20} />,
            active: isNavItemActive(pathname, '/notifications'),
            position: 'top',
        },
        {
            name: 'Productivity',
            href: '/',
            icon: <Briefcase size={20} />,
            active: isNavItemActive(pathname, '/projects'),
            position: 'top',
        },
        {
            name: 'Calendar',
            href: '/',
            icon: <CalendarIcon size={20} />,
            active: isNavItemActive(pathname, '/projects'),
            position: 'top',
        },
        {
            name: 'Steve',
            href: '/',
            icon: <Avatar className="-ml-2">
                <AvatarImage src="images/steveHeadShot.jpg" />
                <AvatarFallback>Steve</AvatarFallback>
            </Avatar>
            ,

            active: isNavItemActive(pathname, '/'),
            position: 'bottom',
        },
    ];
};