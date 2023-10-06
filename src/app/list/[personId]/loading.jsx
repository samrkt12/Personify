import React from "react";

const EmptyDivSkeleton = () => {
  return (
    <div className="h-screen mb:0 mt-16 py-20 md:pt-8 mx-auto flex justify-center items-center">
      <div className=" px-6 py-6 md:px-12 md:py-12 rounded-lg shadow-xl drop-shadow-xl bg-[rgba(255,255,255,0.1)] animate-pulse-fast">
        <div className="w-[250px] h-[573px] md:h-[420px] md:w-[548px]"></div>
      </div>
    </div>
  );
};

export default EmptyDivSkeleton;
