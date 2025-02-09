"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PlusCircle, Pencil, Trash2, ArrowUpDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Premium T-Shirt',
    image: '/products/tshirt.jpg',
    price: 29.99,
    date: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    image: '/products/headphones.jpg',
    price: 149.99,
    date: '2024-01-14',
    status: 'low-stock'
  },
  {
    id: 3,
    name: 'Smart Watch',
    image: '/products/watch.jpg',
    price: 199.99,
    date: '2024-01-13',
    status: 'out-of-stock'
  },
]

const ProductsPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'bg-emerald-500'
      case 'low-stock':
        return 'bg-yellow-500'
      case 'out-of-stock':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }
  return (
    <div className="animate-in fade-in-50">
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground mt-2">Manage your product catalog</p>
        </div>
        <Button asChild className='flex items-center gap-x-2'>
          <Link href='/dashboard/products/create'>
            <PlusCircle className='w-4 h-4 mr-2'/>
            Add Product
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>A list of all products in your store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase border-b">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-x-2">
                      Name
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-x-2">
                      Date
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-x-2">
                      Status
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-x-2">
                      Price
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-x-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback>{product.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{new Date(product.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <Badge className={`${getStatusColor(product.status)} text-white capitalize`}>
                        {product.status.replace('-', ' ')}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default ProductsPage