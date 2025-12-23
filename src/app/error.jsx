'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="text-center relative z-10 max-w-lg">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
          <AlertTriangle className="h-12 w-12 text-white" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Something Went Wrong
          </span>
        </h1>

        <p className="text-gray-400 mb-8 text-lg">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try again or return to the home page.
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

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Need help? Contact us at{' '}
            <a href="mailto:support@homecarely.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              support@homecarely.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
