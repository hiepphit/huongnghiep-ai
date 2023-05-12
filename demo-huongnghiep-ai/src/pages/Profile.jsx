import React from "react";
import { PersonalInfor } from "../components";
import { TestJohn } from "../components";
import { StartRoadmap } from "../components";
import "./style.css";

export const Profile = () => {
  return (
    <div className="profile-block">
      <div className="profile-1">
        <PersonalInfor />
      </div>
      <div className="profile-2">
        <TestJohn />
        <StartRoadmap />
      </div>
    </div>
  )
};
