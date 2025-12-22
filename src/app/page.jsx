'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Heart, Shield, Clock, Users, Baby, UserCheck, Stethoscope,
  Star, CheckCircle, ArrowRight, Play
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'baby-care',
      title: 'Baby Care',
      description: 'Professional newborn and infant care with certified caregivers',
      icon: Baby,
      gradient: 'from-pink-500 to-rose-500',
      features: ['24/7 Care', 'Certified Nurses', 'Feeding Support', 'Sleep Training']
    },
    {
      id: 'elderly-care',
      title: 'Elderly Care',
      description: 'Compassionate senior care services for independent living',
      icon: UserCheck,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Daily Activities', 'Medication Management', 'Companionship', 'Health Monitoring']
    },
    {
      id: 'sick-care',
      title: 'Sick Care',
      description: 'Specialized medical care and recovery support at home',
      icon: Stethoscope,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Medical Support', 'Recovery Care', 'Therapy Assistance', 'Emergency Response']
    }
  ];

  const trustMetrics = [
    { label: 'Happy Families', value: '10,000+', icon: Heart },
    { label: 'Certified Caregivers', value: '500+', icon: Shield },
    { label: 'Years of Experience', value: '15+', icon: Clock },
    { label: 'Cities Served', value: '50+', icon: Users },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 2',
      content: 'HomeCarely gave me peace of mind when I needed to return to work. Their baby care service is exceptional.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Son of Elderly Parent',
      content: 'The elderly care team helped my father maintain his independence while ensuring his safety and health.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Recovery Patient',
      content: 'After my surgery, their sick care service made my recovery smooth and comfortable at home.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">
                ✨ Trusted by 10,000+ Families
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Premium Care for
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Your Loved Ones
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional, compassionate caregiving services that bring peace of mind to your family. 
                From newborn care to elderly support, we're here when you need us most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/booking/baby-care">
                  <Button size="lg" className="btn-premium text-white font-semibold px-8 py-4 text-lg animate-glow">
                    Find Care Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/10 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Care Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive caregiving solutions tailored to your family's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  {isLoading ? (
                    <Card className="glass-card border-white/10 h-full">
                      <CardHeader>
                        <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-4 w-full" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 h-full group-hover:shadow-2xl">
                      <CardHeader>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link href={`/service/${service.id}`}>
                          <Button className="w-full btn-premium text-white group-hover:scale-105 transition-transform">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Families Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from families who trust HomeCarely with their most precious moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center glass-card border-white/10 p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust HomeCarely for their caregiving needs. 
              Professional care is just a click away.
            </p>
            <Link href="/register">
              <Button size="lg" className="btn-premium text-white font-semibold px-12 py-4 text-lg animate-glow">
                Start Your Journey
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}