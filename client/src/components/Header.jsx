import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

//components
import Payment from "./Payment";

//apis
import { getCurrentUser, getUserLogout } from "../services/users/users";

const { Title } = Typography;

const Header = () => {
  const [userInfo, setUserInfo] = useState({});

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav>
      <Row justify="space-around">
        <Title level={5}>
          <Link to="/">خانه</Link>
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
      </Row>
    </nav>
  );
};

export default Header;
