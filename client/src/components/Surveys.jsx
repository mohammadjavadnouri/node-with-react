import { useEffect, useState } from "react";
import { Card, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//apis
import { getSurveys } from "../services/survey/survey";

const Surveys = () => {
  const [surveysList, setSurveysList] = useState([]);

  const actions = [
    <DeleteOutlined disabled key="edit" style={{ cursor: "not-allowed" }} />,
    <SettingOutlined
      disabled
      key="setting"
      style={{ cursor: "not-allowed" }}
    />,
    <EllipsisOutlined
      disabled
      key="ellipsis"
      style={{ cursor: "not-allowed" }}
    />,
  ];

  useEffect(() => {
    getSurveys().then((res) => {
      setSurveysList(res?.data);
    });
  }, []);

  return (
    <Space direction="vertical" size={16}>
      {surveysList?.map((i) => (
        <Card title={i?.subject} style={{ width: "300px" }} actions={actions}>
          <p>{i?.body}</p>
        </Card>
      ))}
    </Space>
  );
};

export default Surveys;
