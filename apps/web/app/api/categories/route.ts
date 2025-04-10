import { NextRequest, NextResponse } from "next/server";
import { TourcategoriesApi } from "@workspace/api/api";
export async function GET(req: NextRequest) {
    try {
        const api = new TourcategoriesApi({basePath: process.env.NEXT_PUBLIC_API_BACKEND_URL});
        const { searchParams } = new URL(req.url);
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');
        const response = await api.tourCategoriesControllerFindAllV1( Number(page) || 1,  Number(limit) || 10);
        
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        
        console.error("Error fetching tour categories:", error);
        return NextResponse.json({ message: "Error fetching tour categories" }, { status: 500 });
    }

}