import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHandshake, faChartMixedUpCircleDollar, faClipboardCheck, faCalendarDay} from "@fortawesome/pro-solid-svg-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react";

export const NavItems = () => {
    const pathname = usePathname();

    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }


    return [
        {
            name: 'Home',
            href: '/',
            icon:  <FontAwesomeIcon icon={faHouse} size='lg' fixedWidth/>,
            active: pathname === '/',
            position: 'top',
        },
        {
            name: 'Leads & Events',
            href: '/',
            icon: <FontAwesomeIcon icon={faHandshake} size='lg' fixedWidth/>,
            active: isNavItemActive(pathname, '/profile'),
            position: 'top',
        },
        {
            name: 'Financials',
            href: '/',
            icon: <FontAwesomeIcon icon={faChartMixedUpCircleDollar} size='lg' fixedWidth/>,
            active: isNavItemActive(pathname, '/notifications'),
            position: 'top',
        },
        {
            name: 'Productivity',
            href: '/',
            icon: <FontAwesomeIcon icon={faClipboardCheck} size='lg' fixedWidth/>,
            active: isNavItemActive(pathname, '/projects'),
            position: 'top',
        },
        {
            name: 'Calendar',
            href: '/',
            icon: <FontAwesomeIcon icon={faCalendarDay} size='lg' fixedWidth/>,
            active: isNavItemActive(pathname, '/projects'),
            position: 'top',
        },
        {
            name: 'Steve',
            href: '/',
            icon: <Avatar className="-ml-1">
                <AvatarImage src="images/steveHeadShot.jpg" />
                <AvatarFallback>Steve</AvatarFallback>
            </Avatar>
            ,

            active: isNavItemActive(pathname, '/'),
            position: 'bottom',
        },
    ];
};