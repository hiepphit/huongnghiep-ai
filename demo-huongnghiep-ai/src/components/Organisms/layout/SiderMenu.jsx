import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../assets/index";
import { APP_NAME } from "../../../constants/common";
import { MenuCommon } from "../../Menu/MenuCommon";
const { Sider } = Layout;

export const SiderMenu = (props) => {
  const [collapse, setCollapse] = useState(true);
  const {
    openKeys,
    onOpenChange,
    selectedKeys,
    menus,
    themeLayout,
    widthSider,
    onSelect,
    children,
  } = props;

  const onHoverSider = (e) => {
    e.preventDefault();
    if (collapse) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };
  return (
    <SiderStyled
      collapsible
      collapsed={collapse}
      onMouseEnter={onHoverSider}
      onMouseLeave={onHoverSider}
      trigger={null}
      width={widthSider}
      style={{ background: "white" }}
    >
      <NavLink to="/">
        <div style={logoStyle}>
          <img className="logo" src={Logo} alt="logo-huongnghiep-ai" />
          {!collapse && <div style={appName}>{APP_NAME}</div>}
        </div>
      </NavLink>

      <MenuCommon
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        theme={themeLayout}
        onSelect={onSelect}
        menus={menus}
      />
      {children}
    </SiderStyled>
  );
};

const appName = {
  fontWeight: 700,
  marginLeft: 8,
  color: "black",
};
const logoStyle = {
  display: "flex",
  alignItems: "center",
  padding: 16,
  width: 300,
};
const SiderStyled = styled(Sider)`
  .ant-menu-item-selected {
    background-color: rgba(214, 227, 246, 0.5) !important;
    & span {
      font-weight: 700;
    }
  }
  min-height: 100vh;
  & > div > img.logo {
    width: 40px;
    margin: 24px;
  }

  & > div > footer {
    text-align: center;
    padding: 16px;
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
  }

  @media screen and (max-width: 1024px) {
    width: 180px;
  }
`;
