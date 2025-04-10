
"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils";
import { Compass } from "@workspace/ui/components/icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tours",
    href: "/tours",
    description: "Browse All Tours"
  }
]
export function NavigationMenuDemo() {
  return (
    <div className="hidden md:flex">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                            <NavigationMenuLink asChild>
                            <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/tours"
                            >
                                <Compass size={100} />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                Browse All Tours
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                Explore all available tours in one place.
                                </p>
                            </a>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/categories" title="Categories">
                            Find tours based on interests like adventure, culture, or nature.
                        </ListItem>
                        <ListItem href="/tours" title="Top-Rated Tours">
                            See the most highly rated experiences from other travelers.
                        </ListItem>
                        <ListItem href="/tours" title="Special Offers">
                            Discover discounted and limited-time tour deals.
                        </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Community </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/reviews"
                                >
                                    <Compass size={100} />
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                    Traveler Reviews
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                    Read authentic reviews from fellow travelers to help plan your trip
                                    </p>
                                </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/stories" title="Blog & Stories">
                            Explore travel stories, tips, and guides from our community and experts.
                            </ListItem>
                            <ListItem href="/forum" title="Travel Forum">
                            Join discussions, ask questions, and share your experiences with others.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
