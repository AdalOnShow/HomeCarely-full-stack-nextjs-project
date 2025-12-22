'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Eye, X, Baby, UserCheck, Stethoscope } from 'lucide-react';

function EmptyState() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
      <div className="text-8xl mb-6">📋</div>
      <h2 className="text-2xl font-bold text-white mb-4">No Bookings Yet</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">You have not made any bookings yet.</p>
      <Button className="btn-premium text-white">Browse Services</Button>
    </motion.div>
  );
}

export default function MyBookingsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const bookings = [
    { id: 1, service: 'Baby Care', icon: Baby, duration: '8 hours', location: 'Dhanmondi, Dhaka', cost: 200, status: 'Confirmed', date: '2024-01-15', gradient: 'from-pink-500 to-rose-500' },
    { id: 2, service: 'Elderly Care', icon: UserCheck, duration: '3 days', location: 'Gulshan, Dhaka', cost: 450, status: 'Pending', date: '2024-01-18', gradient: 'from-blue-500 to-cyan-500' },
    { id: 3, service: 'Sick Care', icon: Stethoscope, duration: '5 days', location: 'Banani, Dhaka', cost: 1100, status: 'Completed', date: '2024-01-10', gradient: 'from-green-500 to-emerald-500' },
    { id: 4, service: 'Baby Care', icon: Baby, duration: '4 hours', location: 'Uttara, Dhaka', cost: 100, status: 'Cancelled', date: '2024-01-05', gradient: 'from-pink-500 to-rose-500' },
  ];

  const getStatusStyle = (status) => {
    const styles = { Pending: 'status-pending', Confirmed: 'status-confirmed', Completed: 'status-completed', Cancelled: 'status-cancelled' };
    return styles[status] || '';
  };

  if (bookings.length === 0) return (<div className="min-h-screen"><Navigation /><EmptyState /><Footer /></div>);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Bookings</h1>
            <p className="text-gray-400">Manage and track your care service bookings</p>
          </motion.div>
          <div className="space-y-4">
            {isLoading ? [...Array(4)].map((_, i) => (
              <Card key={i} className="glass-card border-white/10">
                <CardContent className="p-6 flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <div className="flex-1 space-y-2"><Skeleton className="h-5 w-32" /><Skeleton className="h-4 w-48" /></div>
                  <Skeleton className="h-8 w-20" />
                </CardContent>
              </Card>
            )) : bookings.map((booking, index) => {
              const Icon = booking.icon;
              return (
                <motion.div key={booking.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.01 }}>
                  <Card className="glass-card border-white/10 hover:border-white/20 transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${booking.gradient} flex items-center justify-center shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <div className="text-white font-semibold">{booking.service}</div>
                            <div className="text-sm text-gray-400 flex items-center gap-1"><Calendar className="h-3 w-3" />{booking.date}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Duration</div>
                            <div className="text-white flex items-center gap-1"><Clock className="h-4 w-4" />{booking.duration}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Location</div>
                            <div className="text-white flex items-center gap-1"><MapPin className="h-4 w-4" />{booking.location}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">Total Cost</div>
                            <div className="text-green-400 font-semibold">${booking.cost}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`${getStatusStyle(booking.status)} border`}>{booking.status}</Badge>
                          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10"><Eye className="h-4 w-4" /></Button>
                          {booking.status === 'Pending' && <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10"><X className="h-4 w-4" /></Button>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}