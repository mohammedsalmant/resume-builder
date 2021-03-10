import React, { useState } from "react";
import Tag from "./Tag";
import { useHistory } from "react-router-dom";

export default function CreateScreen() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [educationNo, setEducationNo] = useState([1]);
  const [experienceNo, setExperienceNo] = useState([1]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [company, setCompany] = useState();
  const [institute, setInstitute] = useState();

  const history = useHistory();

  // handle click event of the Add button
  const handleAddClickEducation = () => {
    setEducationNo(educationNo.concat([1]));
    setEducation([...education, { institute: institute }]);
  };
  const handleAddClickExperience = () => {
    console.log(experience);
    setExperienceNo(experienceNo.concat([1]));
    setExperience((prev) => [...prev, { company: company }]);
  };
  const skillAdd = (skills) => {
    setSkills((prev) => [...prev, skills]);
  };



  return (
    <div className="container">
      <div className="heading">
        <h2>ENTER DETAILS</h2>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="tect"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education</label>
          {educationNo.map((x, i) => {
            return (
              <div>
                <br/>
                <input
                  type="text"
                  className="form-control"
                  id="education"
                  placeholder="Education"
                  onChange={(e) => setInstitute(e.target.value)}
                />
                {educationNo.length - 1 === i && (
                  <button
                  style={{ marginTop: "10px" }}
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleAddClickEducation}
                  >
                    +
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          {experienceNo.map((x, i) => {
            return (
              <div>
                {/*    */}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="experience"
                  placeholder="Experience"
                  onChange={(e) => setCompany(e.target.value)}
                />
                {experienceNo.length - 1 === i && (
                  <button
                    style={{ marginTop: "10px" }}
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleAddClickExperience}
                  >
                    +
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="form-group">
          <label htmlFor="skill" style={{ marginBottom: 10 }}>
            Skills
          </label>
          <Tag onSkillAdd={skillAdd} />
        </div>
        <br />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            console.log(
              name,
              email,
              address,
              phone,
              education,
              experience,
              skills
            );
            if (
              name &&
              email &&
              address &&
              education.length !== 0 &&
              experience.length !== 0 &&
              skills.length !== 0
            ) {
              history.push("/view", {
                profile: {
                  name: name,
                  email: email,
                  phone: phone,
                  address: address,
                  education: education,
                  experience: experience,
                  skills: skills,
                },
              });
            } else {
              alert(
                "Please fill all details,please click + button to add experience and education"
              );
            }
          }}
        >
          Create My Resume
        </button>
      </form>
    </div>
  );
}
