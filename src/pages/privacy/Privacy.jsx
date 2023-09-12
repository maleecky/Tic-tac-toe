import React from "react";

export default function Privacy() {
  return (
    <div className=" w-full md:w-[75%] m-auto space-y-10 text-lg py-10 leading-relaxed font-normal">
      All rights reserved for this site. imitating it without giving proper
      credit to the developer is not fair. Please note that the data on this
      site will be stored in local storage.{" "}
      <span className="underline text-red-400 underline-offset-4">
        We strongly advise against providing sensitive information,
      </span>{" "}
      such as passwords,to this site, as it may lead to a potential security
      breach and the exposure of your most sensitive data. Your privacy and data
      security are important to us, and we take measures to protect your
      information.
    </div>
  );
}
