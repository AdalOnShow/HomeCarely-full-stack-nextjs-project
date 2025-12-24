import { dbConnect } from "../../../lib/dbConnect";

const bookingCollection = await dbConnect("bookings");
export async function POST(req) {
  const reqBody = await req.json();

  const newBooking = {
    ...reqBody,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  await bookingCollection.insertOne(newBooking);
  return Response.json(
    { message: "Services booked successfull" },
    { status: 201 }
  );
}
