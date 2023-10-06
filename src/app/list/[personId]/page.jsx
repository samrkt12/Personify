import PersonEdit from "@/components/PersonEdit";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/person/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const EditPage = async ({ params }) => {
  const data = await getData(params.personId);

  return <PersonEdit personData={{ ...data }} />;
};

export default EditPage;
