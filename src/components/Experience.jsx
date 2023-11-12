import React, { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { useGlobalContext } from "./context";

const Experience = () => {
  const {experience,setExperience} = useGlobalContext();
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    location: "",
    description: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  const [showExpContent, setShowExpContent] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);

  const handleDelete = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
    console.log("delete ", index);
  };

  const handleClickCompany = (index) => {
    setShowExpForm(!showExpForm);
    setExperienceData(experience[index]);
    setEditIndex(index);
  };

  const handleShowExp = () => {
    setShowExpContent(!showExpContent);
  };
  const onchange = (e) => {
    setExperienceData({
      ...experienceData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowExpForm(!showExpForm);
    if (editIndex !== -1) {
      setExperience((prevExp) => {
        const updatedExp = [...experience];
        updatedExp[editIndex] = experienceData;
        return updatedExp;
      });
      setExperienceData({
        companyName: "",
        positionTitle: "",
        Location: "",
        Description: "",
      });

      setEditIndex(-1);
    } else {
      setExperience([...experience, experienceData]);
      setExperienceData({
        companyName: "",
        positionTitle: "",
        Location: "",
        Description: "",
      });
    }
  };
  return (
    <section className=" flex flex-col ml-7 mt-7 w-44 lg:w-auto text-black bg-base-300 rounded-lg m-auto items-center hover:cursor-pointer">
      <div
        className=" w-44 lg:w-auto p-4 m-auto font-bold lg:text-xl"
        onClick={handleShowExp}
      >
        Experience
      </div>
      <div className="ml-4">
        {showExpContent && (
          <article>
            <div>
              {!showExpForm && (
                <div>
                  {experience.map((data, index) => {
                    return (
                      <div
                        className=" flex m-1 bg-gray-600 text-white p-1 rounded-lg pl-2 font-bold lg:w-72 mb-2"
                        key={index}
                      >
                        {data.companyName}{" "}
                        <div className=" flex flex-row-reverse m-auto">
                          <BsFillTrash3Fill
                            className=" ml-2 font-bold text-red-500"
                            onClick={() => handleDelete(index)}
                          />
                          <BiSolidEdit
                            className=" m-auto text-green-500 "
                            onClick={() => handleClickCompany(index)}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <button
                    className={`btn btn-info m-auto ${
                      !showExpForm ? "" : "hidden"
                    } mb-2`}
                    onClick={() => setShowExpForm(!showExpForm)}
                  >
                    Add Experience
                  </button>
                </div>
              )}
            </div>
            {showExpForm && (
              <form
                className=" w-48 lg:w-auto p-2"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label className=" font-medium ">Company Name</label>
                <input
                  value={experienceData.companyName}
                  id="CompanyName"
                  data-key="CompanyName"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="companyName"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Position Title</label>
                <input
                  value={experienceData.positionTitle}
                  id="PositionTitle"
                  data-key="positionTitle"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="positionTitle"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Location</label>
                <input
                  value={experienceData.location}
                  id="Location"
                  data-key="location"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="location"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Description</label>
                <input
                  value={experienceData.description}
                  id="Description"
                  data-key="description"
                  type="text-area"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="description"
                  onChange={(e) => onchange(e)}
                />
                <div className=" flex flex-col lg:flex-row space-y-1 mt-3 lg:space-x-3">
                  <button
                    className=" btn btn-neutral m-auto"
                    onClick={() => setShowExpForm(!showExpForm)}
                  >
                    Cancel
                  </button>
                  <button className=" btn btn-success m-auto" type="submit">
                    Save
                  </button>
                </div>
              </form>
            )}
          </article>
        )}
      </div>
    </section>
  );
};

export default Experience;
