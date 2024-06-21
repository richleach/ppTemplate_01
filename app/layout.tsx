import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/styles.css";


import SideNav from '@/components/side-nav';

//import Header from './header';

const inter = Inter({ subsets: ["latin"] });

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
      <div className="flex -ml-1">
        <SideNav/>
        <div className="w-full overflow-x-auto">
          <div className="sm:h-[calc(100vh-1px)] overflow-auto ">
            <div
                className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
              <div className="w-full md:max-w-6xl rounded-3xl bg-white m-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
      </body>
      </html>
);
}
