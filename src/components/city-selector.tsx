"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import Image from "next/image";
import { POPULAR_CITIES, OTHER_CITIES } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

interface CitySelectorProps {
  open: boolean;
  onSelectCity: (city: string) => void;
}

export function CitySelector({ open, onSelectCity }: CitySelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPopular = POPULAR_CITIES.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredOther = OTHER_CITIES.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 gap-0 bg-white text-black overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl font-bold mb-4">Select City</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search for city" 
              className="pl-9 bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 p-6">
          
          {/* Popular Cities */}
          {filteredPopular.length > 0 && (
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">Popular Cities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredPopular.map((city) => (
                  <div 
                    key={city.name} 
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                    onClick={() => onSelectCity(city.name)}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                        <Image 
                          src={city.image} 
                          alt={city.name} 
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 group-hover:font-bold transition-colors">
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Cities */}
          <div>
            {filteredOther.length > 0 && (
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider whitespace-nowrap">Other Cities</span>
                    <Separator className="flex-1" />
                </div>
            )}

            {/* SPACED OUT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
              {filteredOther.map((city) => (
                <div 
                  key={city}
                  className="text-sm text-gray-600 cursor-pointer hover:text-black hover:font-bold hover:bg-gray-100 p-2 rounded transition-all"
                  onClick={() => onSelectCity(city)}
                >
                  {city}
                </div>
              ))}
            </div>

            {filteredPopular.length === 0 && filteredOther.length === 0 && (
               <div className="text-center py-10 text-gray-400">
                  No cities found.
               </div>
            )}
          </div>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}