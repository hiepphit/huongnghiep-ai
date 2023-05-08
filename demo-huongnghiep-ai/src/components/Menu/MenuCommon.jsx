import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Menu, Space } from "antd";
const { SubMenu, ItemGroup, Item } = Menu;

export const MenuCommon = (props) => {
  const { openKeys, onOpenChange, selectedKeys, menus, themeLayout, onSelect } =
    props;
  const generateMenus = (data) => {
    return data.map((itemGroup) => {
      if (itemGroup.group) {
        return (
          <>
            <StyledItemGroup
              title={itemGroup.name}
              key={itemGroup.id}
              icon={itemGroup.icon && itemGroup.icon}
            >
              {generateMenus(itemGroup.group)}
            </StyledItemGroup>
          </>
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
            itemGroup.icon && itemGroup.id === selectedKeys[0]
              ? itemGroup.iconActive
              : itemGroup.icon
          }
        >
          <NavLink to={itemGroup.route || "#"}>
            <StyledSpan>{itemGroup.name}</StyledSpan>
          </NavLink>
        </StyledItem>
      );
    });
  };
  return (
    <Menu
      mode="vertical"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      theme={themeLayout}
      onSelect={onSelect}
      style={menuStyle}
    >
      {generateMenus(menus)}
    </Menu>
  );
};

const menuStyle = {
  minHeight: "calc(100% - 179px)",
  padding: "12px 12px 0",
};

const StyledItemGroup = styled(ItemGroup)`
  & > div {
    padding-left: 1.5rem;
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
