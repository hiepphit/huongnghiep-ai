import React from "react";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { IconOptions } from "../../assets";
import "./style.css";
const { SubMenu, ItemGroup, Item } = Menu;
export const MenuCommon = (props) => {
  const {
    openKeys,
    onOpenChange,
    selectedKeys,
    menus,
    themeLayout,
    onSelect,
    isChatMenu,
  } = props;
  const generateMenus = (data) => {
    return data.map((itemGroup) => {
      if (itemGroup.group) {
        return (
          <StyledItemGroup
            title={itemGroup.name}
            key={itemGroup.id}
            icon={itemGroup.icon && itemGroup.icon}
          >
            {generateMenus(itemGroup.group)}
          </StyledItemGroup>
        );
      }
      if (itemGroup.children) {
        return (
          <SubMenu
            key={itemGroup.id}
            title={<StyledSpan>{itemGroup.name}</StyledSpan>}
          >
            {generateMenus(itemGroup.children)}
          </SubMenu>
        );
      }
      return (
        <StyledItem
          key={itemGroup.id}
          icon={
            itemGroup.iconActive && itemGroup.id === selectedKeys[0]
              ? itemGroup.iconActive
              : itemGroup.icon
          }
        >
          {isChatMenu ? (
            <div className="chat-menu-item">
              <Link to={"/chat/" + itemGroup.route}>
                <StyledSpan>{itemGroup.name}</StyledSpan>
              </Link>
              {itemGroup.id === selectedKeys[0] && <IconOptions />}
            </div>
          ) : (
            <NavLink to={itemGroup.route || "#"}>
              <StyledSpan>{itemGroup.name}</StyledSpan>
            </NavLink>
          )}
        </StyledItem>
      );
    });
  };
  return (
    <MenuStyled
      mode="vertical"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      theme={themeLayout}
      onSelect={onSelect}
      style={menuStyle}
    >
      {generateMenus(menus)}
    </MenuStyled>
  );
};

const menuStyle = {
  minHeight: "calc(100% - 179px)",
  padding: "0 12px 0 12px",
};

const MenuStyled = styled(Menu)`
  & > li:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: 12px;
    right: 12px;
  }
  & > li:last-child .ant-menu-title-content {
    width: 100%;
  }
`;
const StyledItemGroup = styled(ItemGroup)`
  & > div {
    padding-left: 1.5rem;
  }
  li {
    position: "absolute";
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const StyledItem = styled(Item)`
  & > span > a {
    .anticon {
      font-size: 20px;
    }
  }
`;

const StyledSpan = styled.span`
  padding: 2px 0 2px 15px;
  margin-left: 0 !important;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;
