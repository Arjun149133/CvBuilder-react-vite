import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbLocationFilled } from "react-icons/tb";

const Resume = () => {
  const {
    name,
    email,
    phone,
    address,
    education,
    experience,
    font,
    layout,
    curColor,
    rgb,
  } = useGlobalContext();

  let dark = true;
  if (rgb.r < 129 || rgb.g < 129 || rgb.b < 129) {
    dark = true;
  } else {
    dark = false;
  }

  return (
    <section
      className={`w-screen mt-9 bg-[${curColor}] flex ${layout} shadow-xl shadow-black pr-4 mr-4 ${font}`}
    >
      <div
        className={` ${dark ? " text-white" : " text-black"} pb-3 pl-5 border-2 border-black `}
        style={{ backgroundColor: curColor }}
      >
        <div className=" text-5xl flex justify-center p-2 mt-4">{name}</div>
        <div
          className={` text-2xl flex justify-center p-2 space-x-7 mt-3 ${
            layout === "flex-col"
              ? ""
              : " flex-col items-center space-y-12 mt-12 mr-2"
          }`}
        >
          <div className=" flex">
            <AiOutlineMail className=" mt-2 mr-1" />
            {email}
          </div>
          <div className=" flex">
            <BsFillTelephoneFill className=" mt-2 mr-1" />
            {phone}
          </div>
          <div className=" flex">
            <TbLocationFilled className=" mt-2 mr-1" />
            {address}
          </div>
        </div>
      </div>
      <div
        className={`${
          layout === "flex-col"
            ? ""
            : " flex-col items-center space-y-12 mt-12 mr-2 ml-2"
        }`}
      >
        <div>
          <h1
            className={` ${
              dark ? " text-white" : " text-black"
            } flex justify-center mt-7 text-2xl font-semibold `}
            style={{ backgroundColor: curColor }}
          >
            Education
          </h1>
          <div>
            {education.map((edu, index) => {
              return (
                <div key={index} className=" flex flex-col text-xl mt-4">
                  <div className=" flex justify-center">
                    <p className=" font-bold text-black mx-2">{edu.school}</p>
                    <p className=" font-semibold mx-2">{edu.degree}</p>
                    <p className=" mx-2">{edu.location}</p>
                  </div>
                  <p className=" flex justify-center mt-2 font-extrabold">
                    Graduation At {edu.graduationDate}{" "}
                  </p>
                </div>
              );
            })}{" "}
          </div>
        </div>
        <div>
          <h1
            className={` ${
              dark ? " text-white" : " text-black"
            } flex justify-center mt-7 text-2xl font-semibold`}
            style={{ backgroundColor: curColor }}
          >
            Experience
          </h1>
          <div>
            {experience.map((exp, index) => {
              return (
                <div key={index} className=" flex flex-col text-xl mt-4">
                  <div className=" flex justify-center">
                    <p className=" font-bold text-black mx-2">
                      {exp.companyName}
                    </p>
                    <p className=" font-extrabold mx-2">
                      As {exp.positionTitle}
                    </p>
                    <p className=" mx-2">In {exp.location}</p>
                  </div>
                  <p className=" flex justify-center mt-2">
                    {exp.description}{" "}
                  </p>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
