'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Baby, UserCheck, Stethoscope, Clock, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const serviceInfo = {
  'baby-care': { title: 'Baby Care', icon: Baby, gradient: 'from-pink-500 to-rose-500', hourlyRate: 25, dailyRate: 180 },
  'elderly-care': { title: 'Elderly Care', icon: UserCheck, gradient: 'from-blue-500 to-cyan-500', hourlyRate: 20, dailyRate: 150 },
  'sick-care': { title: 'Sick Care', icon: Stethoscope, gradient: 'from-green-500 to-emerald-500', hourlyRate: 30, dailyRate: 220 }
};

const divisions = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'];
const districts = ['Dhaka', 'Gazipur', 'Narayanganj', 'Manikganj'];
const cities = ['Dhaka City', 'Savar', 'Tongi', 'Keraniganj'];
const areas = ['Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur'];

const steps = [
  { number: 1, title: 'Duration', icon: Clock },
  { number: 2, title: 'Location', icon: MapPin },
  { number: 3, title: 'Confirm', icon: CheckCircle }
];

export default function BookingForm({ serviceId }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    duration: '', durationType: '', division: '', district: '', city: '', area: '', address: '', totalCost: 0
  });

  const service = serviceInfo[serviceId];
  const Icon = service?.icon || Baby;

  useEffect(() => {
    if (bookingData.duration && bookingData.durationType && service) {
      const duration = parseInt(bookingData.duration) || 0;
      const rate = bookingData.durationType === 'hours' ? service.hourlyRate : service.dailyRate;
      setBookingData(prev => ({ ...prev, totalCost: duration * rate }));
    }
  }, [bookingData.duration, bookingData.durationType, service]);

  const nextStep = () => currentStep < 3 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  const canProceed = () => {
    if (currentStep === 1) return bookingData.duration && bookingData.durationType;
    if (currentStep === 2) return bookingData.division && bookingData.district && bookingData.city && bookingData.area && bookingData.address;
    return true;
  };

  if (!service) return null;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Book {service.title}</h1>
          <p className="text-gray-400">Complete your booking in simple steps</p>
        </div>

        <div className="flex items-center justify-center mb-10 gap-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${isCompleted ? 'bg-green-500 border-green-500' : isActive ? 'bg-blue-500 border-blue-500' : 'border-gray-600 bg-gray-800'}`}>
                  {isCompleted ? <CheckCircle className="h-5 w-5 text-white" /> : <StepIcon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />}
                </div>
                <span className={`ml-2 text-sm hidden sm:block transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>{step.title}</span>
                {index < steps.length - 1 && <div className={`w-12 h-0.5 mx-3 transition-colors duration-300 ${isCompleted ? 'bg-green-500' : 'bg-gray-600'}`} />}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className={`transition-opacity duration-300 ${currentStep === 1 ? 'opacity-100' : 'hidden'}`}>
              <Card className="glass-card border-white/10">
                <CardHeader><CardTitle className="text-white flex items-center"><Clock className="mr-2 h-5 w-5" />Select Duration</CardTitle><CardDescription className="text-gray-400">How long do you need our services?</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                  <div><label className="block text-sm text-gray-300 mb-2">Duration Type</label>
                    <Select value={bookingData.durationType} onValueChange={(v) => setBookingData(p => ({ ...p, durationType: v }))}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent><SelectItem value="hours">Hourly (${service.hourlyRate}/hr)</SelectItem><SelectItem value="days">Daily (${service.dailyRate}/day)</SelectItem></SelectContent>
                    </Select>
                  </div>
                  <div><label className="block text-sm text-gray-300 mb-2">Number of {bookingData.durationType || 'hours/days'}</label>
                    <Input type="number" min="1" placeholder="Enter duration" className="bg-white/5 border-white/20 text-white" value={bookingData.duration} onChange={(e) => setBookingData(p => ({ ...p, duration: e.target.value }))} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-opacity duration-300 ${currentStep === 2 ? 'opacity-100' : 'hidden'}`}>
              <Card className="glass-card border-white/10">
                <CardHeader><CardTitle className="text-white flex items-center"><MapPin className="mr-2 h-5 w-5" />Location Details</CardTitle><CardDescription className="text-gray-400">Where should we provide the service?</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm text-gray-300 mb-2">Division</label>
                      <Select value={bookingData.division} onValueChange={(v) => setBookingData(p => ({ ...p, division: v }))}><SelectTrigger className="bg-white/5 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{divisions.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent></Select>
                    </div>
                    <div><label className="block text-sm text-gray-300 mb-2">District</label>
                      <Select value={bookingData.district} onValueChange={(v) => setBookingData(p => ({ ...p, district: v }))}><SelectTrigger className="bg-white/5 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{districts.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent></Select>
                    </div>
                    <div><label className="block text-sm text-gray-300 mb-2">City</label>
                      <Select value={bookingData.city} onValueChange={(v) => setBookingData(p => ({ ...p, city: v }))}><SelectTrigger className="bg-white/5 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{cities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select>
                    </div>
                    <div><label className="block text-sm text-gray-300 mb-2">Area</label>
                      <Select value={bookingData.area} onValueChange={(v) => setBookingData(p => ({ ...p, area: v }))}><SelectTrigger className="bg-white/5 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent>{areas.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}</SelectContent></Select>
                    </div>
                  </div>
                  <div><label className="block text-sm text-gray-300 mb-2">Full Address</label>
                    <Input placeholder="House/Flat, Road, Block..." className="bg-white/5 border-white/20 text-white" value={bookingData.address} onChange={(e) => setBookingData(p => ({ ...p, address: e.target.value }))} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-opacity duration-300 ${currentStep === 3 ? 'opacity-100' : 'hidden'}`}>
              <Card className="glass-card border-white/10">
                <CardHeader><CardTitle className="text-white flex items-center"><CheckCircle className="mr-2 h-5 w-5" />Confirm Booking</CardTitle><CardDescription className="text-gray-400">Review your booking details</CardDescription></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between"><span>Service:</span><span className="text-white">{service.title}</span></div>
                    <div className="flex justify-between"><span>Duration:</span><span className="text-white">{bookingData.duration} {bookingData.durationType}</span></div>
                    <div className="flex justify-between"><span>Location:</span><span className="text-white">{bookingData.area}, {bookingData.city}</span></div>
                    <Separator className="bg-white/10" />
                    <div className="flex justify-between text-lg font-semibold"><span>Total:</span><span className="text-green-400">${bookingData.totalCost}</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
              {currentStep < 3 ? (<Button onClick={nextStep} disabled={!canProceed()} className="btn-premium text-white hover:scale-105 transition-transform duration-300">Next<ArrowRight className="ml-2 h-4 w-4" /></Button>) : (<Button disabled className="btn-premium text-white opacity-50">Confirm Booking</Button>)}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="glass-card border-white/10 sticky top-24">
              <CardHeader><CardTitle className="text-white">Cost Summary</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300"><span>Service</span><span>{service.title}</span></div>
                  <div className="flex justify-between text-gray-300"><span>Rate</span><span>${bookingData.durationType === 'days' ? service.dailyRate : service.hourlyRate}/{bookingData.durationType === 'days' ? 'day' : 'hr'}</span></div>
                  <div className="flex justify-between text-gray-300"><span>Duration</span><span>{bookingData.duration || 0} {bookingData.durationType || '-'}</span></div>
                  <Separator className="bg-white/10" />
                  <div className="flex justify-between text-xl font-bold"><span className="text-white">Total</span><span className="text-green-400">${bookingData.totalCost}</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
