"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const HomeText = () => {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const animateText = (textRef) => {
        gsap.from(textRef, {
          scrollTrigger: {
            trigger: textRef,
            start: "top 100%",
            end: "top 65%",
            scrub: true,
          },
          x: -250,
          opacity: 0,
          scaleY: 0,
        });
      };

      animateText(textRef1.current);
      animateText(textRef2.current);
      animateText(textRef3.current);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <article
        className=" h-screen flex items-center  px-7 md:px-20  text-center"
        style={{
          background: "linear-gradient(to bottom, #ffffff, #87CEEB)",
        }}
      >
        <p
          className="text-3xl md:text-4xl lg:text-5xl max-w-[40ch] md:max-w-fit text-animation text-[#333] tracking-wide"
          ref={textRef1}
        >
          Explore the world of Personify, where you can discover new contacts,
          connect with friends and colleagues, and keep your contacts organized
          effortlessly.
        </p>
      </article>
      <article
        className=" h-screen flex items-center justify-center px-7  md:px-20 text-center"
        style={{
          background: "linear-gradient(to bottom,  #87CEEB, #6495ED)",
        }}
      >
        <p
          className="text-3xl md:text-4xl lg:text-5xl max-w-[40ch]  md:max-w-fit text-animation text-[#111] tracking-wide"
          ref={textRef2}
        >
          Personify is your digital address book, making it easy to manage and
          access your contacts from anywhere, anytime.
        </p>
      </article>
      <article
        className="h-screen flex items-center justify-center px-7  md:px-20 text-center"
        style={{
          background: "linear-gradient(to bottom, #6495ED, #0F2B9C)",
        }}
      >
        <p
          className="text-3xl md:text-4xl lg:text-5xl max-w-[40ch]  md:max-w-fit text-animation text-[#edf7f6] tracking-wide"
          ref={textRef3}
        >
          Say goodbye to scattered contact information. With Personify, simplify
          your contacts.
        </p>
      </article>
    </section>
  );
};

export default HomeText;
