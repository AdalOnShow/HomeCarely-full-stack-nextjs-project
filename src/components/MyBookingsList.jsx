"use client";

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
import {
  Calendar,
  MapPin,
  Clock,
  Eye,
  X,
  Baby,
  UserCheck,
  Stethoscope,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    service: "Baby Care",
    icon: Baby,
    duration: "8 hours",
    location: "Dhanmondi, Dhaka",
    cost: 200,
    status: "Confirmed",
    date: "2024-01-15",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    service: "Elderly Care",
    icon: UserCheck,
    duration: "3 days",
    location: "Gulshan, Dhaka",
    cost: 450,
    status: "Pending",
    date: "2024-01-18",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    service: "Sick Care",
    icon: Stethoscope,
    duration: "5 days",
    location: "Banani, Dhaka",
    cost: 1100,
    status: "Completed",
    date: "2024-01-10",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    service: "Baby Care",
    icon: Baby,
    duration: "4 hours",
    location: "Uttara, Dhaka",
    cost: 100,
    status: "Cancelled",
    date: "2024-01-05",
    gradient: "from-pink-500 to-rose-500",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
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
  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-6">📋</div>
        <h2 className="text-2xl font-bold text-white mb-4">No Bookings Yet</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          You haven&apos;t made any bookings yet. Start by exploring our care
          services.
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
        const Icon = booking.icon;
        return (
          <Card
            key={booking.id}
            className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-linear-to-r ${booking.gradient} flex items-center justify-center shrink-0`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-400">Service</div>
                    <div className="text-white font-medium">
                      {booking.service}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Duration
                    </div>
                    <div className="text-white">{booking.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Location
                    </div>
                    <div className="text-white">{booking.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Total Cost</div>
                    <div className="text-green-400 font-semibold">
                      ${booking.cost}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`${getStatusStyle(booking.status)} border`}>
                    {booking.status}
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
                          Booking #{booking.id}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Service:</span>
                          <span>{booking.service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span>{booking.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location:</span>
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Date:</span>
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Total:</span>
                          <span className="text-green-400 font-bold">
                            ${booking.cost}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <Badge
                            className={`${getStatusStyle(
                              booking.status
                            )} border`}
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {(booking.status === "Pending" ||
                    booking.status === "Confirmed") && (
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
