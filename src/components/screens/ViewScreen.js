import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./style.css";

export default function ViewScreen() {
  const location = useLocation();
  //const history = useHistory();
  console.log(location);
  const {
    education,
    experience,
    skills,
    name,
    phone,
    email,
    address,
  } = location.state.profile;
  console.log(experience);
  return (
    <div className="viewMain">
      <div className="viewContent">
        <div className="details1">
          <h3 style={{ color: "darkblue" }}>{name}</h3>
          <i>{email}</i>
          <i>{phone}</i>
          <i>{address}</i>
        </div>
        <div className="details2">
          <h5>Education</h5>
          {education.map((items) => (
            <i>{items.institute}</i>
          ))}
        </div>
        <div className="details3">
          <h5>Experience</h5>
          {experience.map((items) => (
            <i>{items.company}</i>
          ))}
        </div>
        <div className="details4">
          <h5>Skills</h5>
          {skills.map((items) => (
            <i>{items}</i>
          ))}
        </div>
      </div>
    </div>
  );
}
