'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Baby, UserCheck, Stethoscope, CheckCircle, ArrowRight, Star, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const serviceData = {
  'baby-care': {
    title: 'Baby Care Services',
    description: 'Professional newborn and infant care with certified caregivers',
    icon: Baby,
    gradient: 'from-pink-500 to-rose-500',
    price: 'Starting from $25/hour',
    features: ['Certified pediatric nurses', '24/7 availability', 'Feeding support', 'Developmental tracking', 'Newborn care', 'Medication administration'],
    benefits: ['Peace of mind for parents', 'Professional expertise', 'Flexible scheduling', 'Emergency response'],
  },
  'elderly-care': {
    title: 'Elderly Care Services',
    description: 'Compassionate senior care services for independent living',
    icon: UserCheck,
    gradient: 'from-blue-500 to-cyan-500',
    price: 'Starting from $20/hour',
    features: ['Certified geriatric specialists', 'Daily living assistance', 'Medication management', 'Health monitoring', 'Transportation', 'Meal preparation'],
    benefits: ['Maintain independence', 'Professional monitoring', 'Companionship', 'Family peace of mind'],
  },
  'sick-care': {
    title: 'Sick Care Services',
    description: 'Specialized medical care and recovery support at home',
    icon: Stethoscope,
    gradient: 'from-green-500 to-emerald-500',
    price: 'Starting from $30/hour',
    features: ['Licensed nurses', 'Post-surgery recovery', 'Chronic illness management', 'Physical therapy', 'Wound care', 'Emergency response'],
    benefits: ['Recover at home', 'Medical supervision', 'Reduced readmissions', 'Personalized care'],
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.service_id;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">The service you are looking for does not exist.</p>
          <Link href="/"><Button className="btn-premium text-white">Back to Home</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2">{service.price}</Badge>
              <Link href={`/booking/${serviceId}`}><Button size="lg" className="btn-premium text-white font-semibold px-8 py-4 animate-glow">Book Service Now<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold text-white mb-8">What is Included</h2>
              {isLoading ? (
                <div className="space-y-4">{[1,2,3,4,5,6].map(i => <Skeleton key={i} className="h-12 w-full" />)}</div>
              ) : (
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div key={feature} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start space-x-3 p-4 rounded-lg glass-card border-white/10">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <Card key={benefit} className="glass-card border-white/10">
                    <CardContent className="p-6 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-white font-medium">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="glass-card border-white/10 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}</div>
                  <p className="text-gray-300 mb-4 italic">&quot;The care team was incredible and professional.&quot;</p>
                  <div className="font-semibold text-white">- Happy Customer</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <Card className="glass-card border-white/20 shadow-2xl">
          <CardContent className="p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-white">{service.title}</div>
              <div className="text-sm text-green-400">{service.price}</div>
            </div>
            <Link href={`/booking/${serviceId}`}><Button className="btn-premium text-white">Book Now</Button></Link>
          </CardContent>
        </Card>
      </div>

      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our care coordinators are available 24/7 to help you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 h-5 w-5" />Call (555) 123-4567</Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Mail className="mr-2 h-5 w-5" />Email Support</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}