import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Landing from "./components/Landing";
import HeaderCustom from "./components/Header";
import Dashboard from "./components/Dashboard";

import { store } from "./app/store";
import { Provider } from "react-redux";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  backgroundColor: "#e0ffcd",
};

const contentStyle = {
  textAlign: "center",
  backgroundColor: "#fdffcd",
};
const footerStyle = {
  textAlign: "center",
  backgroundColor: "#ffebbb",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider direction="rtl">
        <BrowserRouter>
          <Header style={headerStyle}>
            <HeaderCustom />
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/surveys" element={<Dashboard />} />
              {/* <RouterProvider router={router} /> */}
            </Routes>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
);

// console.log("our REACT_APP_STRIPE_KEY :  ", process.env.REACT_APP_STRIPE_KEY);
// console.log("our env :  ", process.env.NODE_ENV);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
