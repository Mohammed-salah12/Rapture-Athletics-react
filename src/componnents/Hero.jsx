import { useGSAP } from "@gsap/react";
import "../assets/Hero.css";
import HeroImg from "../imgs/heroImg.png";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".heroContainerDiv", {
      opacity: 1,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });
  });

  const headRef = useRef(null);

  useGSAP(() => {
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
        <h1 className="text-6xl heroTextB">
          Step Into Style with <br /> Our Trendy Shoes!
        </h1>
        <h3 className="year">2024</h3>
        <p className="description">
          Our collections include a wide range of shoes for <br /> men, women,
          and children.
        </p>
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
