import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="text-center relative z-10 max-w-lg">
        <div className="text-9xl mb-8 animate-bounce">🏠</div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Oops! The page you are looking for seems to have wandered off. Let us
          get you back to caring for what matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="btn-premium text-white font-semibold px-8 hover:scale-105 transition-transform duration-300"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>

          <Link href="/service">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Need help? Contact us at{" "}
            <a
              href="mailto:support@homecarely.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              support@homecarely.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
