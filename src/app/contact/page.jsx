'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', subtitle: 'Mon-Fri 8am-8pm' },
    { icon: Mail, title: 'Email', value: 'support@homecarely.com', subtitle: 'We reply within 24hrs' },
    { icon: MapPin, title: 'Office', value: '123 Care Street', subtitle: 'Health City, HC 12345' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Get in </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Have questions? We are here to help you find the perfect care solution.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="glass-card border-white/10 text-center h-full">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-blue-400 font-medium text-sm sm:text-base">{info.value}</p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">{info.subtitle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card className="glass-card border-white/10">
                <CardHeader className="p-5 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">We will get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="text" placeholder="Your name" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="email" placeholder="your@email.com" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-10 bg-white/5 border-white/20 text-white" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea placeholder="How can we help?" rows={4} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-none" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} />
                    </div>
                  </div>
                  <Button className="w-full btn-premium text-white font-semibold py-3"><Send className="mr-2 h-4 w-4" />Send Message</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <Card className="glass-card border-white/10 overflow-hidden">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center relative">
                  <div className="text-center z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white font-medium">123 Care Street</p>
                    <p className="text-gray-400 text-sm">Health City, HC 12345</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card border-white/10">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex justify-between"><span className="text-gray-400">Monday - Friday</span><span className="text-white">8:00 AM - 8:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Saturday</span><span className="text-white">9:00 AM - 6:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Sunday</span><span className="text-white">10:00 AM - 4:00 PM</span></div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-sm">24/7 Emergency Care Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}