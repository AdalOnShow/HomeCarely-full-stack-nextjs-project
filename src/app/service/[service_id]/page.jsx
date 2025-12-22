'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Baby, UserCheck, Stethoscope, CheckCircle, ArrowRight, ArrowLeft,
  Clock, Heart, Users, BadgeCheck, Sparkles
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const serviceData = {
  'baby-care': {
    title: 'Baby Sitting & Newborn Care',
    shortDescription: 'Professional, loving care for your little ones with certified pediatric specialists.',
    fullDescription: 'Our baby care service provides comprehensive support for infants and toddlers, ensuring their safety, development, and happiness while giving parents peace of mind.',
    icon: Baby,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-900/30 via-rose-900/20 to-purple-900/20',
    pricing: { hourly: 25, daily: 180, currency: '$' },
    included: [
      { text: 'Certified pediatric caregivers', icon: BadgeCheck },
      { text: 'Feeding & nutrition support', icon: Heart },
      { text: 'Diaper changing & hygiene care', icon: Sparkles },
      { text: 'Sleep routine management', icon: Clock },
      { text: 'Developmental activity engagement', icon: Users },
      { text: 'Daily progress reports', icon: CheckCircle },
    ],
    targetAudience: [
      'Working parents needing reliable childcare',
      'Parents seeking respite or date night coverage',
      'Families with newborns requiring specialized care',
      'Parents of multiples needing extra support',
    ],
  },
  'elderly-care': {
    title: 'Elderly Care at Home',
    shortDescription: 'Compassionate senior care that preserves dignity and promotes independence.',
    fullDescription: 'Our elderly care service helps seniors maintain independence while receiving needed support.',
    icon: UserCheck,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-900/30 via-cyan-900/20 to-purple-900/20',
    pricing: { hourly: 22, daily: 160, currency: '$' },
    included: [
      { text: 'Certified geriatric care specialists', icon: BadgeCheck },
      { text: 'Medication reminders & management', icon: Clock },
      { text: 'Mobility & transfer assistance', icon: Users },
      { text: 'Meal preparation & nutrition', icon: Heart },
      { text: 'Companionship & social engagement', icon: Sparkles },
      { text: 'Light housekeeping & errands', icon: CheckCircle },
    ],
    targetAudience: [
      'Seniors wanting to age in place safely',
      'Families seeking support for aging parents',
      'Individuals recovering from hospital stays',
      'Those needing dementia or Alzheimers care',
    ],
  },
  'sick-care': {
    title: 'Sick Care & Recovery Support',
    shortDescription: 'Expert medical care and recovery assistance in the comfort of your home.',
    fullDescription: 'Our sick care service provides professional medical support for individuals recovering from illness, surgery, or managing chronic conditions.',
    icon: Stethoscope,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-900/30 via-emerald-900/20 to-teal-900/20',
    pricing: { hourly: 35, daily: 250, currency: '$' },
    included: [
      { text: 'Licensed registered nurses', icon: BadgeCheck },
      { text: 'Post-surgical recovery care', icon: Heart },
      { text: 'Wound care & dressing changes', icon: Sparkles },
      { text: 'Vital signs monitoring', icon: Clock },
      { text: 'Physical therapy assistance', icon: Users },
      { text: 'Medication administration', icon: CheckCircle },
    ],
    targetAudience: [
      'Patients recovering from surgery',
      'Individuals with chronic illness',
      'Those requiring post-hospitalization care',
      'Patients needing palliative support',
    ],
  }
};

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.service_id;
  const [isLoading, setIsLoading] = useState(true);
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowSticky(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container mx-auto px-4 text-center max-w-lg">
            <div className="glass-card border-white/10 rounded-2xl p-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-gray-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
              <p className="text-gray-400 mb-8 leading-relaxed">We could not find the service you are looking for.</p>
              <Link href="/">
                <Button size="lg" className="btn-premium text-white font-semibold px-8">
                  <ArrowLeft className="mr-2 h-5 w-5" />Back to Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${service.bgGradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        
        <div className="absolute right-10 top-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {isLoading ? (
              <div className="space-y-6">
                <Skeleton className="h-20 w-20 rounded-2xl mx-auto" />
                <Skeleton className="h-12 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
              </div>
            ) : (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={scaleIn} className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r ${service.gradient} mb-8 shadow-2xl`}>
                  <Icon className="h-12 w-12 text-white" />
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {service.shortDescription}
                </motion.p>
                
                <motion.div variants={fadeInUp}>
                  <Link href={`/booking/${serviceId}`}>
                    <Button size="lg" className="btn-premium text-white font-semibold px-10 text-lg hover:scale-105 transition-transform">
                      Book Service <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <div className="glass-card border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About This Service</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.fullDescription}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    What is Included
                  </h3>
                  <ul className="space-y-3">
                    {service.included.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <item.icon className="h-4 w-4 mr-3 text-gray-400" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-400" />
                    Who This is For
                  </h3>
                  <ul className="space-y-3">
                    {service.targetAudience.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <ArrowRight className="h-4 w-4 mr-3 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Pricing</h2>
            <div className="glass-card border-white/10 rounded-2xl p-8">
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Hourly</Badge>
                  <p className="text-3xl font-bold text-white">{service.pricing.currency}{service.pricing.hourly}</p>
                  <p className="text-gray-400 text-sm">per hour</p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">Daily</Badge>
                  <p className="text-3xl font-bold text-white">{service.pricing.currency}{service.pricing.daily}</p>
                  <p className="text-gray-400 text-sm">per day</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href={`/booking/${serviceId}`}>
                  <Button size="lg" className="btn-premium text-white font-semibold px-10">
                    Book Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      {showSticky && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon className={`h-8 w-8 text-white`} />
              <span className="text-white font-semibold hidden sm:block">{service.title}</span>
            </div>
            <Link href={`/booking/${serviceId}`}>
              <Button className="btn-premium text-white font-semibold">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
