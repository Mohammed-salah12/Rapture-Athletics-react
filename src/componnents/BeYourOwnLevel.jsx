import { useGSAP } from "@gsap/react"; // Ensure this is actually used if needed
import "../assets/beYourOwnLevel.css";
import beYourOwnLevel from "../imgs/beYourOwnLevel.png";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const BeYourOwnLevel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              duration: 1,
              x: 0,
              delay: 0.1,
              ease: "power3.out",
            });
            observer.unobserve(entry.target); // Optional: Unobserve after animation
          }
        });
        gsap.to(containerRef.current, {
          ease: "back.inOut",
          smoothOrigin: true,
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="beYourOwnLevelContainerDiv w-full flex justify-center opacity-0"
      ref={containerRef}
    >
      <div className="holder flex w-3/4 m-44 gap-20">
        <div className="imgBoxLevel">
          <img src={beYourOwnLevel} alt="" className="beYourOwnLevelImg" />
        </div>
        <div className="content">
          <h1 className="headingLevel">
            Be your <br /> Own Level
          </h1>
          <p className="description">
            The right shoes can take any outfit from basic to stylish with just
            a few steps. At our shoe store, we have a wide variety of stylish
            shoes to help you create the perfect look. From contemporary
            sneakers to classic loafers, we have something to match all tastes
            and occasions. Our shoes are designed to be comfortable, durable,
            and fashionable, so you can look and feel your best no matter what
            you’re wearing.
          </p>
          <button className="shopBtn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default BeYourOwnLevel;
