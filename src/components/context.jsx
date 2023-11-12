import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const [showSection, setShowSection] = useState(true);

  const [font,setFont] = useState(null);
  const [layout,setLayout] = useState("flex-col");
  const [curColor, setCurColor] = useState("#000000");
  const [rgb, setRgb] = useState({
    r:0,
    b:0,
    g:0,
  });

  const handleClearResume = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setExperience([]);
    setEducation([]);
  }
  const handleLoadExample = () => {
    setName("Arjun");
    setEmail("arjun@gmail.com");
    setPhone("98989898");
    setAddress("Hyderabad,India");
    setExperience([
        {
          companyName: "Microsoft",
          positionTitle: "Manager",
          location: "NewYork,Usa",
          description: "worked for 2 years",
        }
    ]);
    setEducation([
      {
        school: "Navodaya High School",
        degree: "Bachelors in Engineering",
        location: "Hyderabad, India",
        graduationDate: "2026",
      }
    ]);
  }

  return <AppContext.Provider value={{
    experience,
    setExperience,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    education,
    setEducation,
    handleClearResume,
    handleLoadExample,
    showSection,
    setShowSection,
    font,
    setFont,
    layout,
    setLayout,
    curColor,
    setCurColor,
    rgb,
    setRgb,
  }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
