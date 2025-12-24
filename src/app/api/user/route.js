import { dbConnect } from "../../../lib/dbConnect";
import bcrypt from "bcrypt";

const userCollection = await dbConnect("users");

export async function POST(req) {
  const reqBody = await req.json();

  const isUserExist = await userCollection.findOne({
    email: reqBody.email,
  });
  if (isUserExist) {
    return Response.json({ message: "User already exists" }, { status: 422 });
  } else {
    
    const hashedPassword = await bcrypt.hash(reqBody.password, 8);

    const newUser = {
      ...reqBody,
      createdAt: new Date().toISOString(),
      password: hashedPassword,
    };

    await userCollection.insertOne(newUser);
    return Response.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  }
}
