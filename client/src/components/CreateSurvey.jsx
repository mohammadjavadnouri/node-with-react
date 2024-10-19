import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Row, Tag, theme, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

//apis
import { postSurvey } from "../services/survey/survey";

const CreateSurvey = () => {
  const [isPostPending, setIsPostPending] = useState(false);

  const { token } = theme.useToken();
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  const onFinish = (values) => {
    let data = {
      title: values?.title,
      subject: values?.subject,
      recipients: tags,
      body: values?.body,
    };
    setIsPostPending(true);
    postSurvey(data)
      .then((res) => {
        //   window.location.reload();
      })
      .catch(() => {})
      .finally(() => {
        setIsPostPending(false);
      });
  };

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="title"
        label="عنوان نظرسنجی"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="subject"
        label="عنوان ایمیل"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="recipients"
        label="آدرس ایمیل دریاف کنندگان"
        rules={[{ required: true }]}
      >
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                // style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index}
              style={{ userSelect: "none" }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            //  style={tagInputStyle}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
            برای افزودن ایمیل کلیک کنید
          </Tag>
        )}
      </Form.Item>
      <Form.Item name="body" label="متن ایمیل" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Row justify="end">
        <Button htmlType="submit" loading={isPostPending}>
          ارسال
        </Button>
      </Row>
    </Form>
  );
};

export default CreateSurvey;
