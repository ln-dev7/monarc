import React from "react";
import HeroSection from "../Components/HomePage/HeroSection";
import Join from "../Components/HomePage/Join";
import Main from "../Components/HomePage/Main";

export default function HomePage() {
  return (
    <div className="homePage">
      <HeroSection />
      <Main />
      <Join />
    </div>
  );
}
