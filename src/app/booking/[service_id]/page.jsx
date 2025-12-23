import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const validServices = ['baby-care', 'elderly-care', 'sick-care'];

export function generateStaticParams() {
  return validServices.map((id) => ({ service_id: id }));
}

export default async function BookingPage({ params }) {
  const { service_id } = await params;
  
  if (!validServices.includes(service_id)) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <BookingForm serviceId={service_id} />
      <Footer />
    </div>
  );
}
