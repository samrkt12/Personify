import Person from "@/models/Person";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { personId } = params;
  try {
    await connect();
    const p = await Person.findById(personId);
    return new NextResponse(JSON.stringify(p), { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { personId } = params;
  const data = await request.json();
  try {
    await connect();
    const updatedPerson = await Person.findByIdAndUpdate(personId, data, {
      new: true,
    });
    return new NextResponse(JSON.stringify(updatedPerson), { status: 200 });
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { personId } = params;
  try {
    await connect();
    const deletedPerson = await Person.findByIdAndDelete(personId);
    if (deletedPerson) {
      return new NextResponse("Person deleted successfully", { status: 200 });
    } else {
      return new NextResponse("Person not found", { status: 404 });
    }
  } catch (err) {
    return new NextResponse(`Error: ${err.message}`, { status: 500 });
  }
};
