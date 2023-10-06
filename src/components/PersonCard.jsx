"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const PersonCard = ({
  firstName,
  lastName,
  email,
  state,
  city,
  phone,
  _id,
}) => {
  const router = useRouter();
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const placeRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleAnimation = (entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    };

    const observer = new IntersectionObserver(handleAnimation, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        [contentRef.current, buttonsRef.current],
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "Elastic.easeOut",
          stagger: 0.4,
        }
      );
    }
  }, [isInView]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/person/${_id}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          toast.success("Deleted.");
          router.push("/list");
        } else if (res.status === 404) {
          toast.info("Person not found");
        } else {
          toast.error("Error deleting.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className="w-[200px] md:w-[300px] px-4 md:px-6 py-4 drop-shadow-xl rounded-md shadow-xl bg-[rgba(255,255,255,0.085)] relative"
      ref={cardRef}
    >
      <div ref={contentRef}>
        <h2
          className=" text-lg md:text-xl mb-1 font-semibold"
          ref={nameRef}
        >{`${firstName} ${lastName}`}</h2>
        <p className="text-sm md:text-base mb-1" ref={emailRef}>
          {email}
        </p>
        <p className="text-base md:text-lg mb-1" ref={phoneRef}>
          {`${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`}
        </p>
        <p className="text-sm md:text-base" ref={placeRef}>
          {city}, {state}
        </p>
      </div>

      <div className="pt-8 flex " ref={buttonsRef}>
        <Link href={`/list/${_id}`}>
          <button className="text-blue-400 text-base  mr-4 hover:underline transition duration-300 tracking-wider">
            Edit
          </button>
        </Link>
        <button
          className="text-red-400 text-base  hover:underline transition duration-300 tracking-wider"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
