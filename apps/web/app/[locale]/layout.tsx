import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";
import { NavigationMenuDemo } from "@/components/nav";
import { User } from "@/components/user";
import ThemeSelector from "@/components/themeSelector";
import { Bird } from "@workspace/ui/components/icons";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
  breadcrumb
}: Readonly<{
  children: React.ReactNode,
  breadcrumb: React.ReactNode,
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex h-full flex-col`}
          >
            <Providers>
              <header className="py-10">
              <DesktopNav/>
              </header>
              <main className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {breadcrumb}
                {children}
              </main>
            </Providers>
        </body>
        </SessionProvider>
    </html>
  )
}


function DesktopNav ({}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
          <a aria-label="Home" href="#" className="flex items-center gap-4 text-primary">
            <Bird size={36}/>
            <span className="hidden md:inline">CompanyLOGO</span>
          </a>
          <NavigationMenuDemo/>
          <div className="flex gap-6 items-center">
            <ThemeSelector/>
            <User/>
          </div>
      </nav>
    </div>
  )
}
