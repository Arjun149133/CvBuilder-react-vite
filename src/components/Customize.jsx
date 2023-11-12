import React, { useState } from "react";
import { PiSquareHalfBottomFill } from "react-icons/pi";
import { PiCircleFill } from "react-icons/pi";
import { RiFontSansSerif, RiFontSans, RiFontMono } from "react-icons/ri";
import { useGlobalContext } from "./context";
import { SketchPicker } from "react-color";

const Customize = () => {
  const { font, setFont, setLayout, curColor, setCurColor, rgb, setRgb } =
    useGlobalContext();
  const [showPicker, setShowPicker] = useState(false);

  const handleOnChange = (color) => {
    setCurColor(color.hex);
    setRgb(color.rgb);
  };

  const handleFont = (currFont) => {
    setFont(currFont);
  };

  const handleLayout = (currLayout) => {
    console.log(currLayout);
    setLayout(currLayout);
  };

  return (
    <section className=" ml-3 pb-7 space-y-10">
      <div className=" flex flex-col bg-violet-50 m-auto rounded-lg pb-5">
        <h1 className=" font-bold text-2xl m-auto p-1 text-black">Layout</h1>
        <div className={`flex mt-6`}>
          <PiSquareHalfBottomFill
            className=" m-auto text-4xl transform rotate-180 hover:cursor-pointer"
            onClick={() => handleLayout("flex-col")}
          />
          <PiSquareHalfBottomFill
            className=" m-auto text-4xl transform rotate-90 hover:cursor-pointer"
            onClick={() => handleLayout("flex-row")}
          />
          <PiSquareHalfBottomFill
            className=" m-auto text-4xl transform -rotate-90 hover:cursor-pointer"
            onClick={() => handleLayout("flex-row-reverse")}
          />
        </div>
      </div>
      <div
        className=" flex flex-col mt-5 bg-violet-50 m-auto rounded-lg pb-3
      "
      >
        <h1 className=" font-bold text-2xl m-auto p-1 text-black mb-3">
          Color
        </h1>
        <div
          className={` ${
            showPicker ? "flex flex-col space-y-3" : " flex flex-row"
          } space-x-4 ml-5`}
        >
          <p className=" font-semibold text-xl ml-4">Accent Color</p>
          <PiCircleFill
            className={` m-auto text-4xl  hover:cursor-pointer`}
            style={{ color: curColor }}
            onClick={() => setShowPicker(!showPicker)}
          />
          {showPicker && (
            <SketchPicker color={curColor} onChangeComplete={handleOnChange} />
          )}
        </div>
      </div>
      <div className=" flex flex-col bg-violet-50 m-auto rounded-lg pb-5">
        <h1 className=" font-bold text-2xl m-auto p-1 text-black mb-3">
          Fonts
        </h1>
        <div className=" flex flex-col mt-6 space-x-2 lg:space-x-12 m-auto lg:flex-row space-y-2 lg:space-y-0">
          <div
            className={`rounded-lg p-3 ${
              font === "font-serif"
                ? " text-black bg-white"
                : " text-white bg-black"
            } `}
            onClick={() => handleFont("font-serif")}
          >
            <RiFontSansSerif className={`m-auto text-4xl`} />
            <p className=" font-serif ">Serif</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              font === "font-sans"
                ? " text-black bg-white"
                : " text-white bg-black"
            } `}
            onClick={() => handleFont("font-sans")}
          >
            <RiFontSans className=" m-auto text-4xl " />
            <p className=" font-sans ">Sans</p>
          </div>
          <div
            className={`rounded-lg p-3 ${
              font === "font-mono"
                ? " text-black bg-white"
                : " text-white bg-black"
            } hover:cursor-pointer `}
            onClick={() => handleFont("font-mono")}
          >
            <RiFontMono className=" m-auto text-4xl " />
            <p className=" font-mono ">Mono</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customize;
