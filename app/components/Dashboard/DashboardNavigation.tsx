"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Categories", href: "/dashboard/Categories" },
]

export default function DashboardNavigation() { 
  const pathname = usePathname()

  return (
    <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            )}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

