import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import "../assets/beYourOwnLevel.css";
import defaultImage from "../imgs/beYourOwnLevel.png"; // Ensure this is the path to your default image

const BeYourOwnLevel = () => {
  const [description, setDescription] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/api/be/your/own/levels")
      .then((response) => {
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.error("Error fetching Be Your Own Level data:", error);
      });
  }, []);

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
          <img
            src={defaultImage}
            alt="Be Your Own Level"
            className="beYourOwnLevelImg"
          />
        </div>
        <div className="content flex flex-wrap">
          <h1 className="headingLevel">
            Be your <br /> Own Level
          </h1>
          <p className="description ">{description}</p>
          <button className="shopBtn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default BeYourOwnLevel;
