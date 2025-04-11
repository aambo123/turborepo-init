"use client"
import { TourCategory } from "@workspace/api/models";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader } from "@workspace/ui/components/card";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Label } from "@workspace/ui/components/label";
import { Separator } from "@workspace/ui/components/separator";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
const CATEGORY_STORAGE_KEY = 'selectedCategories';

export default function CategoryFilter({ categories }: { categories: TourCategory[] }){
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
    // Initialize selected categories from URL
    useEffect(() => {
      const categoriesFromUrl = searchParams.getAll('category');
      setSelectedCategories(categoriesFromUrl);
    }, [searchParams]);

    useEffect(() => {
        updateURLParams(selectedCategories)
    }, [selectedCategories]);
  
    const updateURLParams = (categories: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('category'); // Remove all existing category params
  
      categories.forEach((category) => {
        params.append('category', category);
      });
  
      router.push(`?${params.toString()}`, { scroll: false });

    };
    
    return (
        <div>
            <Card className="min-w-[200px] gap-4 py-4">
                <CardHeader>Categories
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col w-full">
                        {categories.map((category) => (
                            <div key={category.id} className="flex w-full items-center space-x-2 transition-all hover:bg-accent py-2">
                                <Checkbox id={category.id} 
                                checked={selectedCategories.includes(category.id)}
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setSelectedCategories([...selectedCategories, category.id])
                                    } else {
                                        setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                                    }
                                }}
                                />
                                <Label
                                className="flex-1 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor={category.id}
                                >
                                {category.name}
                                </Label>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="px-4">
                    <Button variant={"outline"} className="w-full" disabled={selectedCategories.length=== 0} onClick={() => setSelectedCategories([])}>Clear Selection</Button>
                </CardFooter>
            </Card>
        </div>
        // <ScrollArea className="w-64 max-h-[600px] whitespace-nowrap rounded-md border">
        //     <div className="p-4 flex items-center justify-between">Categories {selectedCategories.length > 0 && (
        //         <a className="p-0 cursor-pointer text-xs" onClick={() => setSelectedCategories([])}>
        //             Clear Selection
        //         </a>
        //     )}
        //     </div>
        //     <div className="flex flex-col w-full">
        //         {categories.map((category) => (
        //             <div key={category.id} className="flex w-full items-center space-x-2 transition-all hover:bg-accent  px-4 py-2">
        //                 <Checkbox id={category.id} 
        //                 checked={selectedCategories.includes(category.id)}
        //                 onCheckedChange={(checked) => {
        //                     if (checked) {
        //                         setSelectedCategories([...selectedCategories, category.id])
        //                     } else {
        //                         setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
        //                     }
        //                 }}
        //                 />
        //                 <Label
        //                 className="flex-1 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        //                 htmlFor={category.id}
        //                 >
        //                 {category.name}
        //                 </Label>
        //             </div>
        //         ))}
        //     </div>
        //     <ScrollBar orientation="vertical" />
        // </ScrollArea>
    )
}