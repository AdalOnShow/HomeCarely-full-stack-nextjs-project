"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ContactError({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="text-center relative z-10 max-w-lg">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-linear-to-r from-red-500 to-orange-500 flex items-center justify-center">
          <AlertTriangle className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Contact Page Error
          </span>
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          We couldn&apos;t load the contact page. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => reset()}
            className="btn-premium text-white font-semibold px-8 hover:scale-105 transition-transform duration-300"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
