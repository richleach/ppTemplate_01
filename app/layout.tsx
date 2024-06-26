import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "./styles/styles.css";


import SideNav from '@/components/side-nav';
import React from "react";
import ViewPortWidth from "@/components/ViewPortWidth";

//import Header from './header';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Planning Pod",
    description: "Top online event management software for event planners and venues",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={inter.className}>
        {/* <div className="hidden sm:block md:hidden bg-slate-300 w-full widthFormat">
          This div is only visible on small screens. <ViewPortWidth />
      </div>
     <div className="hidden md:block lg:hidden  bg-slate-300 w-full widthFormat">
          This div is only visible on medium screens. <ViewPortWidth />
      </div>
       <div className="hidden lg:block xl:hidden  bg-slate-300 w-full widthFormat">
          This div is only visible on large screens. <ViewPortWidth />
      </div>
     <div className="hidden xl:block 2xl:hidden  bg-slate-300 w-full widthFormat">
          This div is only visible on extra large screens. <ViewPortWidth />
      </div>*/}
        <div className="flex -ml-1">
            <SideNav/>
            <div className="w-full overflow-x-auto">
                <div className="sm:h-[calc(100vh-0px)] overflow-auto ">
                    <div
                        className="w-full flex justify-center mx-auto overflow-y-auto relative">
                        <div className="w-full md:max-w-6xl rounded-3xl bg-white mt-2 ml-2 mr-2 overflow-y-auto"  style={{height: "99dvh"}}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
/*
<div
    className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">*/
