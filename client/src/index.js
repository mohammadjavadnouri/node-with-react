import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Landing from "./components/Landing";
import HeaderCustom from "./components/Header";

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
      <BrowserRouter>
        <Header style={headerStyle}>
          <HeaderCustom />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <RouterProvider router={router} /> */}
          </Routes>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
