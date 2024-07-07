import Navbar from "./componnents/Navbar";
import Hero from "./componnents/Hero";
import SocialMedia from "./componnents/SocialMedia";
import BeYourOwnLevel from "./componnents/BeYourOwnLevel";
import { useCallback, useEffect, useState } from "react";
import Trending from "./componnents/Trending";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SocialMedia />
      <BeYourOwnLevel />
      <Trending />
    </div>
  );
}
