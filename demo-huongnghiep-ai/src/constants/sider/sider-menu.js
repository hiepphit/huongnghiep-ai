import { IconChatActive, IconRoadmap, IconProfile, IconChat, IconFriends, IconReport, IconFAQ, IconProfileActive, IconLogOut } from "../../assets";
import React from "react";
import { PAGES } from "../urls/page-urls";

export const SIDER_MENU = [
  {
    id: "top",
    group: [
      {
        id: "1",
        name: "Chat với AI",
        route: PAGES.CHAT,
        icon: <IconChat />,
        iconActive: <IconChatActive />,
      },
      {
        id: "2",
        name: "Cá nhân",
        route: PAGES.PROFILE,
        icon: <IconProfile />,
        iconActive: <IconProfileActive />,
      },
      {
        id: "3",
        name: "Bản đồ sự nghiệp",
        route: PAGES.ROADMAP,
        icon: <IconRoadmap />,
        iconActive: <IconChatActive />,
      },
    ]
  },
  {
    id: "bottom",
    group: [
      {
        id: "4",
        name: "Về chúng tôi",
        route: PAGES.ABOUT_US,
        iconActive: <IconFriends />,
        icon: <IconFriends />,
      },
      {
        id: "5",
        name: "Chính sách",
        route: PAGES.POLICY,
        iconActive: <IconReport />,
        icon: <IconReport />,
      },
      {
        id: "6",
        name: "Hỗ trợ",
        route: PAGES.HELP,
        iconActive: <IconFAQ />,
        icon: <IconFAQ />,
      },
      {
        id: "7",
        name: "Đăng xuất",
        route: PAGES.LOGOUT,
        iconActive: <IconLogOut />,
        icon: <IconLogOut />,
      },
    ]
  },

  //   {
  //     id: "2",
  //     name: "MODULE",
  //     group: [
  //       {
  //         id: "21",
  //         name: "Play",
  //         route: PAGES.PLAY,
  //         icon: <IconPlay />,
  //       },
  //       {
  //         id: "22",
  //         name: "Drills",
  //         route: PAGES.DRILLS,
  //         icon: <IconDrills />,
  //       },
  //       {
  //         id: "23",
  //         name: "Coach",
  //         route: PAGES.COACH,
  //         icon: <IconPlans />,
  //       },
  //       {
  //         id: "24",
  //         name: "Shop",
  //         icon: <IconMisc />,
  //         children: [
  //           {
  //             id: "240",
  //             name: "Product",
  //             route: PAGES.PRODUCT,
  //             icon: <OrderedListOutlined />,
  //           },
  //           {
  //             id: "241",
  //             name: "Tour Trash",
  //             route: PAGES.TOUR_TRASH,
  //             icon: <GiftOutlined />,
  //           },
  //           {
  //             id: "242",
  //             name: "Promotion",
  //             route: PAGES.PROMOTION,
  //             icon: <NotificationOutlined />,
  //           },
  //           {
  //             id: "243",
  //             name: "Try Then Buy",
  //             route: PAGES.TRY_THEN_BUY,
  //             icon: <MoneyCollectOutlined />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
];

