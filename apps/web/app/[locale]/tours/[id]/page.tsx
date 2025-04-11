import { ToursApi } from "@workspace/api/api";
import TourDetails from "./tourDetail";

export default async function TourPage({params}:{params: Promise<{id: string}>}){
    const {id} = await params
    const api = new ToursApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL })
    const result = await api.toursControllerFindByIdV1(id)
    return (
        <TourDetails tour={result.data}/>
    )
}