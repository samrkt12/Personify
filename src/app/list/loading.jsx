import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="h-screen mx-auto flex justify-center items-start">
      <div className="px-4 py-6 md:px-20 md:py-12 mt-12 rounded-lg">
        <h1 className="mt-4 text-xl md:text-3xl font-semibold mb-6 md:mb-12 text-center underline">
          People List
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-12 md:gap-y-12">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-[200px] md:w-[300px] px-4 md:px-6 py-4 drop-shadow-xl rounded-md shadow-xl bg-[rgba(255,255,255,0.085)] relative animate-pulse-fast h-[200px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
