"use server";

export const booking = async (bookingData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    return response.json({ massage: "Something went wrong!" });
  }
  return response.json();
};

export const getBookings = async (email) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/booking?email=${encodeURIComponent(email)}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return [];
  }
  return response.json();
};
