'use client';

import React from "react";
import franchiseList from "@/constants/franchiseList";
import FranchiseCard from "../Cards/franchise";
import { link } from "fs";

export default function ListFranchise() {
    const franchisesListRef = React.useRef<HTMLUListElement>(null);

    const handleScroll = (scrollOffset: number) => {
        if (franchisesListRef.current)
            franchisesListRef.current.scrollLeft += scrollOffset;
    }

    const back = () => handleScroll(-150)

    const next = () => handleScroll(150);

    return (
        <div className='flex items-center justify-center gap-2 mt-10'>
            <div className="flex-shrink-0 bg-white relative text-HIGH_BLUE hover:text-MAIN_HIGH_BLUE" >
                <button onClick={back}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </button>
            </div>
            <ul className="flex flex-grow overflow-x-hidden gap-8" ref={franchisesListRef}>
                {franchiseList.map((franchise) => <li><FranchiseCard {...franchise} /></li>)}
            </ul>
            <div className="flex-shrink-0 text-HIGH_BLUE hover:text-MAIN_HIGH_BLUE">
                <button onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}