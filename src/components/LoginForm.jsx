"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Heart, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import GoogleSignInButton from "./GoogleSignInButton";

function LoginFormContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [focused, setFocused] = useState({ email: false, password: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/service";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setIsSubmitting(false);
    } else {
      window.location.href = callbackUrl;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />

      <div className="w-full max-w-md relative z-10">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 mb-8 group"
        >
          <div className="p-2 rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            HomeCarely
          </span>
        </Link>

        <Card className="glass-card border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <div className="relative">
                <label
                  className={`absolute left-10 transition-all duration-200 pointer-events-none ${
                    focused.email || formData.email
                      ? "top-0 text-xs text-blue-400"
                      : "top-2 text-gray-400"
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    className="pl-10 pt-5 pb-2 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    onFocus={() => setFocused((p) => ({ ...p, email: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, email: false }))}
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  className={`absolute left-10 transition-all duration-200 pointer-events-none ${
                    focused.password || formData.password
                      ? "top-0 text-xs text-blue-400"
                      : "top-2 text-gray-400"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 pt-5 pb-2 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, password: e.target.value }))
                    }
                    onFocus={() => setFocused((p) => ({ ...p, password: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, password: false }))}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link
                  href="#"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-premium text-white font-semibold py-3 hover:scale-105 transition-transform duration-300"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="relative">
              <Separator className="bg-white/10" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-gray-400">
                or
              </span>
            </div>

            <GoogleSignInButton />

            <p className="text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginFormContent />
    </Suspense>
  );
}
