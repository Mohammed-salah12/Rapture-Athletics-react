import bootsImg from "../imgs/bootsImg.png";
import social from "../assets/social.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const SocialMedia = () => {
  useGSAP(() => {
    const element = socialMediaRef.current;

    gsap.fromTo(
      element,
      { x: "-100%" },
      {
        x: -30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);
  const socialMediaRef = useRef(null);

  return (
    <div
      className="socialMediaContainerDiv w-full h-72 flex text-3xl mt-20"
      ref={socialMediaRef}
    >
      <div className="imgBox w-72">
        <img src={bootsImg} alt="" />
      </div>
      <div className="social flex gap-24 translate-x-36 translate-y-28 text-white">
        <div className="facebook">
          <a href="#">Facebook</a>
        </div>
        <div className="facebook">
          <a href="#">Instagram</a>
        </div>
        <div className="facebook">
          <a href="#">Twitter</a>
        </div>

        <div className="exploreMore  h-72">
          <a href="#">Explore More</a>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
