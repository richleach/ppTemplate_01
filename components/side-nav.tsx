'use client';

import { Fragment, useEffect, useState } from 'react';

import Link from 'next/link';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { NavItems } from '@/app/config';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SideNav() {
    const navItems = NavItems();

    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    // Toggle the sidebar state
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div>
            <div
                className={cn(
                    isSidebarExpanded ? 'w-[262px]' : 'w-[52px]',
                    'transition-all duration-300 ease-in-out transform hidden sm:flex h-full  bg-transparent ml-3',
                )}  style={{background: "linearGradient(135deg, rgba(91,177,148,1) 0%, rgba(151,150,240,1) 100%)"}}
            >
                <aside className="flex h-full flex-col w-full break-words  overflow-x-hidden columns-1 bg-transparent">
                    {/* Top */}
                    {/*left nav button container*/}
                    {/*<div className="bg-white/60 mt-6 rounded-md w-[52px]" style={{border: "thin solid red"}}>*/}
                        <div className="mt-4 relative pb-2 rounded-md bg-white/60">
                            <div className="flex flex-col space-y-1 bg-transparent">
                                {navItems.map((item, idx) => {
                                    if (item.position === 'top') {
                                        return (
                                            <div key={idx} className="bg-accent">
                                                <div>
                                                    <SideNavItem
                                                        label={item.name}
                                                        icon={item.icon}
                                                        path={item.href}
                                                        active={item.active}
                                                        isSidebarExpanded={isSidebarExpanded}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        {/*</div>*/}
                    </div>
                    {/* Bottom */}
                    <div className="sticky bottom-0  mt-auto whitespace-nowrap mb-4 transition duration-200 block rounded-md  bg-white/60">
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
                <div className="mt-[calc(calc(90vh)-40px)] relative">
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
                </div>
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
                    className={`h-full relative flex items-center whitespace-nowrap rounded-md -mb-1 ${
                        active
                            ? 'font-base text-sm bg-transparent shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
                            : 'hover:bg-neutral-200  hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                    }`}
                >
                    <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                        {icon}
                        <span>{label}</span>
                    </div>
                </Link>
            ) : (
                <TooltipProvider delayDuration={70}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href={path}
                                className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                                    active
                                        ? 'font-base text-sm  bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                                        : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                                }`}
                            >
                                <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                                    {icon}
                                </div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            side="left"
                            className="px-3 py-1.5 text-xs"
                            sideOffset={10}
                        >
                            <span>{label}</span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </>
    );
};