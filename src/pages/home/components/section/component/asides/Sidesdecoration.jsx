import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../../../assets/Jsons/animation_lm3dum6r.json";

export default function Sidesdecoration() {
  return (
    <div className="hidden md:block">
      <Lottie animationData={animationData} />
    </div>
  );
}
