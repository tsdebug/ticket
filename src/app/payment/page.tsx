"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lock, CreditCard } from "lucide-react";

export default function PaymentPage() {
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load booking details
    const data = localStorage.getItem("currentBooking");
    if (data) {
      setBooking(JSON.parse(data));
    } else {
      router.push("/");
    }
  }, [router]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      router.push("/ticket");
    }, 2000);
  };

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">Order Summary</h2>
          <div className="flex gap-4 mb-6">
              <div className="w-20 h-28 bg-gray-200 rounded overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={booking.poster} alt="Poster" className="object-cover w-full h-full" />
              </div>
              <div>
                  <h3 className="font-bold text-xl">{booking.movieTitle}</h3>
                  <p className="text-gray-500 text-sm">{booking.theater}</p>
                  <p className="text-gray-500 text-sm">{booking.date} | {booking.time}</p>
              </div>
          </div>
          <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between">
                  <span className="text-gray-600">Seats ({booking.seats.length})</span>
                  <span className="font-medium">{booking.seats.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs. {booking.price}</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-gray-600">Convenience Fee</span>
                  <span className="font-medium">Rs. 25.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t mt-2">
                  <span>Total Payable</span>
                  <span className="text-purple-700">Rs. {booking.price + 25}</span>
              </div>
          </div>
        </div>

        {/* Payment Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                Secure Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Card Number</label>
                    <div className="relative">
                        <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="0000 0000 0000 0000" className="pl-9" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Expiry</label>
                        <Input placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">CVV</label>
                        <Input placeholder="123" type="password" maxLength={3} required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Card Holder Name</label>
                    <Input placeholder="John Doe" required />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 mt-4 h-12 text-lg" disabled={loading}>
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                        </>
                    ) : (
                        `Pay Rs. ${booking.price + 25}`
                    )}
                </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}