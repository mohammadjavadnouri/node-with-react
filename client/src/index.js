import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import faIR from "antd/locale/fa_IR";
import { ConfigProvider } from "antd";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Landing from "./components/Landing";
import CustomHeader from "./components/CustomHeader";
import Dashboard from "./components/Dashboard";

import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider direction="rtl" locale={faIR}>
        <BrowserRouter>
          <CustomHeader />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/surveys" element={<Dashboard />} />
            {/* <RouterProvider router={router} /> */}
          </Routes>

          {/* <Footer style={footerStyle}>Footer</Footer> */}
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
