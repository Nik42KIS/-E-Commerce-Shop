'use client'

import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";


function ReviewGrid(){
    const containerRef = useRef<HTMLDivElement | null>(null)

    return(
        <div ref={containerRef}
        className="relative -mx-4 mt-16 grid h-[49rem] msx-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >

        </div>
    )
}

export function Reviews(){
    return (
        <MaxWidthWrapper className="relative max-w-5xl">
            <img className="absolute select-none hidden xl:block -left-32 top-1/3" src="/what-people-are-buying.png" alt="" />

            <ReviewGrid />
        </MaxWidthWrapper>
    )
}