'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridRound2Plus, faBookmark, faChevronRight, faChevronDown, faMagnifyingGlass, faHouse, faHandshake, faClipboardCheck, faChartMixedUpCircleDollar, faCalendarDay, faArrowUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";
import { Input } from "@/components/ui/input"

import { NavItems } from '@/app/config';
import { cn } from '@/lib/utils';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";

export default function SideNav() {

    const navItems = NavItems();

    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
    const [isLnaExpanded, setIsLnaExpanded ] = useState(false);
    const [isFinExpanded, setIsFinExpanded ] = useState(false);
    const [isProdExpanded, setIsProdExpanded ] = useState(false);
    const [isQaExpanded, setIsQaExpanded ] = useState(false);
    const [isBookExpanded, setIsBookExpanded ] = useState(false);
    const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

    const handleCalendarClick = () => {
        setIsCalendarExpanded(!isCalendarExpanded);
    };
    const handleBookClick = () => {
        setIsBookExpanded(!isBookExpanded);
    };
    const handleQaClick = () => {
        setIsQaExpanded(!isQaExpanded);
    };
    const handleProdClick = () => {
        setIsProdExpanded(!isProdExpanded);
    };
    const handleLnaClick = () => {
        setIsLnaExpanded(!isLnaExpanded);
    };
    const handleFinancialsClick = () => {
        setIsFinExpanded(!isFinExpanded);
    };

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
                                            <input type="text" placeholder="Search for anything...."
                                                   className="bg-transparent placeholder:text-white/70  outline:none focus:outline-none  -pl-4"/>
                                            {/*<Input type="text" placeholder="Search for anything...."
                                                   className="h-5 border-0 text-sm placeholder:text-white/70 focus-visible:none" style={{
                                                backgroundColor: "#c9a4b4",
                                                color: "efe4e9",
                                                paddingLeft: "-4px"
                                            }}/>*/}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                    {/*REDESIGN QUICK ACTIONS*/}
                    <div className="mt-1 rounded-md flex items-center justify-center bg-transparent">
                        <Link href="/" className="w-full">
                            <div
                                className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                <FontAwesomeIcon icon={faGridRound2Plus} style={{
                                    color: "#71857a",
                                    fontSize: "21px",
                                    paddingTop: "14px",
                                    paddingLeft: "14px"
                                }}/>
                                <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                     style={{paddingBottom: "14px"}}>
                                    <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                        <div className="font-semibold"
                                             onClick={handleQaClick} style={{paddingLeft: "17px"}}>Quick Actions
                                        </div>
                                        <div className="ml-auto pr-2">
                                            <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={!isQaExpanded ? (" visible ") : (" invisible ")}
                                                             onClick={handleQaClick}/>
                                            <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={isQaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                             onClick={handleQaClick}/>
                                        </div>
                                    </div>

                                    <div>
                                        {!isSidebarExpanded ? (
                                            isQaExpanded ? (
                                                <div className="border-l border-gray-400 visible mt-3" style={{marginLeft: "-9px"}}>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                        <div className="w-3/5">Invoices</div>
                                                        <div className="w/1/5">33</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                        <div className="w-3/5">Proposals</div>
                                                        <div className="w/1/5 ml-auto">22</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}>

                                                </div>
                                            )
                                        ) : (
                                            isQaExpanded ? (
                                                <div className="visible pt-1">
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5" style={{paddingLeft: "19px"}}>Invoices
                                                        </div>
                                                        <div className="w/1/5"
                                                             style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5" style={{paddingLeft: "19px"}}>Proposals
                                                        </div>
                                                        <div className="w/1/5"
                                                             style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <> </>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    {/*QUICK ACTIONS*/}
                    {/*<div className="mt-1 rounded-md flex items-center justify-center bg-transparent">
                        <Link href="/" className="w-full">
                            <div
                                className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                <FontAwesomeIcon icon={faGridRound2Plus} size='lg'
                                                 style={{color: "#71857a", paddingLeft: "5px", paddingTop: "2px"}}/>
                                <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>
                                    <div className="flex justify-between w-full">
                                        <div className="font-semibold pl-4"
                                             onClick={handleQaClick}>Quick Actions
                                        </div>
                                        <div className="ml-auto pr-2">
                                            <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={!isQaExpanded ? (" visible ") : (" invisible ")}
                                                             onClick={handleQaClick}/>
                                            <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={isQaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                             onClick={handleQaClick}/>
                                        </div>
                                    </div>

                                    <div>
                                        {!isSidebarExpanded ? (
                                            isQaExpanded ? (
                                                <div className="border-l border-gray-400 visible -ml-3 mt-3">
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                        <div className="w-3/5">Invoices</div>
                                                        <div className="w/1/5">33</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                        <div className="w-3/5">Proposals</div>
                                                        <div className="w/1/5 ml-auto">22</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}>

                                                </div>
                                            )
                                        ) : (
                                            isQaExpanded ? (
                                                <div className="visible pt-1">
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5 pl-5">Invoices</div>
                                                        <div className="w/1/5 pl-1">
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5 pl-5">Proposals</div>
                                                        <div className="w/1/5 pl-1">
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <> </>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>*/}

                    {/*MAIN STACK*/}
                    {/*HOME*/}
                    <div className="mt-1 relative pb-0 rounded-md" key="21">
                        {/*<div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-center rounded-t-md duration-0 mx-auto bg-white/60 p-3 m-0 w-full relative whitespace-nowrap">
                                    <div>
                                        <FontAwesomeIcon icon={faHouse} size='lg'
                                                         style={{color: "#71857a", paddingLeft: "1px"}} fixedWidth/>
                                    </div>

                                    <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                        <span className="font-semibold pl-4">Home</span>
                                    </div>
                                </div>

                            </Link>
                        </div>*/}

                        {/*REDESIGN - HOME*/}
                        <div className="mt-0 rounded-t-md flex items-center justify-center bg-transparent">
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-t-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faHouse} style={{
                                        color: "#71857a",
                                        fontSize: "19px",
                                        paddingTop: "14px",
                                        paddingLeft: "16px"
                                    }} />
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold pl-4">Home</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/*LEADS & EVENTS*/}
                        {/*<div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faHandshake} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "0px"}} fixedWidth
                                                     border/>
                                    <div
                                        className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                        <div className="flex justify-between w-full">
                                            <div className="font-semibold pl-2"
                                                 onClick={handleLnaClick}>Leads & Events
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isLnaExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleLnaClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isLnaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleLnaClick}/>
                                            </div>
                                        </div>


                                        <div>
                                            {!isSidebarExpanded ? (
                                                isLnaExpanded ? (
                                                    <div className="border-l border-gray-400 visible -ml-5 mt-3">
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                )
                                            ) : (
                                                isLnaExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-3">Invoices</div>
                                                            <div className="w/1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">99
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-3">Proposals</div>
                                                            <div className="w/1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">51
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>


                                    </div>
                                </div>

                            </Link>
                        </div>*/}


                        {/*REDESIGN - LEADS AND EVENTS*/}
                        <div className="mt-0 flex items-center justify-center bg-transparent">
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faHandshake} style={{
                                        color: "#71857a",
                                        fontSize: "19px",
                                        paddingTop: "14px",
                                        paddingLeft: "14px"
                                    }}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold pl-4"
                                                 onClick={handleLnaClick}>Leads & Events
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isLnaExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleLnaClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isLnaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleLnaClick}/>
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isLnaExpanded ? (
                                                    <div className="border-l border-gray-400 visible -ml-3 mt-3">
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isLnaExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "17px"}}>Invoices
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "17px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/*FINANCIALS*/}
                        {/*<div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faChartMixedUpCircleDollar} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "3px"}}/>
                                    <div
                                        className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                        <div className="flex justify-between w-full">
                                            <div className="font-semibold pl-4"
                                                 onClick={handleFinancialsClick}>Financials
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isFinExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleFinancialsClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isFinExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleFinancialsClick}/>
                                            </div>
                                        </div>


                                        <div className="pl-1">
                                            {!isSidebarExpanded ? (
                                                isFinExpanded ? (

                                                    <div className="border-l border-gray-400 visible -ml-4 mt-3">
                                                        <div className="flex">
                                                            <div className="pl-4 mr-4 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5 -ml-2">Invoices</div>
                                                            <div className="w-1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="pl-4 mr-4 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5 -ml-2">Proposals</div>
                                                            <div className="w-1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                )
                                            ) : (
                                                isFinExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-5">Invoices</div>
                                                            <div className="w-1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">39
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-5">Proposals</div>
                                                            <div className="w-1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">17
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>


                                    </div>
                                </div>

                            </Link>
                        </div>*/}

                        {/*REDESIGN - FINANCIALS*/}
                        <div className="mt-0 flex items-center justify-center bg-transparent">
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faChartMixedUpCircleDollar} style={{
                                        color: "#71857a",
                                        fontSize: "21px",
                                        paddingTop: "14px",
                                        paddingLeft: "14px"
                                    }} />
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold pl-4"
                                                 onClick={handleFinancialsClick}>Financials
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isFinExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleFinancialsClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isFinExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleFinancialsClick}/>
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isFinExpanded ? (
                                                    <div className="border-l border-gray-400 visible -ml-3 mt-3">
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isFinExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "17px"}}>Invoices
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "17px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/*PRODUCTIVITY*/}
                        {/*<div className="flex items-center justify-center bg-transparent">
                            <Link
                                href="/"
                                className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faClipboardCheck} size='lg'
                                                     style={{color: "#71857a", paddingLeft: "6px"}}/>
                                    <div
                                        className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                        <div className="flex justify-between w-full">
                                            <div className="font-semibold pl-5"
                                                 onClick={handleProdClick}>Productivity
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isProdExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleProdClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isProdExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleProdClick}/>
                                            </div>
                                        </div>


                                        <div>
                                            {!isSidebarExpanded ? (
                                                isProdExpanded ? (
                                                    <div className="border-l border-gray-400 visible -ml-2 mt-3">
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>
                                                        <span>&nbsp;</span>
                                                    </div>
                                                )
                                            ) : (
                                                isProdExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-5">Invoices</div>
                                                            <div className="w/1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">23
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5 pl-5">Proposals</div>
                                                            <div className="w/1/5 pl-1">
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">18
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>


                                    </div>
                                </div>

                            </Link>
                        </div>*/}

                        {/*REDESIGN - PRODUCTIVITY*/}
                        <div className="mt-0 flex items-center justify-center bg-transparent">
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faClipboardCheck} style={{
                                        color: "#71857a",
                                        fontSize: "21px",
                                        paddingTop: "14px",
                                        paddingLeft: "18px"
                                    }} />
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold"
                                                 onClick={handleProdClick} style={{paddingLeft: "19px"}}>Productivity
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isProdExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleProdClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isProdExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleProdClick}/>
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isProdExpanded ? (
                                                    <div className="border-l border-gray-400 visible -ml-2 mt-3">
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isProdExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "20px"}}>Invoices
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "20px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>
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
                                    className="flex flex-row items-start rounded-b-md duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faCalendarDay} size='lg'
                                                     style={{
                                                         color: "#71857a",
                                                         paddingLeft: "6px",
                                                         paddingTop: "2px"
                                                     }}/>
                                    <div
                                        className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                        <div className="flex justify-between w-full">
                                            <div className="font-semibold"
                                                 onClick={handleCalendarClick} style={{paddingLeft: "18px"}}>Calendar
                                            </div>
                                            <div className="ml-auto pr-5">
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 onClick={handleCalendarClick}/>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </Link>
                        </div>

                    </div>

                    {/*BOOKMARKS*/}
                    {/*<div className="mt-1 rounded-md flex items-center justify-center bg-transparent">
                        <Link
                            href="/"
                            className="w-full">
                            <div
                                className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap">
                                <FontAwesomeIcon icon={faBookmark} size='lg'
                                                 style={{color: "#c80000", paddingLeft: "6px", paddingTop: "2px"}}/>
                                <div
                                    className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                    <div className="flex justify-between w-full">
                                        <div className="font-semibold pl-5"
                                             onClick={handleBookClick}>Bookmarks
                                        </div>
                                        <div className="ml-auto pr-2">
                                            <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={!isBookExpanded ? (" visible ") : (" invisible ")}
                                                             onClick={handleBookClick}/>
                                            <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={isBookExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                             onClick={handleBookClick}/>
                                        </div>
                                    </div>


                                    <div>
                                        {!isSidebarExpanded ? (
                                            isBookExpanded ? (
                                                <div className="border-l border-gray-400 visible -ml-2 mt-3">
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                        <div className="w-3/5">Invoices</div>
                                                        <div className="w/1/5">33</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-1/5">&nbsp;</div>
                                                        <div className="w-3/5">Proposals</div>
                                                        <div className="w/1/5 ml-auto">22</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}>

                                                </div>
                                            )
                                        ) : (
                                            isBookExpanded ? (
                                                <div className="visible pt-1">
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5 pl-5">Invoices</div>
                                                        <div className="w/1/5 pl-1">
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5 pl-5">Proposals</div>
                                                        <div className="w/1/5 pl-1">
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <> </>
                                            )
                                        )}
                                    </div>


                                </div>
                            </div>

                        </Link>
                    </div>*/}

                    {/*REDESIGN - BOOKMARKS*/}
                    <div className="mt-1 rounded-md flex items-center justify-center bg-transparent">
                        <Link href="/" className="w-full">
                            <div
                                className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                <FontAwesomeIcon icon={faBookmark} style={{
                                    color: "#71857a",
                                    fontSize: "23px",
                                    paddingTop: "14px",
                                    paddingLeft: "18px"
                                }}  />
                                <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                     style={{paddingBottom: "14px"}}>
                                    <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                        <div className="font-semibold"
                                             onClick={handleBookClick} style={{paddingLeft:"19px"}}>Bookmarks
                                        </div>
                                        <div className="ml-auto pr-2">
                                            <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={!isBookExpanded ? (" visible ") : (" invisible ")}
                                                             onClick={handleBookClick}/>
                                            <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                             style={{color: "#71857a"}}
                                                             className={isBookExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                             onClick={handleBookClick}/>
                                        </div>
                                    </div>

                                    <div>
                                        {!isSidebarExpanded ? (
                                            isBookExpanded ? (
                                                <div className="border-l border-gray-400 visible mt-3" style={{marginLeft: "-9px"}}>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                        <div className="w-3/5">Invoices</div>
                                                        <div className="w/1/5">33</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div
                                                            className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                        <div className="w-3/5">Proposals</div>
                                                        <div className="w/1/5 ml-auto">22</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}>

                                                </div>
                                            )
                                        ) : (
                                            isBookExpanded ? (
                                                <div className="visible pt-1">
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5" style={{paddingLeft: "19px"}}>Invoices
                                                        </div>
                                                        <div className="w/1/5"
                                                             style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-1">
                                                        <div className="w-4/5" style={{paddingLeft: "19px"}}>Proposals
                                                        </div>
                                                        <div className="w/1/5"
                                                             style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                            <div
                                                                className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <> </>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Bottom */}

                    <div className="sticky bottom-0 flex mb-2 mt-auto rounded-md bg-white/60 h-14">
                        <div className="mx-auto w-full flex whitespace-nowrap h-14">
                            <img src="/images/steveHeadShot.jpg" height={52} width={52} alt="Steve"
                                 className="rounded-md p-1"/>
                        </div>
                        {!isSidebarExpanded ? (
                            <> </>
                        ) : (
                            <div className="my-auto flex text-left">
                                <div className="my-auto justify-items-start mr-36">Steve</div>
                            </div>
                        )
                        }
                    </div>

                </aside>
            </div>
        </div>
    );
}

/*


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
                    <div
                        className="relative ml-4 font-base text-sm flex flex-row items-center space-x-2 rounded-md duration-100">
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
                    <div
                        className="relative font-base text-sm flex flex-row items-center space-x-2 duration-100 mx-auto"
                        style={{paddingTop: "5px"}}>
                        {icon}
                    </div>
                </Link>

            )}
        </>
    );
};

*/
