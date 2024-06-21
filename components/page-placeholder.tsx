import React from 'react';
import {Bell, Briefcase, CalendarIcon, Home, Settings, User, ChevronLeft, ChevronRight} from 'lucide-react';

export default function PagePlaceholder({ pageName }: { pageName: string }) {
    return (
        <>
            <div className="flex justify-between items-start pl-4 pr-4 pt-4">
                <div className="text-slate-500"><Home size={16} /></div>
                <div className="tracking-widest" style={{color: "#BCBCBC"}}>PLANNING POD</div>
                <div className="text-slate-600"><ChevronLeft size={16} /><ChevronRight size={16} /></div>
            </div>
            <div className="flex flex-1 py-4 min-h-screen sm:h-fit flex-col space-y-2 px-4">
                <span className="font-bold text-3xl">{pageName}</span>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div
                        className="flex bg-slate-100 p-4 text-slate-600 text-center items-center justify-center w-full h-80">Report
                        w/actions
                    </div>
                    <div
                        className="flex bg-slate-100 p-4 text-slate-600 text-center items-center justify-center w-full h-80">Report
                        w/actions
                    </div>
                    <div
                        className="flex bg-slate-100 p-4 text-slate-600 text-center items-center justify-center w-full h-80">Report
                        w/actions
                    </div>
                    <div
                        className="flex bg-slate-100 p-4 text-slate-600 text-center items-center justify-center w-full h-80">Report
                        w/actions
                    </div>
                </div>

            </div>
        </>
    );
}