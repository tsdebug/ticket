"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Trash2, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/">
                <Button variant="ghost" size="icon"><ChevronLeft /></Button>
            </Link>
            <h1 className="text-2xl font-bold">My Bookings</h1>
        </div>

        {/* Active Ticket Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-64 md:h-auto">
                    <Image 
                        src="/Avatar.jpg"
                        alt="Poster"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold uppercase">Avatar: Fire and Ash</h2>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">CONFIRMED</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">PNR: 88392011</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                            <div className="flex items-center gap-2 text-gray-700">
                                <Calendar className="w-4 h-4 text-purple-600" />
                                19 Dec, 10:45 PM
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="w-4 h-4 text-purple-600" />
                                PVR: Acropolis
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-sm">
                            <span className="font-bold text-purple-600">Seats:</span> C4, C5, C6
                        </div>
                    </div>
                    
                    <div className="flex justify-end pt-4 border-t mt-4">
                        <Button variant="destructive" className="gap-2" onClick={() => alert("Booking Cancelled! Refund Initiated.")}>
                            <Trash2 className="w-4 h-4" /> Cancel Booking
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Cancelled Ticket Card (History) */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden opacity-60">
             <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto bg-gray-200">
                     <Image 
                        src="/Pushpa.jpg"
                        alt="Poster"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="flex-1 p-6">
                     <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold uppercase">Pushpa 2</h2>
                            <Badge variant="secondary">CANCELLED</Badge>
                     </div>
                     <p className="text-sm text-gray-500 mb-2">Refund Processed (Ref: REF99283)</p>
                     <p className="text-xs text-gray-400">Cancelled on 12 Dec 2024</p>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
}