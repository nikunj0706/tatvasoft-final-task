import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const AddUser = (props) => {
  const { visible, onCancel, onAddUser } = props;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleOk = async () => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();
      // Construct user object
      const newUser = {
        name: {
          title: "",
          first: values.name,
          last: "",
        },
        email: values.email,
        location: {
          city: values.city,
          state: values.state,
          country: "",
        },
        cell: "",
        dob: { age: "" },
        gender: "",
        phone: "",
        nat: "",
        picture: { thumbnail: "" },
      };
      if (onAddUser) {
        onAddUser(newUser);
      }
      form.resetFields();
      setSubmitting(false);
      if (onCancel) {
        onCancel();
      }
    } catch (err) {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Modal
      title="Add User"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={submitting}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={submitting} onClick={handleOk}>
          Add User
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input the email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input the city!" }]}
        >
          <Input placeholder="Enter city" />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please input the state!" }]}
        >
          <Input placeholder="Enter state" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUser;

