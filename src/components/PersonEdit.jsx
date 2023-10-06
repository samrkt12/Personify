"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PersonForm from "./PersonForm";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { toast } from "react-toastify";

const PersonEdit = ({ personData }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const animatedDivRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    gsap.fromTo(
      animatedDivRef.current,
      {
        y: -75,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Bounce.easeOut",
      }
    );
  }, []);

  const editPersonHandler = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/person/${personData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        toast.success("Edit success.");
        router.push("/list"); //remove
      } else throw new Error("Error editing person!");
    } catch (err) {
      toast.error("Edit failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen mb-6  py-20 md:pt-8  mx-auto flex justify-center items-center">
      <div
        className="px-6 py-6 md:px-12 md:py-12 mt-16 rounded-lg shadow-xl drop-shadow-xl bg-[rgba(255,255,255,0.1)]"
        ref={animatedDivRef}
      >
        <h1 className="text-xl md:text-3xl font-semibold mb-6 md:mb-12 text-center underline">
          Edit details
        </h1>
        <PersonForm
          register={register}
          onSubmit={handleSubmit(editPersonHandler)}
          errors={errors}
          control={control}
          loading={loading}
          personData={personData}
          Controller={Controller}
        />
      </div>
    </div>
  );
};

export default PersonEdit;
