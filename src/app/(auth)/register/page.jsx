'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Heart, Mail, Lock, Eye, EyeOff, User, Phone, CreditCard, CheckCircle, XCircle } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ nid: '', fullName: '', email: '', phone: '', password: '' });

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { level: 0, text: '', color: '' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (password.length < 10) return { level: 2, text: 'Medium', color: 'bg-yellow-500' };
    return { level: 3, text: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength();
  const validationHints = [
    { text: 'At least 8 characters', valid: formData.password.length >= 8 },
    { text: 'Contains uppercase', valid: /[A-Z]/.test(formData.password) },
    { text: 'Contains number', valid: /\d/.test(formData.password) },
    { text: 'Special character', valid: /[!@#$%^&*]/.test(formData.password) }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">HomeCarely</span>
        </Link>

        <Card className="glass-card border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Create Account</CardTitle>
            <CardDescription className="text-gray-400">Join HomeCarely for quality care</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">NID Number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type="text" placeholder="Enter NID" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.nid} onChange={(e) => setFormData(p => ({ ...p, nid: e.target.value }))} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type="text" placeholder="Enter full name" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.fullName} onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type="email" placeholder="Enter email" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type="tel" placeholder="Enter phone" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type={showPassword ? 'text' : 'password'} placeholder="Create password" className="pl-10 pr-10 bg-white/5 border-white/20 text-white" value={formData.password} onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-white">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${passwordStrength.color} transition-all`} style={{ width: `${passwordStrength.level * 33}%` }} />
                    </div>
                    <span className="text-xs text-gray-400">{passwordStrength.text}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {validationHints.map((h) => (
                      <div key={h.text} className="flex items-center gap-1 text-xs">
                        {h.valid ? <CheckCircle className="h-3 w-3 text-green-400" /> : <XCircle className="h-3 w-3 text-gray-500" />}
                        <span className={h.valid ? 'text-green-400' : 'text-gray-500'}>{h.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button className="w-full btn-premium text-white font-semibold py-3">Create Account</Button>

            <div className="relative">
              <Separator className="bg-white/10" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-gray-400">or</span>
            </div>

            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>

            <p className="text-center text-gray-400">
              Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300">Sign in</Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}