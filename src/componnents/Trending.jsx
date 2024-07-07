import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import firstCardImg from "../imgs/firstCardImg.png";
import secCardImg from "../imgs/secCardImg.png";
import thiredCardImg from "../imgs/thiredCardImg.png";
import forthCardImg from "../imgs/forthCardImg.png";

import "../assets/trending.css";

// Default images to show if API call fails or data is not available
const defaultImages = [firstCardImg, secCardImg, thiredCardImg, forthCardImg];

export const Trending = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8001/api/trendings")
      .then((response) => {
        // Ensure there are at least 4 items and fill in default images if needed
        const dataWithImages = response.data.map((item, index) => ({
          ...item,
          img: defaultImages[index] || defaultImages[0], // Fallback to a default image if index is out of range
        }));
        setCardData(dataWithImages);
      })
      .catch((error) => {
        console.error("Error fetching trending data:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold mb-10 text-black">
        Trending in 2023
      </h1>
      <div className="trendingContainerDiv flex justify-center w-full">
        <div className="trendingHandler w-4/5 flex gap-6">
          {cardData.map((card, index) => (
            <div className="card flex flex-col gap-3 ml-5" key={index}>
              <div className="imgBox w-64">
                <img src={card.img} alt="cardImg" />
              </div>
              <div className="contentBox">
                <h2 className="text-3xl font-bold">{card.name}</h2>
                <div className="flex gap-2 items-center">
                  <div className="shield bg-light-blue-500 p-2 relative flex items-center justify-center">
                    <FaCheck className="text-white absolute -top-2 -right-2" />
                  </div>
                  <p>{card["small-prev"]}</p>
                </div>
                <button className="shopBtnn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
