'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridRound2Plus, faBookmark, faChevronRight, faMagnifyingGlass, faHouse, faHandshake, faClipboardCheck, faChartMixedUpCircleDollar, faCalendarDay } from "@fortawesome/pro-solid-svg-icons";
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


                    {/*new left nav*/}
                    {/*SEARCH*/}
                    <div className="mt-2 relative pb-0 rounded-md" key="40">
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center rounded-md duration-0 mx-auto bg-neutral-800/20 text-white/70 p-3 m-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className="text-white/70"
                                                     style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <div className="pl-3">
                                        <Input type="text" placeholder="Search for anything...."
                                               className="h-5 border-0 text-sm placeholder:text-white/70" style={{backgroundColor:"#c9a4b4", color: "efe4e9", paddingLeft:"-4px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/*QUICK ACTIONS*/}
                    <div className="mt-1 relative pb-0 rounded-md" key="20">
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 p-3 m-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faGridRound2Plus} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-5">Quick Actions</span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    </div>

                    {/*MAIN STACK*/}
                    {/*HOME*/}
                    <div className="mt-1 relative pb-0 rounded-md" key="21">
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center rounded-t-md duration-0 mx-auto bg-white/60 p-3 m-0 w-full relative whitespace-nowrap">
                                    <div>
                                        <FontAwesomeIcon icon={faHouse} size='lg'
                                                         style={{color: "#71857a", paddingLeft: "3px"}}/>
                                    </div>

                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-4">Home</span>
                                    </div>
                                </div>

                            </Link>
                        </div>

                        {/*LEADS & EVENTS*/}
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faHandshake} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "2px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-4">Leads & Events</span>
                                    </div>
                                </div>

                            </Link>
                        </div>

                        {/*FINANCIALS*/}
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faChartMixedUpCircleDollar} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "3px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top ") : (" invisible ")}>
                                        <span className="font-semibold pl-4">Financials</span><br/>
                                        {isSidebarExpanded &&
                                            <>
                                                <span className="pl-4">Proposals</span><br/>
                                                <span className="pl-4">Invoices</span><br/>
                                                <span className="pl-4">Proposals</span><br/>
                                                <span className="pl-4">Invoices</span><br/>
                                                <span className="pl-4">Proposals</span><br/>
                                                <span className="pl-4">Invoices</span><br/>
                                            </>
                                        }


                                    </div>
                                </div>

                            </Link>
                        </div>

                        {/*PRODUCTIVITY*/}
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faClipboardCheck} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "6px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-5">Productivity</span>
                                    </div>
                                </div>

                            </Link>
                        </div>

                        {/*CALENDAR*/}
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center rounded-b-md duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faCalendarDay} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "5px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-5">Calendar</span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    </div>

                    {/*BOOKMARKS*/}
                    <div className="mt-1 relative pb-0 rounded-md" key="24">
                        <div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-md duration-0 content-start bg-white/60 p-3 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faBookmark} size='lg'
                                                     style={{color: "#c80000", paddingLeft: "5px", paddingTop:"2px"}}/>
                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-6">Bookmarks</span><br />
                                        {isSidebarExpanded &&
                                            <>
                                                <span className="pl-4">Upcoming Events</span><br/>
                                                <span className="pl-4">Proposals Due</span><br/>
                                                <span className="pl-4">Invoices Due</span><br/>

                                            </>
                                        }
                                    </div>

                                </div>

                            </Link>
                        </div>
                    </div>




                    {/* Bottom */}
                    <div
                        className="sticky bottom-0  mt-auto whitespace-nowrap mb-2 transition duration-200 block rounded-md  bg-white/60"
                        key="58">
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
}> = ({label, icon, path, active, isSidebarExpanded}) => {
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
                    <div className="relative font-base text-sm flex flex-row items-center space-x-2 duration-100 mx-auto" style={{paddingTop:"5px"}}>
                        {icon}
                    </div>
                </Link>

            )}
        </>
    );
};