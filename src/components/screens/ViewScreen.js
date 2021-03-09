import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./style.css";

export default function ViewScreen() {
  const location = useLocation();
  //const history = useHistory();
  const {
    education,
    experience,
    skills,
    name,
    phone,
    email,
    address,
  } = location.state.profile;
  return (
    <div className="viewMain">
      <div className="viewContent">
        <div className="details1">
          <h3 style={{ color: "darkblue" }}>{name}</h3>
          <b>{email}</b>
          <br />
          <b>{phone}</b>
          <br />
          <b>{address}</b>
        </div>
        <div className="details2">
          <h5>Education</h5>
          {education.map((items) => (
            <b>{items.company}</b>
          ))}
        </div>
        <div className="details3">
            <h5>Experience</h5>
          {experience.map((items) => (
            <b>{items.institute}</b>
          ))}
        </div>
      </div>
    </div>
  );
}
