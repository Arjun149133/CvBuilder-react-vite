import React, { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { useGlobalContext } from "./context";

const Education = () => {
  const { education, setEducation } = useGlobalContext();
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    location: "",
    graduationDate: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  const [showExpContent, setShowExpContent] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);

  const handleDelete = (index) => {
    setEducation(education.filter((_, i) => i !== index));
    console.log("delete ", index);
  };

  const handleClickCompany = (index) => {
    setShowExpForm(!showExpForm);
    setEducationData(education[index]);
    setEditIndex(index);
  };

  const handleShowExp = () => {
    setShowExpContent(!showExpContent);
  };
  const onchange = (e) => {
    setEducationData({
      ...educationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowExpForm(!showExpForm);
    if (editIndex !== -1) {
      setEducation((prevExp) => {
        const updatedExp = [...education];
        updatedExp[editIndex] = educationData;
        return updatedExp;
      });
      setEducationData({
        school: "",
        degree: "",
        Location: "",
        Description: "",
      });

      setEditIndex(-1);
    } else {
      setEducation([...education, educationData]);
      setEducationData({
        school: "",
        degree: "",
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
        Education
      </div>
      <div className="ml-4">
        {showExpContent && (
          <article>
            <div>
              {!showExpForm && (
                <div>
                  {education.map((data, index) => {
                    return (
                      <div
                        className=" flex m-1 bg-gray-600 text-white p-1 rounded-lg pl-2 font-bold lg:w-72 mb-2"
                        key={index}
                      >
                        {data.school}{" "}
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
                    Add Education
                  </button>
                </div>
              )}
            </div>
            {showExpForm && (
              <form
                className=" w-48 lg:w-auto p-2"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label className=" font-medium ">School</label>
                <input
                  value={educationData.school}
                  id="school"
                  data-key="school"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="school"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Degree</label>
                <input
                  value={educationData.degree}
                  id="PositionTitle"
                  data-key="degree"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="degree"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Location</label>
                <input
                  value={educationData.location}
                  id="Location"
                  data-key="location"
                  type="text"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="location"
                  onChange={(e) => onchange(e)}
                />
                <label className=" font-medium ">Graduation Year</label>
                <input
                  value={educationData.graduationDate}
                  id="Description"
                  data-key="graduationDate"
                  type="year"
                  className=" border-b border-gray-900 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  name="graduationDate"
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

export default Education;
