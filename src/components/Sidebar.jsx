import React from "react";
import Header from "./Header";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { setShowSection } = useGlobalContext();
  const handleContentClick = () => {
    setShowSection(true);
  }
  const handleCustomizeClick = () => {
    setShowSection(false);
  }
  return (
    <section className=" flex flex-col lg:flex-row">
      <div className="  w-40 h-48 space-y-10 flex flex-col bg-white pt-12 rounded-md pb-24 lg:w-32">
        <button className=" text-black rounded-lg btn btn-info w-32 m-auto lg:w-24" onClick={handleContentClick}>
          content
        </button>
        <button className=" text-black rounded-lg btn btn-info w-32 m-auto lg:w-24" onClick={handleCustomizeClick}>
          customize
        </button>
      </div>
      <Header />
    </section>
  );
};

export default Sidebar;
