import { Layout } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SIDER_WIDTH, THEME_LAYOUT } from '../../../constants/common';
import { Role } from '../../../constants/define/role';
import { SIDER_MENU } from '../../../constants/sider/sider-menu';
import { PAGES } from '../../../constants/urls/page-urls';
import { SiderContext } from '../../../repository/context/siderContext';
import { UserContext } from '../../../repository/context/userContext';
import { getUserMeInfoRepository } from '../../../repository/mytm/user/userMeRepository';
import { findItemChildren } from '../../../utils/helper';
import { logging } from '../../../utils/log';
import { Loading } from '../../atoms';
import { SelectInfo, SiderMenu } from '../../molecules/layout/Sider';
import { FooterPortal } from './Footer';
import { Header } from './Header';

const { Content } = Layout;


export const PrimaryLayout = () => {
  const location = useLocation();
  const history = useHistory();
  const userContext = useContext(UserContext);
  const siderContext = useContext(SiderContext);

  const [selectedKeys, setSelectedKeys] = useState(siderContext.selectedKey);
  const [openKeys, setOpenKeys] = useState<string[]>(siderContext.openKey);
  const [isLoading, setLoading] = useState(false);
  const [checkPermission, setCheckPermission] = useState(true);

  const onOpenChange = useCallback((keys: React.Key[]) => {
    setOpenKeys(keys.map(key => key.toString()));
    siderContext.updateOpenKey(keys.map(key => key.toString()));
  }, []);

  const handleSelectMenuItem = useCallback((info: SelectInfo) => {
    setSelectedKeys(info.selectedKeys);
    siderContext.updateSelectedKey(info.selectedKeys);
  }, []);

  const handleSetOpenAndSelectedKeys = useCallback((pages: any, currentLocation: string, parentId?: string): void => {
    for (const page of pages) {
      if (page.route && pathToRegexp(page.route).exec(currentLocation)) {
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
  }, []);

  const handleGetUserMeInfo = useCallback(async () => {
    try {
      setLoading(true);
      setCheckPermission(true);
      let info: any = userContext.user;
      if (!info) {
        const data = await getUserMeInfoRepository();
        if (data) {
          userContext.updateUser(data);
          info = data;
        }
      }
      const findMenu = findItemChildren(SIDER_MENU, location.pathname);
      if (findMenu && [Role.CUSTOMER_SERVICE, Role.TTB_AGENT].includes(info?.role) && !findMenu?.roles) {
        history.push(PAGES?.PERMISSION);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      logging(error);
    } finally {
      setCheckPermission(false);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleSetOpenAndSelectedKeys(SIDER_MENU, location.pathname);
    }
    return () => {
      isMounted = false;
    };
  }, [location]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGetUserMeInfo();
    }
    return () => {
      isMounted = false;
    };
  }, [handleGetUserMeInfo]);

  return (
    <Loading isLoading={isLoading}>
      <Layout>
        <SiderMenu
          widthSider={SIDER_WIDTH}
          themeLayout={THEME_LAYOUT}
          menus={SIDER_MENU}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onSelect={handleSelectMenuItem}
        >
          <FooterPortal />
        </SiderMenu>
        <Layout>
          <Header />
         <Content>{props.children}</Content>
        </Layout>
      </Layout>
    </Loading>
  );
};
