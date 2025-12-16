"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";

// Components
import { Button } from "@/components/ui/button"; 
import { CitySelector } from "@/components/city-selector"; 
import { QuickBook } from "@/components/quick-book";
import { MovieSection } from "@/components/movie-section";
import { AuthModal } from "@/components/auth-modal";

// Data
import { MOVIES_NOW_SHOWING, MOVIES_COMING_SOON } from "@/lib/constants";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("user_city");
    if (!saved) {
      setIsModalOpen(true);
    } else {
      setSelectedCity(saved);
    }
  }, []);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    localStorage.setItem("user_city", city);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
      
      {/* 1. Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
             <div className="bg-purple-600 text-white font-black text-2xl px-2 py-1 rounded-sm">P</div>
             <span className="text-2xl font-bold tracking-tighter text-gray-900">
                PRO<span className="text-purple-600">JECT</span>
             </span>
          </Link>
          
          {/* NEW: Nav Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-sm text-gray-600">
             <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
             <Link href="#now-showing" className="hover:text-purple-600 transition-colors">Movies</Link>
             <Link href="/admin" className="hover:text-purple-600 transition-colors">Admin Panel</Link>
             <Link href="/bookings" className="hover:text-purple-600 transition-colors">My Orders</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-50 px-3 py-2 rounded-full border border-gray-200 w-64 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm text-gray-900 placeholder:text-gray-400 w-full"
            />
          </div>

          <Button 
            variant="ghost" 
            onClick={() => setIsModalOpen(true)}
            className="text-gray-600 hover:text-purple-600 font-medium hidden sm:flex"
          >
            <MapPin className="w-4 h-4 mr-2" />
            {selectedCity || "Select City"}
          </Button>

          <AuthModal />
        </div>
      </nav>

      <CitySelector 
        open={isModalOpen} 
        onSelectCity={handleCitySelect} 
      />

      <main>
        {/* 2. Hero Banner */}
        <div className="relative w-full h-[300px] md:h-[450px] bg-black">
             <Image 
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1600" 
                alt="Banner"
                fill
                className="object-cover opacity-60"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                    AVATAR: <span className="text-purple-400">FIRE & ASH</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                    Return to Pandora in the most anticipated sequel of the decade. 
                    Experience it in IMAX 3D.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold">
                        Watch Trailer
                    </Button>
                    <Link href="/book/1">
                        <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-bold">
                            Book Now
                        </Button>
                    </Link>
                </div>
             </div>
        </div>

        <QuickBook />

        {selectedCity ? (
           <>
             <div id="now-showing"><MovieSection title="Now Showing" movies={MOVIES_NOW_SHOWING} /></div>
             <div className="h-px bg-gray-200 mx-auto max-w-7xl" /> 
             <MovieSection title="Coming Soon" movies={MOVIES_COMING_SOON} isComingSoon />
           </>
        ) : (
           <div className="py-20 text-center bg-gray-50">
              <p className="text-gray-500 mb-4">Select your city to view showtimes</p>
              <Button onClick={() => setIsModalOpen(true)}>Select City</Button>
           </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="text-gray-500">© 2025 Star Book. Say bye to queues, Go straight to movies</p>
      </footer>
    </div>
  );
}