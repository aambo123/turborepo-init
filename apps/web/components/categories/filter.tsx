"use client"
import { TourCategory } from "@workspace/api/models"
import {ScrollArea, ScrollBar} from "@workspace/ui/components/scroll-area"
import {Checkbox} from "@workspace/ui/components/checkbox"
import {Label} from "@workspace/ui/components/label"
import {Button} from "@workspace/ui/components/button"
import { useState } from "react"

export default function CategoryFilter({ categories }: { categories: TourCategory[] }){
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    return (
        <ScrollArea className="w-64 max-h-[600px] whitespace-nowrap rounded-md border">
            <div className="p-4 flex items-center justify-between">Categories {selectedCategories.length > 0 && (
                <a className="p-0 cursor-pointer text-xs" onClick={() => setSelectedCategories([])}>
                    Clear Selection
                </a>
            )}
            </div>
            <div className="flex flex-col w-full">
                {categories.map((category) => (
                    <div key={category.id} className="flex w-full items-center space-x-2 transition-all hover:bg-accent  px-4 py-2">
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
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}