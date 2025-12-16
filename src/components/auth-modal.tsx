"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { SignupForm } from "@/components/signup-form"; 

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
          <User className="w-4 h-4" /> Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 bg-white border-none overflow-hidden">
        {/* This Title is required for accessibility, 'sr-only' hides it visually */}
        <DialogTitle className="sr-only">Sign In</DialogTitle>
        
        {/* Your existing form */}
        <SignupForm /> 
      </DialogContent>
    </Dialog>
  );
}