import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Person from "@/models/Person";

export const POST = async (request) => {
  const data = await request.json();
  await connect();
  const newPerson = new Person({ ...data });
  try {
    await newPerson.save();

    return new NextResponse("Person added", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const GET = async (request) => {
  try {
    await connect();
    const people = await Person.find();
    return new NextResponse(JSON.stringify(people), { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};
