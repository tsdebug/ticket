"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Movie {
  id: number;
  title: string;
  genre: string[];
  language?: string;
  rating?: string;
  date?: string;
  img: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  isComingSoon?: boolean;
}

export function MovieSection({ title, movies, isComingSoon = false }: MovieSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
                {title}
            </h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50">
                See All ›
            </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <Card key={movie.id} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-0 relative">
                        {/* Image Container */}
                        <div className="relative aspect-[2/3] overflow-hidden">
                            <Image
                                src={movie.img}
                                alt={movie.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Rating Badge */}
                            {!isComingSoon && movie.rating && (
                                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-sm shadow-md">
                                    {movie.rating}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-gray-900 truncate mb-1" title={movie.title}>
                                {movie.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {movie.genre.map((g) => (
                                    <span key={g} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                                        {g}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-gray-500 font-medium">
                                    {isComingSoon ? movie.date : movie.language}
                                </div>
                                <Button 
                                    size="sm" 
                                    variant={isComingSoon ? "outline" : "default"}
                                    className={isComingSoon 
                                        ? "border-purple-200 text-purple-700 hover:bg-purple-50" 
                                        : "bg-purple-600 hover:bg-purple-700 text-white"
                                    }
                                >
                                    {isComingSoon ? "Remind Me" : "Book Ticket"}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}