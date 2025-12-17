"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { SignupForm } from "@/components/signup-form"; 

export function AuthModal() {
  // 1. Add state to control open/close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
          <User className="w-4 h-4" /> Login
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white border-none block">
        <DialogTitle className="sr-only">Sign In</DialogTitle>
        {/* 2. Pass the close function to the form */}
        <SignupForm onSuccess={() => setIsOpen(false)} /> 
      </DialogContent>
    </Dialog>
  );
}