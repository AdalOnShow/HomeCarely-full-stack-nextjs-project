"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Baby, UserCheck, Stethoscope, ArrowRight } from "lucide-react";

const iconMap = {
  "baby-care": Baby,
  "elderly-care": UserCheck,
  "sick-care": Stethoscope,
};

export default function ServiceStickyBar({ serviceId, title, iconName }) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Icon = iconMap[iconName] || Baby;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-4 z-50 transition-transform duration-300 ${
        showSticky ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon className="h-8 w-8 text-white" />
          <span className="text-white font-semibold hidden sm:block">
            {title}
          </span>
        </div>
        <Link href={`/booking/${serviceId}`}>
          <Button className="btn-premium text-white font-semibold hover:scale-105 transition-transform duration-300">
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
