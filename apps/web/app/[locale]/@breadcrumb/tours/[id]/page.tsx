 
import { TourcategoriesApi, ToursApi } from "@workspace/api/api";
import {Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis} from "@workspace/ui/components/breadcrumb"
 
export default async function BreadcrumbSlot({params}: {params: Promise<{id: string}>}) {
    // Fetch our cat information from the database
    const api = new ToursApi({ basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL });
    const { id } =  await params;
    const response = await api.toursControllerFindByIdV1(id);
    const category = response.data;
    return (
        <BreadcrumbList>
            <BreadcrumbItem> 
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/tours">Tours</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage className="capitalize">{category.title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    );
}