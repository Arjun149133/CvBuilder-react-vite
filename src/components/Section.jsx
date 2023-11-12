import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { useGlobalContext } from "./context";

const Section = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
  } = useGlobalContext();
  return (
    <section className=" artboard phone-3">
      <form className=" flex flex-col space-y-1 w-44 lg:w-auto ml-7">
        <h2 className=" font-bold text-black text-xl">Personal Details</h2>
        <label>Full name</label>
        <input
          className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Address</label>
        <input
          className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>
      <Education />
      <Experience />
    </section>
  );
};

export default Section;
