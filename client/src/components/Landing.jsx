import { Layout, Flex, Typography, Row } from "antd";
import emailSender from "../assets/images/email-sender.jfif";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  // backgroundColor: "#dfdfdfdf",
};

const Landing = () => {
  return (
    <>
      <Flex
        justify="space-around"
        align="end"
        gap="middle"
        style={{
          position: "absolute",
          top: "20px",
          left: "6vw",
          zIndex: 2,
        }}
      >
        <span
          style={{
            height: "45px",
            width: "15px",
            backgroundColor: "#0f0f0f",
            display: "inline-block",
          }}
        ></span>

        <span
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#0f0f0f",
            borderRadius: "50%",
            display: "inline-block",
          }}
        ></span>
      </Flex>
      <span
        style={{
          height: "250px",
          width: "250px",
          backgroundColor: "#0f0f0f",
          backgroundImage: "linear-gradient(90deg, black, gray)",
          boxShadow:
            "0 40px 80px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          position: "absolute",
          top: "-100px",
          left: "15vw",
          zIndex: -1,
        }}
      ></span>
      <Content style={contentStyle}>
        <br />
        <div>
          <Flex justify="center">
            {" "}
            <Title level={2}> مثه آبخوردن ایمیل گروهی بفرس</Title>
          </Flex>
          <Flex style={{ marginTop: "50px", marginRight: "50px" }}>
            <div>
              <img
                src={emailSender}
                style={{
                  borderRadius: "0px 100px 0px 0px",
                  height: "400px",
                  width: "400px",
                }}
              />{" "}
            </div>

            <Flex>
              <Row
                justify="center"
                align="center"
                style={{
                  height: "400px",
                  width: "400px",
                  backgroundColor: "#bbb",
                  padding: "10px",
                }}
              >
                <Title level={4}>توضیح پروژه</Title>
                <p level={6}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </Row>
              <Row
                justify="center"
                align="center"
                style={{
                  height: "400px",
                  width: "400px",
                  padding: "10px",
                  display: "block",
                  rotate: "-90deg",
                }}
              >
                <Title level={4}>آدرس ما: تهران</Title>
                <Title level={4}>ایمیل ما: mail@mail.com </Title>
              </Row>
            </Flex>
          </Flex>
        </div>
      </Content>
    </>
  );
};

export default Landing;
