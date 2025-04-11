"use client"

import { Tour } from "@workspace/api/models";

export default function TourDetails({tour}:{tour:Tour}){
    return (
        <>
        <h1 className="text-3xl">
            {tour.title}
        </h1>
        </>
    )
}