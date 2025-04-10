import TourList from "@/components/tours/list";
import { ToursApi } from "@workspace/api/api";

export default async function Page({ params }: { params: Promise<{ locale: string, id: string }> }) {
    const { locale, id } = await params;
    const api = new ToursApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const filter= {
        category: {
            id: id,
        }
    }
    const replacer = (key: string, value: any) => (value === null ? undefined : value);
    const filtersString = JSON.stringify(filter, replacer);

    const response = await api.toursControllerFindAllV1(1, 10, filtersString);
    return (
        <>
        <TourList data={response.data}/>
        </>
    )
}