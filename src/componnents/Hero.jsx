import { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import "../assets/Hero.css";
import HeroImg from "../imgs/heroImg.png";

const Hero = () => {
  const [heroData, setHeroData] = useState({ title: "", description: "" });
  const headRef = useRef(null);

  useEffect(() => {
    // Fetch data from the Laravel API
    axios
      .get("http://127.0.0.1:8001/api/heroes")
      .then((response) => {
        setHeroData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the hero data!", error);
      });
  }, []);

  useEffect(() => {
    gsap.to(".heroContainerDiv", {
      opacity: 1,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const head = headRef.current;

    // Initial position and scale
    gsap.set(head, { y: 0 });

    // Animation timeline
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to(head, { duration: 0.5, x: 20, ease: "power2.inOut" })
      .to(head, { duration: 0.5, x: 0, ease: "bounce.out" });

    return () => {
      timeline.kill(); // Kill the timeline on component unmount
    };
  }, []);

  return (
    <div className="heroContainerDiv opacity-0">
      <div className="heroText  flex gap-6 flex-col ">
        <h1 className="text-6xl heroTextB">{heroData.title}</h1>
        <p className="description">{heroData.description}</p>
        <button className="shopBtn">Shop Now</button>
      </div>
      <div className="imgholeder flex justify-end translate-x-40">
        <div className="heroImgContainer">
          <img
            ref={headRef}
            src={HeroImg}
            alt=""
            className="heroImg translate-x-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
