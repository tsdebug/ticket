"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Film, Ticket, DollarSign, Plus, MoreHorizontal } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 hidden md:block">
         <h1 className="text-2xl font-bold mb-8 tracking-tight">ADMIN<span className="text-purple-500">PANEL</span></h1>
         <nav className="space-y-4 text-sm text-gray-400">
            <div className="text-white bg-purple-600 px-4 py-2 rounded-md font-medium cursor-pointer">Dashboard</div>
            <div className="hover:text-white px-4 py-2 cursor-pointer transition-colors">Manage Movies</div>
            <div className="hover:text-white px-4 py-2 cursor-pointer transition-colors">Theaters & Screens</div>
            <div className="hover:text-white px-4 py-2 cursor-pointer transition-colors">Users</div>
            <div className="hover:text-white px-4 py-2 cursor-pointer transition-colors">Reports</div>
         </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
            <div className="flex gap-4">
                <Button variant="outline">Export Data</Button>
                <Button className="bg-purple-600 hover:bg-purple-700">+ Add Movie</Button>
            </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Rs. 45,231</div>
                    <p className="text-xs text-green-500 mt-1">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Tickets Sold</CardTitle>
                    <Ticket className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-gray-500 mt-1">Total bookings this week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Active Movies</CardTitle>
                    <Film className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-gray-500 mt-1">Currently showing</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-green-500 mt-1">+201 since last hour</p>
                </CardContent>
            </Card>
        </div>

        {/* Data Table Mockup */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Recent Movie Listings</h3>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 font-medium">
                    <tr>
                        <th className="px-6 py-3">Movie ID</th>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Sales</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {[
                        {id: "MOV001", title: "Avatar: Fire and Ash", status: "Now Showing", sales: "Rs. 12,500"},
                        {id: "MOV002", title: "Pushpa 2: The Rule", status: "Now Showing", sales: "Rs. 9,200"},
                        {id: "MOV003", title: "Sonic 3", status: "Coming Soon", sales: "-"},
                        {id: "MOV004", title: "Mufasa", status: "Coming Soon", sales: "-"},
                    ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-mono text-gray-500">{row.id}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{row.title}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.status === 'Now Showing' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{row.sales}</td>
                            <td className="px-6 py-4 text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </main>
    </div>
  );
}