'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Shield, Users, Clock, Target, Eye, Sparkles, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'We treat every client like family, with genuine care and empathy.' },
    { icon: Shield, title: 'Trust', description: 'Background-checked, certified caregivers you can rely on.' },
    { icon: Users, title: 'Respect', description: 'Honoring dignity and independence of those we serve.' },
    { icon: Sparkles, title: 'Excellence', description: 'Committed to the highest standards of care quality.' }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'HomeCarely started with a mission to transform home care.' },
    { year: '2013', title: '1,000 Families', description: 'Reached our first thousand families served milestone.' },
    { year: '2016', title: 'Expanded Services', description: 'Added elderly care and sick care to our offerings.' },
    { year: '2019', title: '10 Cities', description: 'Expanded operations to 10 major cities nationwide.' },
    { year: '2022', title: '500+ Caregivers', description: 'Built a network of over 500 certified caregivers.' },
    { year: '2024', title: '10,000+ Families', description: 'Proudly serving over 10,000 families across 50+ cities.' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">HomeCarely</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              We believe everyone deserves quality care in the comfort of their home. 
              Our mission is to provide compassionate, professional caregiving services 
              that bring peace of mind to families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-white/10 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    To deliver exceptional, personalized caregiving services that enhance the quality of life 
                    for individuals and families. We strive to be the trusted partner families turn to 
                    when they need reliable, compassionate care for their loved ones.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-white/10 h-full">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    To become the leading home care provider, recognized for excellence, innovation, 
                    and unwavering commitment to client satisfaction. We envision a world where 
                    quality care is accessible to every family, regardless of their circumstances.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Story</span>
            </h2>
            <div className="text-gray-300 space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-center">
              <p>
                HomeCarely was founded in 2010 by a group of healthcare professionals who saw 
                a gap in quality home care services. After experiencing firsthand the challenges 
                families face when seeking reliable caregivers, they set out to create a solution.
              </p>
              <p>
                What started as a small team of dedicated caregivers has grown into a nationwide 
                network of over 500 certified professionals. Throughout our journey, we have never 
                lost sight of our core belief: that every person deserves to be cared for with 
                dignity, respect, and genuine compassion.
              </p>
              <p>
                Today, we proudly serve over 10,000 families across 50+ cities, providing baby care, 
                elderly care, and sick care services that families can trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card border-white/10 h-full text-center">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Mobile: stacked layout */}
                  <div className="sm:hidden w-full">
                    <Card className="glass-card border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Desktop: alternating layout */}
                  <div className={`hidden sm:block sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                    <Card className="glass-card border-white/10">
                      <CardContent className="p-4 sm:p-6">
                        <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                        <h3 className="text-white font-semibold mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center dot - desktop only */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  
                  <div className="hidden sm:block sm:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}