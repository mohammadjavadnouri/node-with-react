import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Button, Input, Flex, Layout, Menu } from "antd";
import {
  GoogleOutlined,
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//components
import Payment from "./Payment";

//apis
import { getCurrentUser, getUserLogout } from "../services/users/users";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  backgroundColor: "inherit",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const CustomHeader = () => {
  const [userInfo, setUserInfo] = useState({});
  const [current, setCurrent] = useState("home");

  const userInfoFunction = () => {
    getUser();
  };

  const onLogoutHandler = () => {
    getUserLogout()
      .then(() => {})
      .catch()
      .finally();
  };

  const getUser = () => {
    getCurrentUser()
      .then((res) => {
        if (res?._id) {
          setUserInfo(res);
        } else {
          setUserInfo({});
        }
      })
      .catch(() => {})
      .finally(() => {});
  };

  const items = [
    {
      label: "",
      key: "home",
      icon: <HomeOutlined />,
    },
    // {
    //   label: "Navigation Two",
    //   key: "app",
    //   icon: <AppstoreOutlined />,
    //   disabled: true,
    // },
    // {
    //   label: "Navigation Three - Submenu",
    //   key: "SubMenu",
    //   icon: <SettingOutlined />,
    //   children: [
    //     {
    //       type: "group",
    //       label: "Item 1",
    //       children: [
    //         { label: "Option 1", key: "setting:1" },
    //         { label: "Option 2", key: "setting:2" },
    //       ],
    //     },
    //     {
    //       type: "group",
    //       label: "Item 2",
    //       children: [
    //         { label: "Option 3", key: "setting:3" },
    //         { label: "Option 4", key: "setting:4" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   key: "alipay",
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    // },
  ];

  const onMenuClickHandler = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Header style={headerStyle} fixed>
      <Flex justify="start" align="center" gap="middle">
        {/* <Title>
          <Menu
            onClick={onMenuClickHandler}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Title> */}
        <Title level={5}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeOutlined />
          </Link>
        </Title>
        <Title level={5}>
          {userInfo?._id ? (
            <>
              <span> خوش اومدی کابر گرامی :)</span>
              <span> میزان اعتبار: {userInfo.credits}</span>
              <Payment userInfoFunction={userInfoFunction} />
              <Button onClick={onLogoutHandler}>خروج از حساب کاربری</Button>
            </>
          ) : (
            <Button shape="round">
              <GoogleOutlined />
              <a
                href={
                  process.env.NODE_ENV === "production"
                    ? "/auth/google"
                    : "http://localhost:5000/auth/google"
                }
              >
                ورود یا ثبت نام با گوگل
              </a>
            </Button>
          )}
        </Title>
      </Flex>{" "}
    </Header>
  );
};

export default CustomHeader;
