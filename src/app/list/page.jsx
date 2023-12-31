import PersonCard from "@/components/PersonCard";
import React from "react";

async function getData() {
  try {
    const res = await fetch(`https://personify-sage.vercel.app/api/person`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const List = async () => {
  const peopleData = await getData();

  return (
    <div className="h-screen mx-auto flex justify-center items-start">
      <div className="px-4 py-6 md:px-20 md:py-12 mt-12 rounded-lg">
        <div className="w-fit px-6 py-3 rounded-lg shadow-xl mb-6 md:mb-12 drop-shadow-xl bg-[rgba(255,255,255,0.1)] mx-auto">
          <h1 className=" text-xl md:text-3xl font-semibold  text-center uppercase tracking-[8px] flex items-center">
            People
            <span className="ml-4 pl-2  md:text-4xl">List</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-12 md:gap-y-12 ">
          {peopleData &&
            peopleData.map((person) => (
              <PersonCard key={person._id} {...person} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
