"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PersonForm from "./PersonForm";
import { gsap } from "gsap";
import { toast } from "react-toastify";

const PersonAdd = () => {
  const [loading, setLoading] = useState(false);
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

  const addPersonHandler = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("/api/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        toast.success("Person added successfully.");
        reset();
      } else throw new Error("Error adding person!");
    } catch (err) {
      toast.error("Error adding, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen mb:0 mt-16 py-20 md:pt-8 mx-auto flex justify-center items-center">
      <div className=" px-6 py-6 md:px-12 md:py-12 rounded-lg shadow-xl drop-shadow-xl bg-[rgba(255,255,255,0.1)]">
        <div ref={animatedDivRef}>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-12 text-center underline">
            Add New Person
          </h1>
          <PersonForm
            register={register}
            onSubmit={handleSubmit(addPersonHandler)}
            errors={errors}
            control={control}
            loading={loading}
            Controller={Controller}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonAdd;
