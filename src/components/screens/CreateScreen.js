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
  const [company, setCompany] = useState()
  const [institute, setInstitute] = useState()


  const history = useHistory();

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...educaation];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  // handle click event of the Add button
  const handleAddClickEducation = () => {
    setEducationNo(educationNo.concat([1]))
    setEducation([...education, {institute:institute}]);
  };
  const handleAddClickExperience = () => {
    setExperienceNo(experienceNo.concat([1]))
    setExperience([...experience, {company:company}]);
  };
  // const handleAddClickSkill = () => {
  //   setSkill([...skill, 1]);
  // };

  const skillAdd = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  return (
    <div className="container">
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

        {educationNo.map((x, i) => {
          return (
            <div>
              <div className="form-group">
                <label htmlFor="education">Education</label>
                <input
                  type="text"
                  className="form-control"
                  id="education"
                  placeholder="Education"
                  onChange={e=>setInstitute(e.target.value)}
                />
              </div>
              <div>
                {educationNo.length - 1 === i && (
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleAddClickEducation}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {experienceNo.map((x, i) => {
          return (
            <div>
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <input
                  type="text"
                  className="form-control"
                  id="experience"
                  placeholder="Experience"
                  onClick={e=>setCompany(e.target.value)}
                />
              </div>
              <div>
                {experienceNo.length - 1 === i && (
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleAddClickExperience}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <div className="form-group">
          <label htmlFor="skill" style={{ marginBottom: 10 }}>
            Skill
          </label>
          <Tag onSkillAdd={skillAdd} />
        </div>
        {/* {skill.map((x, i) => {
          return (
            <div>
              <div className="form-group">
                <label htmlFor="skill">Skill</label>
                <input
                  type="text"
                  className="form-control"
                  id="skill"
                  placeholder="Skill"
                />
             </div><div>
                {skill.length - 1 === i && (
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleAddClickSkill}>+</button>
                )}
              </div>
            </div>
          );
        })} */}
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            // console.log(
            //   name,
            //   email,
            //   address,
            //   phone,
            //   education,
            //   experience,
            //   skills
            // );
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
          }}
        >
          Create My Resume
        </button>
      </form>
    </div>
  );
}
