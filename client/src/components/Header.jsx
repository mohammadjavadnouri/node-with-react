import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

//apis
import { getCurrentUser, getUserLogout } from "../services/users/users";

const { Title } = Typography;

const Header = () => {
  const [isLoggedIn, seIsLoggedIn] = useState(false);

  const onLogoutHandler = () => {
    getUserLogout()
      .then(() => {})
      .catch()
      .finally();
  };

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res?._id) {
          seIsLoggedIn(true);
        } else {
          seIsLoggedIn(false);
        }
      })
      .catch(() => {})
      .finally(() => {});
  }, []);

  return (
    <nav>
      <Row justify="space-around">
        <Col>
          <Title level={5}>
            <Link to="/">خانه</Link>
          </Title>
        </Col>{" "}
        <Col>
          <Title level={5}>
            {isLoggedIn ? (
              <>
                <p> خوش اومدی کابر گرامی :)</p>
                <Button onClick={onLogoutHandler}>خروج از حساب کاربری</Button>
              </>
            ) : (
              <a
                href={
                  process.env.NODE_ENV === "production"
                    ? "/auth/google"
                    : "http://localhost:5000/auth/google"
                }
              >
                ورود یا ثبت نام با گوگل
              </a>
            )}
          </Title>
        </Col>
      </Row>
    </nav>
  );
};

export default Header;
