"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Package, Users, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from "@/components/ui/separator"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Dashboard = () => {
  const data = [
    { name: 'Jan', revenue: 34000 },
    { name: 'Feb', revenue: 38000 },
    { name: 'Mar', revenue: 42000 },
    { name: 'Apr', revenue: 39000 },
    { name: 'May', revenue: 45231 },
  ]

  const recentTransactions = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', amount: 2499.99, status: 'success' },
    { id: 2, name: 'Michael Brown', email: 'michael@example.com', amount: 1850.00, status: 'pending' },
    { id: 3, name: 'Emily Davis', email: 'emily@example.com', amount: 999.00, status: 'success' },
  ]

  const recentSales = [
    { name: 'Mehdi Vaez', email: 'test@test.com', amount: 1999.00, avatar: '/avatars/01.png' },
    { name: 'John Doe', email: 'john@example.com', amount: 2499.99, avatar: '/avatars/02.png' },
    { name: 'Alice Smith', email: 'alice@example.com', amount: 1750.00, avatar: '/avatars/03.png' },
  ]

  return (
    <>
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 animate-in fade-in-50">
      <Card className="hover:shadow-lg transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <div className="flex items-center gap-1 text-emerald-500">
            <ArrowUpRight className="h-4 w-4" />
            <p className="text-xs">+20.1% from last month</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <div className="flex items-center gap-1 text-emerald-500">
            <ArrowUpRight className="h-4 w-4" />
            <p className="text-xs">+180.1% from last month</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <div className="flex items-center gap-1 text-emerald-500">
            <ArrowUpRight className="h-4 w-4" />
            <p className="text-xs">+19% from last month</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <div className="flex items-center gap-1 text-emerald-500">
            <ArrowUpRight className="h-4 w-4" />
            <p className="text-xs">+201 since last hour</p>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="grid gap-4 md:gap-8 lg:grid-cols-7 xl:grid-cols-3 mt-10 animate-in fade-in-50 slide-in-from-bottom-4">
      <Card className='xl:col-span-2 lg:col-span-4'>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Revenue trend over the past months</CardDescription>
        </CardHeader>
        <CardContent className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card className='xl:col-span-1 lg:col-span-3'>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.email}</p>
                </div>
                <div className={`text-sm font-medium ${transaction.status === 'success' ? 'text-emerald-500' : 'text-orange-500'}`}>
                  ${transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='xl:col-span-3 lg:col-span-7'>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>Latest customer purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentSales.map((sale, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={sale.avatar} alt={sale.name} />
                    <AvatarFallback>{sale.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{sale.name}</p>
                    <p className="text-xs text-muted-foreground">{sale.email}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-emerald-500">
                  +${sale.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default Dashboard