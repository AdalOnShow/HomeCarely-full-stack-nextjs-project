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
import {
  CheckCircle,
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../services/user.service";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleSignInButton from "./GoogleSignInButton";

function RegisterFormContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/service";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      nid: "",
    },
  });

  const password = watch("password", "");

  const getPasswordStrength = () => {
    if (!password) return { level: 0, text: "", color: "" };
    if (password.length < 6) return { level: 1, text: "Weak", color: "bg-red-500" };
    if (password.length < 10) return { level: 2, text: "Medium", color: "bg-yellow-500" };
    return { level: 3, text: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength();
  const validationHints = [
    { text: "At least 8 characters", valid: password.length >= 8 },
    { text: "Contains uppercase", valid: /[A-Z]/.test(password) },
    { text: "Contains number", valid: /\d/.test(password) },
    { text: "Special character", valid: /[!@#$%^&*]/.test(password) },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const res = await signup(data);

    if (res.message === "User created successfully") {
      Swal.fire({
        title: "User Create Success!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsSubmitting(false);
      router.push(callbackUrl);
      reset();
    } else {
      Swal.fire({
        title: res.message || "Failed to create account",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 mt-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

      <div className="w-full max-w-md relative z-10">
        <Card className="glass-card border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Create Account</CardTitle>
            <CardDescription className="text-gray-400">
              Join HomeCarely for quality care
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter full name"
                    className={`pl-10 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300 ${errors.name ? "border-red-500" : ""}`}
                    {...register("name", {
                      required: "Full name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                      maxLength: { value: 50, message: "Name must not exceed 50 characters" },
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-300 mb-1">NID Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter NID"
                      className={`pl-10 bg-white/5 border-white/20 text-white transition-colors duration-300 ${errors.nid ? "border-red-500" : ""}`}
                      {...register("nid", {
                        required: "NID is required",
                        pattern: {
                          value: /^\d{10,17}$/,
                          message: "NID must be 10-17 digits",
                        },
                      })}
                    />
                  </div>
                  {errors.nid && (
                    <p className="text-red-400 text-xs mt-1">{errors.nid.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-300 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="Enter phone"
                      className={`pl-10 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300 ${errors.phone ? "border-red-500" : ""}`}
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^01[3-9]\d{8}$/,
                          message: "Enter valid BD phone (01XXXXXXXXX)",
                        },
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className={`pl-10 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300 ${errors.email ? "border-red-500" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className={`pl-10 pr-10 bg-white/5 border-white/20 text-white focus:border-blue-500 transition-colors duration-300 ${errors.password ? "border-red-500" : ""}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" },
                      validate: {
                        hasUppercase: (v) => /[A-Z]/.test(v) || "Must contain uppercase letter",
                        hasNumber: (v) => /\d/.test(v) || "Must contain a number",
                        hasSpecial: (v) => /[!@#$%^&*]/.test(v) || "Must contain special character (!@#$%^&*)",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                )}
                {password && (
                  <div className="mt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${passwordStrength.color} transition-all duration-300`}
                          style={{ width: `${passwordStrength.level * 33}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{passwordStrength.text}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {validationHints.map((h) => (
                        <div key={h.text} className="flex items-center gap-1 text-xs">
                          {h.valid ? (
                            <CheckCircle className="h-3 w-3 text-green-400" />
                          ) : (
                            <XCircle className="h-3 w-3 text-gray-500" />
                          )}
                          <span className={`transition-colors duration-300 ${h.valid ? "text-green-400" : "text-gray-500"}`}>
                            {h.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-premium text-white font-semibold py-3 hover:scale-105 transition-transform duration-300"
              >
                {isSubmitting ? "Creating ...." : "Create Account"}
              </Button>

              <div className="relative">
                <Separator className="bg-white/10" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-gray-400">
                  or
                </span>
              </div>

              <GoogleSignInButton />

              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function RegisterFormClient() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RegisterFormContent />
    </Suspense>
  );
}
