import { TourcategoriesApi } from "@workspace/api/api";

export default async function Page({ params }: { params: Promise<{ locale: string,id: string }> }) {
    const api = new TourcategoriesApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const {locale, id} = await params;
    const category = await api.tourCategoriesControllerFindByIdV1(id);
    return (
        <div className="py-4">
            <h1 className="text-4xl mb-4">{category.data.name}</h1>
            <p className="text-muted-foreground">{category.data.description}</p>
        </div>
    )
}