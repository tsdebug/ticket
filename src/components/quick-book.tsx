"use client";

import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Film, MapPin, Clock } from "lucide-react";

export function QuickBook() {
    return (
        <div className="w-full bg-white shadow-lg border-y border-gray-100 py-6 sticky top-16 z-30">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-4">

                <div className="font-bold text-purple-900 whitespace-nowrap mr-2">
                    QUICK BOOK
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {/* Movie Select */}
                    <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-purple-500">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Film className="w-4 h-4 text-purple-600" />
                                <SelectValue placeholder="Select Movie" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="avatar">Avatar: Fire and Ash</SelectItem>
                            <SelectItem value="pushpa">Pushpa 2</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Date Select */}
                    <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-purple-500">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4 text-purple-600" />
                                <SelectValue placeholder="Select Date" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="today">Today, 16 Dec</SelectItem>
                            <SelectItem value="tomorrow">Tomorrow, 17 Dec</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Cinema Select */}
                    <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-purple-500">
                            <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-purple-600" />
                                <SelectValue placeholder="Select Cinema" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pvr">PVR: Acropolis</SelectItem>
                            <SelectItem value="inox">INOX: City Centre</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Timing Select */}
                    <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-purple-500">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4 text-purple-600" />
                                <SelectValue placeholder="Select Timing" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">10:00 AM</SelectItem>
                            <SelectItem value="evening">06:30 PM</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Link href="/book/avatar" className="w-full lg:w-auto">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 shadow-md hover:shadow-lg transition-all">
                        BOOK
                    </Button>
                </Link>
            </div>
        </div>
    );
}