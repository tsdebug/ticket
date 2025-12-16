"use client";

import { useState, use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Info, Heart, ChevronLeft, Filter, Smartphone, Coffee } from "lucide-react";
import { THEATER_DATA, DATES } from "@/lib/theaters";
import { MOVIE_DETAILS } from "@/lib/constants"; // Import the DB
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// ... keep helper function getTimeColor ...
const getTimeColor = (type: string) => {
    switch (type) {
      case "AVAILABLE": return "text-green-600 border-green-200 hover:bg-green-50";
      case "FILLING_FAST": return "text-orange-600 border-orange-200 hover:bg-orange-50";
      case "SOLD_OUT": return "text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed";
      default: return "text-gray-800 border-gray-200";
    }
};

interface BookingPageProps {
  params: Promise<{ id: string }>;
}

export default function BookingPage({ params }: BookingPageProps) {
  const { id } = use(params);
  const [selectedDate, setSelectedDate] = useState(0);

  // 1. LOOK UP MOVIE
  const movie = MOVIE_DETAILS[id] || MOVIE_DETAILS["1"]; // Fallback to Avatar if ID not found

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 2. DYNAMIC HEADER */}
      <div className="bg-[#1a1a1a] text-white pt-6 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Dynamic Background */}
             <Image 
                src={movie.bg}
                alt="bg"
                fill
                className="object-cover opacity-20 blur-sm"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-medium tracking-wide">
                <Link href="/" className="flex items-center hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4 mr-1" /> BACK
                </Link>
                <span>/</span>
                <span className="text-white uppercase">{movie.title}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Dynamic Poster */}
                <div className="w-32 md:w-48 aspect-[2/3] relative rounded-md overflow-hidden shadow-2xl border border-gray-700">
                    <Image 
                        src={movie.poster} 
                        alt="Poster" 
                        fill 
                        className="object-cover"
                    />
                </div>

                {/* Dynamic Info */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">{movie.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                        <Badge variant="outline" className="text-white border-white/30 bg-white/10">{movie.rating}</Badge>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-gray-500 rounded-full"></span> {movie.duration}</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-gray-500 rounded-full"></span> {movie.genre}</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-gray-500 rounded-full"></span> {movie.language}</span>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                        {movie.formats.map((fmt: string) => (
                             <Badge key={fmt} className="bg-white text-black hover:bg-gray-200 font-bold px-3 py-1">{fmt}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ... (Date Selector, Filters, and Theater List remain exactly the same as before) ... */}
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 py-2 overflow-x-auto scrollbar-hide">
                {DATES.map((d, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedDate(index)}
                        className={`flex flex-col items-center min-w-[60px] p-2 rounded-md transition-all ${
                            selectedDate === index 
                            ? "bg-purple-600 text-white shadow-md transform scale-105" 
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                    >
                        <span className="text-xs font-medium uppercase">{d.day}</span>
                        <span className="text-lg font-bold">{d.date}</span>
                        <span className="text-[10px] uppercase opacity-80">{d.month}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>
      
      {/* 3. FILTERS & LEGEND */}
      <div className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search for cinema" className="pl-9 bg-gray-50 border-gray-200" />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto">
                <div className="flex items-center gap-2 text-xs text-gray-500 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Available
                    <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"></span> Filling Fast
                    <span className="w-2 h-2 rounded-full bg-gray-400 ml-2"></span> Sold Out
                </div>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="outline" size="sm" className="gap-2 text-gray-600">
                    <Filter className="w-3 h-3" /> Filters
                </Button>
            </div>
        </div>
      </div>

      {/* 4. THEATER LISTINGS */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {THEATER_DATA.map((theater) => (
            <div key={theater.id} className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {/* Theater Header */}
                <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dashed border-gray-200">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-3 mb-1">
                            <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                            <h3 className="font-bold text-gray-900">{theater.name}</h3>
                        </div>
                        <div className="flex items-center gap-6 text-xs text-gray-500 ml-7">
                            <span className="flex items-center gap-1 text-purple-600">
                                <MapPin className="w-3 h-3" /> {theater.distance}
                            </span>
                            <span className="hidden md:inline-block">{theater.address}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-7 md:ml-0">
                        {theater.amenities.includes("M-Ticket") && (
                             <div className="flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded">
                                <Smartphone className="w-3 h-3" /> M-Ticket
                             </div>
                        )}
                        {theater.amenities.includes("F&B") && (
                             <div className="flex items-center gap-1 text-[10px] text-orange-600 bg-orange-50 px-2 py-1 rounded">
                                <Coffee className="w-3 h-3" /> F&B
                             </div>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                            <Info className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Showtimes */}
                <div className="p-6 pt-4 bg-gray-50/50">
                    {theater.shows.map((show, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start gap-4 mb-6 last:mb-0">
                            <div className="min-w-[120px]">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                                    {show.language}
                                </span>
                                <span className="text-xs font-bold text-black border border-gray-300 px-2 py-0.5 rounded bg-white">
                                    {show.format}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3 flex-1">
                                {show.timings.map((t, tIdx) => (
                                    <Link key={tIdx} href={`/book/${id}/seats`}>
                                        <div className={`
                                            group relative border px-6 py-2 rounded-sm text-center cursor-pointer transition-all bg-white
                                            ${getTimeColor(t.type)}
                                        `}>
                                            <div className="text-sm font-bold">{t.time}</div>
                                            {/* Hover Price Tooltip Effect */}
                                            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
                                                Rs. 350.00
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}