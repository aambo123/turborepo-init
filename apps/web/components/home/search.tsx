"use client"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { CircleDollarSign, Headset, ShieldCheck, Star } from "@workspace/ui/components/icons"
import { Input } from "@workspace/ui/components/input"


export default function HomeSearch(){
    return (
        <div className="py-[200px] flex flex-col items-center">
            <h1 className="text-6xl ">Find Your Next Adventure</h1>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
                <Input type="text" placeholder="Search" />
                <Button type="button">Search</Button>
            </div>
            <div className="grid grid-cols-4 gap-4 w-full mt-[100px] ">
                <Card>
                    <CardHeader className="text-center w-full py-4">
                        <div className="flex justify-center">
                        <ShieldCheck size={48} strokeWidth={1}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-center text-2xl mb-4">Verified Providers</CardTitle>
                        <CardDescription className="text-lg">Approved and trustworthy operators</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="text-center w-full py-4">
                        <div className="flex justify-center">
                        <Star size={48} strokeWidth={1}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-center text-2xl mb-4">Customer Reviews</CardTitle>
                        <CardDescription className="text-lg">Read reviews from past travelers</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="text-center w-full py-4">
                        <div className="flex justify-center">
                        <CircleDollarSign size={48} strokeWidth={1}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-center text-2xl mb-4">Easy Booking</CardTitle>
                        <CardDescription className="text-lg">Simple and secure online booking</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="text-center w-full py-4">
                        <div className="flex justify-center">
                        <Headset size={48} strokeWidth={1}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-center text-2xl mb-4">24/7 Support</CardTitle>
                        <CardDescription className="text-lg">Assistance at any time, day or night</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}