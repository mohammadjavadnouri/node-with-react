import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal, FloatButton } from "antd";

//components
import CreateSurvey from "./CreateSurvey";
import Surveys from "./Surveys";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCreateHandler = () => {
    setIsModalVisible(true);
  };

  const onCancelHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Surveys />
      <FloatButton
        type="primary"
        shape="circle"
        icon={<PlusCircleOutlined />}
        onClick={onCreateHandler}
        size="large"
        //style={{ fontSize: "80px" }}
      />
      <Modal
        open={isModalVisible}
        onCancel={onCancelHandler}
        destroyOnClose
        footer={null}
      >
        <CreateSurvey />
      </Modal>
    </>
  );
};

export default Dashboard;
