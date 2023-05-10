import React from "react";
import "./styles.css";
import { ReactComponent as Notification } from "../../../assets/icons/Notification.svg";
import { SearchBar } from "../../index";
import { Layout } from "antd";
const { Header } = Layout;
export const HeaderLayout = () => {
  return (
    <div className="Header">
      <div className="Chat-left">Chat với A.I</div>
      <div className="Chat-right">
        <div className="SearchBars"> <SearchBar /></div>
        <div className="Notifications"><Notification /></div>
        <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="avatar" />
      </div>
    </div>
  );
};

