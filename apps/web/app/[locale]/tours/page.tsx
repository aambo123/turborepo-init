import CategoryFilter from "@/components/categories/filter";
import CategoriesList from "@/components/categories/list";
import { TourcategoriesApi } from "@workspace/api/api";
import ToursPage from "./tours";

type SearchParams = {
    category: string[];
    searchWord: string; 
    startDate: string;
    endDate: string;
    status: string;
    page: string;
    limit: string
}

export default async function Page({ params, searchParams }: { params: Promise<{ locale: string }> , searchParams: Promise<SearchParams> }) {
    const api = new TourcategoriesApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const { locale } = await params;
    const response = await api.tourCategoriesControllerFindAllV1(1, 10);
    const categories = response.data;
    return (
        <div className="flex gap-4">
            <CategoryFilter categories={categories.data} />
            <ToursPage/>
        </div>
    )
}