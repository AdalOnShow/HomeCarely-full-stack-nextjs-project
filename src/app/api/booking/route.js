import { dbConnect } from "../../../lib/dbConnect";

const bookingCollection = await dbConnect("bookings");

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return Response.json({ message: "Email is required" }, { status: 400 });
  }

  const bookings = await bookingCollection.find({ userEmail: email }).toArray();
  return Response.json(bookings, { status: 200 });
}

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
