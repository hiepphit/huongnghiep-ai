import { Layout } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SIDER_MENU } from "../../../constants/sider/sider-menu";
import { SiderMenu } from "./SiderMenu";
import { FooterLayout } from "./Footer";
import { HeaderLayout } from "./Header";
import { SIDER_WIDTH, THEME_LAYOUT } from "../../../constants/common";
import { SiderContext } from "../../../repository/context/siderContext";

const { Content } = Layout;

const PrimaryLayout = (props) => {
  const location = useLocation();
  const siderContext = useContext(SiderContext);
  const onOpenChange = useCallback(
    (keys) => {
      setOpenKeys(keys.map((key) => key.toString()));
      siderContext.updateOpenKey(keys.map((key) => key.toString()));
    },
    [siderContext]
  );
  const [selectedKeys, setSelectedKeys] = useState(siderContext.selectedKey);
  const [openKeys, setOpenKeys] = useState(siderContext.openKey);
  const handleSetOpenAndSelectedKeys = useCallback(
    (pages, currentLocation, parentId) => {
      for (const page of pages) {
        if (page.route && page.route === currentLocation) {
          if (parentId) {
            setOpenKeys([parentId]);
            siderContext.updateOpenKey([parentId]);
          } else {
            setOpenKeys([]);
            siderContext.updateOpenKey([]);
          }
          setSelectedKeys([page.id]);
          siderContext.updateSelectedKey([page.id]);
        }
        if (page.group) {
          handleSetOpenAndSelectedKeys(page.group, currentLocation);
        }
        if (page.children) {
          handleSetOpenAndSelectedKeys(page.children, currentLocation, page.id);
        }
      }
    },
    [siderContext]
  );
  const handleSelectMenuItem = useCallback(
    (info) => {
      setSelectedKeys(info.selectedKeys);
      siderContext.updateSelectedKey(info.selectedKeys);
    },
    [siderContext]
  );
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleSetOpenAndSelectedKeys(SIDER_MENU, location.pathname);
    }
    return () => {
      isMounted = false;
    };
  }, [location, handleSetOpenAndSelectedKeys]);

  return (
    <Layout>
      <SiderMenu
        widthSider={SIDER_WIDTH}
        themeLayout={THEME_LAYOUT}
        menus={SIDER_MENU}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onSelect={handleSelectMenuItem}
      ></SiderMenu>
      <Layout>
        <HeaderLayout />
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
export default PrimaryLayout;
