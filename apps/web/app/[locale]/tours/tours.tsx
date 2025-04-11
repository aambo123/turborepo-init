"use client"

import TourList from "@/components/tours/list"
import { ToursApi } from "@workspace/api/api"
import { InfinityPaginationTourResponseDto } from "@workspace/api/models"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState, useTransition } from "react"

export default function ToursPage({}){
    const [data,setData] = useState<InfinityPaginationTourResponseDto>()
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams();
  
    const api = new ToursApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL })

    const getData = async ()=>{
        startTransition(async ()=>{
            const result = await api.toursControllerFindAllV1(1,10)
            setData(result.data)
        })
    }

    useEffect(()=>{
        getData()
    },[searchParams])

    return(
        <>
        { isPending ? 
        <p>Loading</p>:
        <TourList data={data}/>
        }
        </>
    )
}