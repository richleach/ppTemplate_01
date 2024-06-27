'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';

import {
    Bookmark,
    Search
} from 'lucide-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridRound2Plus, faBookmark, faChevronRight, faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons";
import { Input } from "@/components/ui/input"

import { NavItems } from '@/app/config';
import { cn } from '@/lib/utils';

export default function SideNav() {

    const navItems = NavItems();

    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

    // Toggle the sidebar state
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const handleMouseOver = (event:any) => {
        setIsSidebarExpanded(true);
    };

    const handleMouseOut = (event:any) => {
        setIsSidebarExpanded(false);
    };



    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div
                className={cn(
                    isSidebarExpanded ? 'w-[262px]' : 'w-[52px]',
                    'transition-all duration-100 ease-in-out transform hidden sm:flex h-full  bg-transparent ml-3',
                )}  style={{background: "linearGradient(135deg, rgba(91,177,148,1) 0%, rgba(151,150,240,1) 100%)"}}
            >
                <aside className="flex h-full flex-col w-full break-words  overflow-x-hidden columns-1 bg-transparent">
                    {/* Top */}
                    {/*left nav button container*/}
                    {/*Search*/}
                    <div className="mt-2 relative pb-0 rounded-md" key="56">
                        <div className="flex flex-col bg-transparent">
                            {isSidebarExpanded ? (
                                <Link
                                    href="/"
                                    className={`h-full relative flex items-center whitespace-nowrap rounded-md  verticalMenuFormat  ${
                                        'font-base text-sm shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md'
                                    }`}
                                >
                                    <div
                                        className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100 text-white/70 bg-neutral-800/20 w-full">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                                        <Input type="text" placeholder="Search for anything...." className="h-6 text-zinc-600 border-0" />
                                    </div>
                                </Link>
                            ) : (

                                <Link
                                    href="/"
                                    className={`h-full relative flex items-center whitespace-nowrap rounded-md verticalMenuFormat ${
                                        'font-base text-sm  bg-neutral-800/20 text-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md'
                                    }`}
                                >
                                    <div
                                        className="relative font-base text-sm flex flex-row items-center space-x-2 duration-100 mx-auto pb-2 pt-2 rounded-md text-white/70 ">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/*Quick Actions*/}
                    <div className="mt-1 relative pb-2 rounded-md" key="55">
                        <div className="flex flex-col bg-transparent">
                            {isSidebarExpanded ? (
                                <Link
                                    href="/"
                                    className={`h-full relative flex items-center whitespace-nowrap rounded-md -mb-1 verticalMenuFormat  ${
                                        'font-base text-sm shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
                                    }`}
                                >
                                    <div
                                        className="w-full relative font-base text-sm py-1.5  px-4 pt-4 pb-4  flex flex-row items-center space-x-2 rounded-md duration-0 bg-white/60">
                                        <span style={{color: "#71857a", paddingLeft: "10px"}}>
                                            <FontAwesomeIcon icon={faGridRound2Plus} size='xl'/></span>
                                        <span className="font-semibold">Quick Actions</span>
                                    </div>
                                </Link>
                                ) : (

                                <Link
                                    href="/"
                                    className={`h-full relative flex items-center whitespace-nowrap rounded-md -mb-1 verticalMenuFormat ${
                                        'font-base text-sm  bg-white/60 text-neutral-500 dark:bg-neutral-800 dark:text-white rounded-md -mb-1'
                                    }`}
                                >
                                    <div
                                        className="relative font-base text-sm flex flex-row items-center space-x-2 duration-0 mx-auto  pb-4 pt-4 rounded-md">
                                        {/*<FontAwesomeIcon icon={faThumbsUp} />*/}
                                        <FontAwesomeIcon icon={faGridRound2Plus} size='xl' transform="left-1" className="pt-0.5"/>
                                    </div>
                                </Link>

                            )}
                        </div>
                    </div>

                    {/*the dynamic part of the menu here*/}
                    <div className=" relative pb-1 rounded-md" key="59">
                        <div className="flex flex-col bg-transparent" key="60">

                            {navItems.map((item, idx) => {
                                if (item.position === 'top') {
                                    return (
                                            <div key={idx} className="bg-white/60 sideNavItem">
                                                <div className={`${isSidebarExpanded ? 'flex' : ''}`}>
                                                    <SideNavItem
                                                        label={item.name}
                                                        icon={item.icon}
                                                        path={item.href}
                                                        active={item.active}
                                                        isSidebarExpanded={isSidebarExpanded}
                                                    />
                                                    {isSidebarExpanded &&
                                                    <span style={{marginLeft: "auto", color:"#71857a", paddingRight:"10px"}}><FontAwesomeIcon icon={faChevronRight} size='sm' transform="shrink-3"/></span>
                                                    }
                                                </div>
                                            </div>
                                    );
                                }
                            })}

                        </div>
                    </div>

                    {/*Bookmarks*/}
                    <div className="relative pb-0 rounded-md" key="57">
                        <div className="flex flex-col bg-transparent">
                            {isSidebarExpanded ? (
                                <>
                                    <Link
                                        href="/"
                                        className={`h-full relative flex items-center whitespace-nowrap rounded-md  verticalMenuFormat  ${
                                            'font-base text-sm shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
                                        }`}
                                    >
                                        <div
                                            className="w-full relative font-base text-sm py-1.5 px-4 pt-3 pb-4 pl-6 flex flex-row items-center space-x-2 rounded-t-md duration-100 bg-white/60 p-3">
                                            <FontAwesomeIcon icon={faBookmark} size='lg' className="text-red-700 pl-1"/>
                                            <span className="text-zinc-950 font-semibold pl-1">Bookmarks</span>
                                        </div>
                                    </Link>
                                    <div
                                        className="w-full relative font-base text-sm py-1.5 px-4  pb-4 pl-6 flex flex-row items-center space-x-2 duration-100 bg-white/60 p-3">
                                            <div className="pl-7">Upcoming Events</div>
                                            <div className="rounded-md text-gray-700 bg-gray-200 pl-2 pr-2" style={{border: "thin solid silver"}}>93</div>
                                    </div>
                                </>

                            ) : (

                                <Link
                                    href="/"
                                    className={`h-full relative flex items-center whitespace-nowrap verticalMenuFormat ${
                                        'font-base text-sm  bg-white/60 text-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md'
                                    }`}
                                >
                                <div
                                        className="relative font-base text-sm flex flex-row items-center space-x-2 duration-100 mx-auto  pb-4 pt-4 rounded-md text-red-700 bg-true-gray-900/20">
                                        <FontAwesomeIcon icon={faBookmark} size='lg' className="text-red-700" />
                                    </div>
                                </Link>

                            )}
                        </div>
                    </div>









                    {/* Bottom */}
                    <div
                        className="sticky bottom-0  mt-auto whitespace-nowrap mb-2 transition duration-200 block rounded-md  bg-white/60" key="58">
                        {navItems.map((item, idx) => {
                            if (item.position === 'bottom') {
                                return (
                                    <Fragment key={idx}>
                                        <div className="space-y-1">
                                            <SideNavItem
                                                label={item.name}
                                                icon={item.icon}
                                                path={item.href}
                                                active={item.active}
                                                isSidebarExpanded={isSidebarExpanded}
                                            />
                                        </div>
                                    </Fragment>
                                );
                            }
                        })}
                    </div>
                </aside>
                {/* <div className="mt-[calc(calc(90vh)-40px)] relative">
                    <button
                        type="button"
                        className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                        onClick={toggleSidebar}
                    >
                        {isSidebarExpanded ? (
                            <ChevronLeft size={16} />
                        ) : (
                            <ChevronRight size={16} />
                        )}
                    </button>
                </div>*/}
            </div>
        </div>
    );
}

export const SideNavItem: React.FC<{
    label: string;
    icon: any;
    path: string;
    active: boolean;
    isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
    return (
        <>
            {isSidebarExpanded ? (
                <Link
                    href={path}
                    className={`h-full relative flex items-center whitespace-nowrap rounded-md  verticalMenuFormat  ${
                        active
                            ? 'font-base text-sm dark:bg-neutral-800 dark:text-white'
                            : ' text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                    }`}
                >
                    <div className="relative ml-4 font-base text-sm flex flex-row items-center space-x-2 rounded-md duration-100">
                        {icon}
                        <span className="text-zinc-950">{label}</span>
                    </div>
                </Link>
            ) : (

                <Link
                    href={path}
                    className={`w-full h-full relative flex items-center whitespace-nowrap verticalMenuFormat ${
                        active
                            ? ''
                            : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                    }`}
                >
                    <div className="relative font-base text-sm pt-1.5 flex flex-row items-center space-x-2 duration-100 mx-auto">
                        {icon}
                    </div>
                </Link>

            )}
        </>
    );
};