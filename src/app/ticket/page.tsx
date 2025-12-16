"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Download } from "lucide-react";

export default function TicketPage() {
  const [booking, setBooking] = useState<any>(null);
  const [pnr, setPnr] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("currentBooking");
    if (data) {
      setBooking(JSON.parse(data));
      // Generate a random PNR
      setPnr("PNR" + Math.floor(100000 + Math.random() * 900000));
    }
  }, []);

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden relative">
        
        {/* Success Header */}
        <div className="bg-green-600 p-8 text-center text-white">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
            <p className="opacity-90 mt-1">Your tickets have been sent to email.</p>
        </div>

        {/* Ticket Details */}
        <div className="p-6 bg-white relative">
            {/* Cutout circles for ticket effect */}
            <div className="absolute top-[-12px] left-[-12px] w-6 h-6 bg-green-50 rounded-full"></div>
            <div className="absolute top-[-12px] right-[-12px] w-6 h-6 bg-green-50 rounded-full"></div>

            <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{booking.movieTitle}</h2>
                <p className="text-gray-500 text-sm">{booking.theater}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-500 text-xs">DATE</p>
                    <p className="font-bold">{booking.date}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                    <p className="text-gray-500 text-xs">TIME</p>
                    <p className="font-bold">{booking.time}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded col-span-2">
                    <p className="text-gray-500 text-xs">SEATS</p>
                    <p className="font-bold text-lg text-purple-600">{booking.seats.join(", ")}</p>
                </div>
            </div>

            {/* QR Code Simulation */}
            <div className="flex flex-col items-center justify-center border-t border-dashed pt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pnr}`} 
                    alt="QR Code" 
                    className="mb-2"
                />
                <p className="font-mono font-bold text-gray-500 tracking-widest">{pnr}</p>
            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 flex gap-4">
            <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full gap-2">
                    <Home className="w-4 h-4" /> Home
                </Button>
            </Link>
            <Button className="flex-1 gap-2 bg-purple-600 hover:bg-purple-700">
                <Download className="w-4 h-4" /> E-Ticket
            </Button>
        </div>
      </div>
    </div>
  );
}