import { InfinityPaginationTourResponseDto, Tour } from "@workspace/api/models";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Heart, StarIcon } from "@workspace/ui/components/icons";
import { Badge } from "@workspace/ui/components/badge";
export default function TourList({ data }: { data: InfinityPaginationTourResponseDto }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.data.map((tour: Tour) => (
                <Card key={tour.id} className="pt-0 transition-all hover:bg-accent cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader className="px-0  rounded-t-md aspect-[16/9] w-full overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                alt="Photo by Drew Beamer"
                                fill
                                className="h-full w-full object-cover"
                            />
                            {tour.onSale && (
                                <Badge className="absolute top-2 left-2" variant="destructive">On Sale</Badge>
                            )}
                            <Badge className="absolute bottom-2 left-2" variant="secondary">{tour.duration}</Badge>
                            <CardAction className="absolute top-2 right-2">
                                <Heart/>
                            </CardAction>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-base/6 text-lg">{tour.title}</CardTitle>
                        <div className="flex flex-col gap-2">
                            <p className="text-muted-foreground line-clamp-1">{tour.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {/* {tour.inclusions?.map((inclusion) => (
                                    <Badge key={inclusion} className="mr-2" variant='secondary'>{inclusion}</Badge>
                                ))} */}
                                <Badge className="mr-2" variant='secondary'>{tour.inclusions?.[0]}</Badge>
                            </div>
                            <p className="flex items-center gap-2 text-sm text-muted-foreground">
                                <StarIcon size={16} fill="#efa808" strokeWidth={0}/>
                                <span className="text-[#efa808]">{tour.rating}</span> {tour.totalBookings}+ booked
                            </p>
                            {tour.onSale ? (
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm text-muted-foreground line-through">{tour.price}</p>
                                    <p className="text-primary font-bold">{tour.discountPrice}</p>
                                </div>
                            ):(
                                <p className="text-primary font-bold">{tour.price}</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
            {data.hasNextPage && (
                <div className="flex justify-center items-center py-4">
                    <Button >Load More</Button>
                </div>
            )}
        </div>
    )
}