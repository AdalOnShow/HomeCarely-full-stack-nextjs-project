'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Send, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <Card className="glass-card border-white/10 hover:border-white/20 transition-all duration-300">
      <CardHeader className="p-5 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl text-white">Send us a Message</CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">We will get back to you shortly</CardDescription>
      </CardHeader>
      <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="Your name" className="pl-10 bg-white/5 border-white/20 text-white transition-colors duration-300" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input type="email" placeholder="your@email.com" className="pl-10 bg-white/5 border-white/20 text-white transition-colors duration-300" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-10 bg-white/5 border-white/20 text-white transition-colors duration-300" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea placeholder="How can we help?" rows={4} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-none transition-colors duration-300" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} />
          </div>
        </div>
        <Button className="w-full btn-premium text-white font-semibold py-3 hover:scale-105 transition-transform duration-300"><Send className="mr-2 h-4 w-4" />Send Message</Button>
      </CardContent>
    </Card>
  );
}
