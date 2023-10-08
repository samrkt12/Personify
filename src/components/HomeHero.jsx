"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HomeHero = () => {
  const heroSectionRef = useRef(null);
  const bgRef = useRef(null);
  const mountainLeft = useRef(null);
  const mountainRight = useRef(null);
  const clouds1 = useRef(null);
  const clouds2 = useRef(null);
  const headingLeft1 = useRef(null);
  const headingRight1 = useRef(null);
  const headingLeft2 = useRef(null);
  const headingRight2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const t = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 0",
          end: "3500 203",
          scrub: true,
          pin: true,
        },
      });
      t.to(
        mountainLeft.current,
        {
          x: "-20%",
          duration: 4,
        },
        0
      );
      t.to(
        mountainRight.current,
        {
          x: "20%",
          duration: 4,
        },
        0
      );
      t.to(
        bgRef.current,
        {
          scale: 1.2,
          duration: 4,
        },
        0
      );
      t.to(
        clouds1.current,
        {
          x: 200,
          duration: 4,
        },
        0
      );
      t.to(
        clouds2.current,
        {
          x: -200,
          duration: 4,
        },
        0
      );
      t.from(
        headingLeft1.current,
        {
          x: -400,
          y: -200,
          fontSize: 0,
          duration: 1,
          opacity: 0,
        },
        0
      );
      t.from(
        headingRight1.current,
        {
          x: 400,
          y: -100,
          fontSize: 0,
          duration: 1,
          opacity: 0,
        },
        0.6
      );
      t.from(
        headingLeft2.current,
        {
          x: -400,
          y: 200,
          fontSize: 0,
          duration: 1,
          opacity: 0,
        },
        1.2
      );
      t.from(
        headingRight2.current,
        {
          x: 400,
          y: 100,
          fontSize: 0,
          duration: 1,
          opacity: 0,
        },
        1.8
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[4000px]">
      <section
        ref={heroSectionRef}
        className="h-screen relative w-full overflow-hidden flex items-center justify-center"
      >
        <img
          src="/hero/bg.jpg"
          ref={bgRef}
          alt="background-scenary"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div className="flex flex-col space-y-6  text-center text-5xl md:text-8xl ">
          <h1
            ref={headingLeft1}
            className=" font-bold relative uppercase tracking-widest text-white bg-black pl-4"
          >
            Connect,
          </h1>
          <h1
            ref={headingRight1}
            className=" font-bold relative uppercase tracking-widest text-black bg-white pl-4"
          >
            Discover,
          </h1>
          <h1
            ref={headingLeft2}
            className="  font-bold relative uppercase tracking-widest text-white bg-black pl-4"
          >
            Organize,
          </h1>
          <h1
            ref={headingRight2}
            className=" font-bold relative uppercase tracking-widest text-black bg-white pl-4"
          >
            Personify
          </h1>
        </div>

        <img
          src="/hero/clouds_1.png"
          alt="Cloud 1"
          ref={clouds1}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <img
          src="/hero/clouds_2.png"
          alt="Cloud 2"
          ref={clouds2}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <img
          src="/hero/mountain_left.png"
          alt="Left mountain"
          ref={mountainLeft}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <img
          src="/hero/mountain_right.png"
          alt="Right mountain"
          ref={mountainRight}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div
          className="absolute bottom-[0] left-0 w-full h-[150px]"
          style={{ background: "linear-gradient(to top, #fff, transparent)" }}
        ></div>
      </section>
    </div>
  );
};

export default HomeHero;
