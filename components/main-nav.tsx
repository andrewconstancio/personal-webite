"use client";
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import {NavigationMenu, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuLink } from "./ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <>
    {items?.length ? (
        <nav className="hidden md:flex items-center gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </>
  )
}
