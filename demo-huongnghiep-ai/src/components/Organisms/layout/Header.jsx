import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ReactComponent as Notification } from "../../../assets/icons/Notification.svg";
import { SearchBar } from "../../index";
import { UserContext } from "../../../repository/context/userContext";
export const HeaderLayout = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  return (
    <div className="Header">
      <div className="Chat-left">Chat với A.I</div>
      <div className="Chat-right">
        <div className="SearchBars">
          <SearchBar />
        </div>
        <div className="Notifications">
          <Notification />
        </div>
        <Link to="/profile">
          <img src={user.avatar} alt="avatar" />
        </Link>
      </div>
    </div>
  );
};
