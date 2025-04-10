 
import { TourcategoriesApi } from "@workspace/api/api";
import {Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis} from "@workspace/ui/components/breadcrumb"
 
export default async function BreadcrumbSlot({params}: {params: {id: string}}) {
    // Fetch our cat information from the database
    const api = new TourcategoriesApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const { id } =  await params;
    const response = await api.tourCategoriesControllerFindByIdV1(id);
    const category = response.data;
    return (
        <BreadcrumbList>
            <BreadcrumbItem> 
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{category.name}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    );
}