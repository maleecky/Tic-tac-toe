import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../../../assets/Jsons/leftanime.json";

export default function LsideDecoration() {
  return (
    <div className="hidden md:block">
      <Lottie animationData={animationData} />
    </div>
  );
}
