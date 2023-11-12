import React, { useState } from "react";
import Section from "./Section";
import { useGlobalContext } from "./context";
import Customize from "./Customize";

const Header = () => {
  const { handleClearResume, handleLoadExample, showSection } =
    useGlobalContext();

  return (
    <section className=" w-40 lg:w-96">
      <div className=" w-40 space-y-12 pt-12 pb-12 m-auto flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0">
        <button
          className=" btn btn-error w-32 m-auto"
          onClick={handleClearResume}
        >
          clear resume
        </button>
        <button
          className=" btn btn-success w-32 m-auto"
          onClick={handleLoadExample}
        >
          load example resume
        </button>
      </div>
      {showSection ? <Section /> : <Customize />}
    </section>
  );
};

export default Header;
