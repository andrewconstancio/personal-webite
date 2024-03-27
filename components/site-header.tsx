import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 bg-white dark:bg-black z-20 border-b">
      <nav className="lg mx-auto flex max-w-[1000px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="flex space-x-2 shrink-0 text-primary ">
              <Avatar className="mr-4 h-14 w-14 ">
                <AvatarImage src="/assets/me_1.jpeg" alt="AC" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <ThemeToggle />
      </nav>
    </header>
  )
}