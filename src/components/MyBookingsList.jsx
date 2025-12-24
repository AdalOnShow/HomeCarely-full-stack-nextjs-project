"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Clock, Eye, X, Baby, UserCheck, Stethoscope, Loader2 } from "lucide-react";
import { getBookings } from "@/services/booking.service";

const serviceConfig = {
  "baby-care": {
    title: "Baby Care",
    icon: Baby,
    gradient: "from-pink-500 to-rose-500",
  },
  "elderly-care": {
    title: "Elderly Care",
    icon: UserCheck,
    gradient: "from-blue-500 to-cyan-500",
  },
  "sick-care": {
    title: "Sick Care",
    icon: Stethoscope,
    gradient: "from-green-500 to-emerald-500",
  },
};

const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1) || "";

const getStatusStyle = (status) => {
  const normalized = capitalize(status);
  switch (normalized) {
    case "Pending":
      return "status-pending";
    case "Confirmed":
      return "status-confirmed";
    case "Completed":
      return "status-completed";
    case "Cancelled":
      return "status-cancelled";
    default:
      return "";
  }
};

export default function MyBookingsList() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (status === "authenticated" && session?.user?.email) {
        setIsLoading(true);
        const data = await getBookings(session.user.email);
        setBookings(data);
        setIsLoading(false);
      } else if (status === "unauthenticated") {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, [session, status]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">📋</div>
        <h2 className="text-2xl font-bold text-white mb-4">No Bookings Yet</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          You haven&apos;t made any bookings yet. Start by exploring our care services.
        </p>
        <Button className="btn-premium text-white hover:scale-105 transition-transform duration-300">
          Browse Services
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {bookings.map((booking) => {
        const config = serviceConfig[booking.serviceId] || serviceConfig["baby-care"];
        const Icon = config.icon;
        const displayStatus = capitalize(booking.status);
        const durationText = `${booking.duration} ${booking.durationType}`;

        return (
          <Card
            key={booking._id}
            className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-linear-to-r ${config.gradient} flex items-center justify-center shrink-0`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-400">Service</div>
                    <div className="text-white font-medium">{config.title}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Duration
                    </div>
                    <div className="text-white">{durationText}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Location
                    </div>
                    <div className="text-white truncate" title={booking.address}>
                      {booking.address}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Total Cost</div>
                    <div className="text-green-400 font-semibold">${booking.totalCost}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`${getStatusStyle(booking.status)} border`}>
                    {displayStatus}
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card border-white/10 text-white">
                      <DialogHeader>
                        <DialogTitle>Booking Details</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Booked by {booking.userName}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Service:</span>
                          <span>{config.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span>{durationText}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location:</span>
                          <span className="text-right max-w-[200px]">{booking.address}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Date:</span>
                          <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total:</span>
                          <span className="text-green-400 font-bold">${booking.totalCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <Badge className={`${getStatusStyle(booking.status)} border`}>
                            {displayStatus}
                          </Badge>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {(displayStatus === "Pending" || displayStatus === "Confirmed") && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all duration-300"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
