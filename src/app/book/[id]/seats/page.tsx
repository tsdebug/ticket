"use client";

import { useState, use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Armchair } from "lucide-react";
import { MOVIE_DETAILS } from "@/lib/constants";

// --- MOCK SEAT CONFIGURATION ---
const SEAT_LAYOUT = [
  { category: "CLASSIC (Rs. 280)", price: 280, rows: [
      { id: "A", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
      { id: "B", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
      { id: "C", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
  ]},
  { category: "PRIME (Rs. 350)", price: 350, rows: [
      { id: "D", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
      { id: "E", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
      { id: "F", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
      { id: "G", seats: [1,2,3,4,0,5,6,7,8,9,10,0,11,12,13,14] },
  ]},
  { category: "RECLINER (Rs. 600)", price: 600, rows: [
      { id: "L", seats: [1,2,0,3,4,0,5,6] },
  ]},
];

const OCCUPIED_SEATS = ["A5", "A6", "C10", "C11", "D4", "E8", "F1", "F2"];

interface SeatPageProps {
  params: Promise<{ id: string }>;
}

export default function SeatSelectionPage({ params }: SeatPageProps) {
  const { id } = use(params);
  const router = useRouter();
  
  // Data
  const movie = MOVIE_DETAILS[id] || MOVIE_DETAILS["1"];
  
  // State
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Toggle Seat Logic
  const handleSeatClick = (seatId: string) => {
    if (OCCUPIED_SEATS.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(prev => prev.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length >= 10) {
        alert("You can only select up to 10 seats."); 
        return;
      }
      setSelectedSeats(prev => [...prev, seatId]);
    }
  };

  // Calculate Total Price
  const totalPrice = useMemo(() => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const rowId = seatId.charAt(0);
      SEAT_LAYOUT.forEach(section => {
        const isInRow = section.rows.some(r => r.id === rowId);
        if (isInRow) total += section.price;
      });
    });
    return total;
  }, [selectedSeats]);

  const handleProceed = () => {
    localStorage.setItem("currentBooking", JSON.stringify({
        movieTitle: movie.title,
        poster: movie.poster,
        theater: "PVR: Acropolis",
        seats: selectedSeats,
        price: totalPrice,
        date: "Today, 19 Dec",
        time: "10:45 PM"
    }));
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      
      {/* --- LEFT: SEAT MAP --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header Strip */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between z-10 shadow-sm">
            <div className="flex items-center gap-4">
                <Link href={`/book/${id}`} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </Link>
                <div>
                    <h1 className="font-bold text-gray-900 uppercase">{movie.title}</h1>
                    <p className="text-xs text-gray-500">Today, 19 Dec • 10:45 PM • PVR: Acropolis</p>
                </div>
            </div>
            
            {/* LEGEND UPDATED: Green removed, now Purple/Gray */}
            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-400 rounded bg-white"></div> 
                    Available
                </div>
                <div className="flex items-center gap-2">
                    {/* THIS IS THE SELECTED LEGEND BOX */}
                    <div className="w-4 h-4 bg-purple-600 rounded border border-purple-600"></div> 
                    Selected
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div> 
                    Sold
                </div>
            </div>
        </div>

        {/* Scrollable Map Area */}
        <div className="flex-1 overflow-auto bg-gray-100 p-8 relative">
            <div className="mb-12 flex justify-center">
                <div className="w-[60%] h-8 border-t-4 border-purple-400 rounded-t-[50%] shadow-[0_-10px_20px_rgba(168,85,247,0.2)] flex items-center justify-center text-xs text-purple-400 tracking-[0.3em] font-bold">
                    SCREEN THIS WAY
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 pb-32">
                {SEAT_LAYOUT.map((section, idx) => (
                    <div key={idx} className="w-full max-w-2xl">
                        <div className="text-xs text-gray-400 mb-2 text-center font-bold tracking-wider">{section.category}</div>
                        <div className="flex flex-col gap-2 items-center">
                            {section.rows.map((row) => (
                                <div key={row.id} className="flex items-center gap-2">
                                    <div className="w-6 text-xs text-gray-400 font-bold text-right mr-4">{row.id}</div>
                                    <div className="flex gap-2">
                                        {row.seats.map((seatNum, sIdx) => {
                                            if (seatNum === 0) return <div key={sIdx} className="w-8" />;
                                            const seatId = `${row.id}${seatNum}`;
                                            const isOccupied = OCCUPIED_SEATS.includes(seatId);
                                            const isSelected = selectedSeats.includes(seatId);
                                            const isRecliner = section.category.includes("RECLINER");

                                            return (
                                                <button
                                                    key={seatId}
                                                    disabled={isOccupied}
                                                    onClick={() => handleSeatClick(seatId)}
                                                    className={`
                                                        relative flex items-center justify-center text-[10px] font-bold transition-all duration-200
                                                        ${isRecliner ? 'w-12 h-10 rounded-lg' : 'w-8 h-8 rounded-t-lg rounded-b-sm'}
                                                        ${isOccupied 
                                                            ? "bg-gray-300 text-gray-400 cursor-not-allowed" 
                                                            : isSelected 
                                                                ? "bg-purple-600 text-white shadow-lg shadow-purple-200 transform scale-110 border border-purple-600" 
                                                                : "bg-white border border-gray-300 text-gray-600 hover:border-purple-400 hover:text-purple-600" // UPDATED HOVER
                                                        }
                                                    `}
                                                >
                                                    {isRecliner ? <Armchair className="w-5 h-5" /> : seatNum}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="w-6 text-xs text-gray-400 font-bold text-left ml-4">{row.id}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- RIGHT: SIDEBAR SUMMARY --- */}
      <div className="bg-white border-l w-full md:w-96 shadow-2xl z-20 flex flex-col">
          <div className="p-6 border-b hidden md:block">
             <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Booking Summary</h2>
          </div>

          <div className="flex-1 p-6 flex flex-col gap-6 overflow-auto">
             <div className="flex gap-4 items-start">
                 <div className="w-20 aspect-[2/3] relative rounded bg-gray-200 overflow-hidden shadow-md">
                     <Image src={movie.poster} alt="Poster" fill className="object-cover" />
                 </div>
                 <div>
                     <h3 className="font-bold text-gray-900 leading-tight mb-1">{movie.title}</h3>
                     <p className="text-xs text-gray-500">Hindi • 2D</p>
                     <p className="text-xs text-gray-500">PVR: Acropolis, Ahmedabad</p>
                 </div>
             </div>

             {selectedSeats.length > 0 ? (
                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-semibold text-purple-900">{selectedSeats.length} Seat(s)</span>
                         <span className="text-xs text-purple-600 font-bold">{selectedSeats.join(", ")}</span>
                     </div>
                     <div className="flex justify-between items-center pt-2 border-t border-purple-200">
                         <span className="text-sm text-gray-600">Subtotal</span>
                         <span className="font-bold text-gray-900">Rs. {totalPrice}</span>
                     </div>
                 </div>
             ) : (
                 <div className="flex flex-col items-center justify-center py-10 text-gray-400 border-2 border-dashed rounded-lg">
                     <Armchair className="w-12 h-12 mb-2 opacity-20" />
                     <p className="text-sm">Select seats to proceed</p>
                 </div>
             )}
          </div>

          <div className="p-6 bg-gray-50 border-t mt-auto">
              <div className="flex justify-between items-end mb-4">
                  <div>
                      <p className="text-xs text-gray-500">Total Amount</p>
                      <h2 className="text-2xl font-bold text-gray-900">Rs. {totalPrice}</h2>
                  </div>
              </div>
              <Button 
                onClick={handleProceed}
                className="w-full bg-purple-600 hover:bg-purple-700 text-lg font-bold h-12"
                disabled={selectedSeats.length === 0}
              >
                Proceed to Pay
              </Button>
          </div>
      </div>
    </div>
  );
}