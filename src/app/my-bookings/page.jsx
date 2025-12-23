import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MyBookingsList from '@/components/MyBookingsList';

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Bookings</h1>
            <p className="text-gray-400">Manage and track your care service bookings</p>
          </div>
          <MyBookingsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
