import CategoryFilter from "@/components/categories/filter";
import CategoriesList from "@/components/categories/list";
import { TourcategoriesApi } from "@workspace/api/api";



export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const api = new TourcategoriesApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const { locale } = await params;
    const response = await api.tourCategoriesControllerFindAllV1(1, 10);
    const categories = response.data;
    return (
        <div>
            <CategoryFilter categories={categories.data} />
        </div>
    )
}