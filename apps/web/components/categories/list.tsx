import { TourCategory } from "@workspace/api/models";
import { Button } from "@workspace/ui/components/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { ChevronRight } from "@workspace/ui/components/icons";
import Link from "next/link";

export default function CategoriesList({ categories }: { categories: TourCategory[] }) {
    return (
        <div className="grid grid-cols-1 gap-4">
            {categories.map((category) => (
                <Card key={category.id}>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                        <CardAction>
                            <Link href={`/categories/${category.id}`} className="flex items-center gap-2">
                                <span className="text-sm">View</span>   
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>{category.description}</p>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}