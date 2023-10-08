"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomeFooter() {
  const [background, setBackground] = useState(20);
  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const btn = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);
  const heading4 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "9500 10",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=70",
          duration: 1.5,
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=30",
          duration: 1.5,
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=60",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.6
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: "+=450",
        },
        0
      );

      tl.fromTo(
        heading1.current,
        {
          y: "320px",
          opacity: 1,
        },
        {
          y: "-1000px",
          opacity: 1,
        },
        0
      );
      tl.fromTo(
        heading2.current,
        {
          y: "320px",
          opacity: 1,
        },
        {
          y: "-1000px",
          opacity: 1,
        },
        0.3
      );
      tl.fromTo(
        heading3.current,
        {
          y: "300px",
          opacity: 1,
        },
        {
          y: "-1000px",
          opacity: 1,
        },

        0.6
      );
      tl.fromTo(
        heading4.current,
        {
          y: "200px",
          opacity: 0,
        },
        { y: "-470px", opacity: 1 },
        0.8
      );
      tl.fromTo(
        btn.current,
        {
          y: "200px",
          opacity: 0,
        },
        { y: "-455px", opacity: 1 },
        1.1
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[10000px] overflow-hidden">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="w-full h-[110vh] relative overflow-hidden"
      >
        <img
          ref={mountain3}
          className="absolute w-full bottom-0 z-30"
          src="/parallax/mountain-3.svg"
          alt="Mountain 3"
        />

        <img
          ref={mountain2}
          className="absolute w-full bottom-[00px] z-20"
          src="/parallax/mountain-2.svg"
          alt="Mountain 2"
        />
        <img
          ref={mountain1}
          className="absolute w-full bottom-[40px] z-10"
          src="/parallax/mountain-1.svg"
          alt="Mountain 1"
        />

        <img
          ref={sun}
          className="absolute left-1/2 w-2/5"
          src="/parallax/sun.svg"
          alt="sun"
          style={{
            transform: "translate(-50%, -50%)",
            top: "45%",
          }}
        />
        <img
          ref={cloudsBottom}
          className="absolute bottom-0 w-full"
          src="/parallax/cloud-bottom.svg"
          alt="Bottom Clouds"
        />
        <img
          ref={cloudsLeft}
          className="absolute left-0 w-1/5"
          src="/parallax/clouds-left.svg"
          alt="Left clouds"
        />
        <img
          ref={cloudsRight}
          className="absolute right-0 w-1/5"
          src="/parallax/clouds-right.svg"
          alt="Right clouds"
        />
        <img
          ref={stars}
          className=" absolute top-[-650px] left-0 w-full"
          src="/parallax/stars.svg"
          alt="stars"
        />

        <div
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0
        flex justify-center items-center flex-col w-full"
        >
          <h1
            ref={heading1}
            className="text-3xl md:text-5xl text-[#fbf8f1] font-bold text-center opacity-0"
          >
            Your Digital Address Book.
          </h1>
          <h1
            ref={heading2}
            className="text-3xl md:text-5xl text-[#fbf8f1] font-bold text-center  opacity-0"
          >
            Effortless Contact Management.
          </h1>
          <h1
            ref={heading3}
            className="text-3xl text-[#fbf8f1] md:text-5xl  font-bold text-center opacity-0"
          >
            Manage Anytime, Anywhere.
          </h1>
          <h1
            ref={heading4}
            className="text-3xl text-center text-[#fbf8f1] font-bold md:text-5xl"
          >
            Stay connected with Personify.
          </h1>
          <button
            ref={btn}
            className="py-4 px-6 font-semibold rounded cursor-pointer bg-[#fbf8f1] text-black hover:bg-black hover:text-[#fbf8f1] transition-colors duration-300"
            onClick={() => {
              alert("You pressed the button.");
            }}
          >
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
