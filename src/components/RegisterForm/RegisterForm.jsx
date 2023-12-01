import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/auth-operations';
import { Button, Form, Input } from 'antd';

const RegisterForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const onFinish = values => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };
    
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      size={'default'}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        width: 300,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Email is not valid',
          },
          {
            required: true,
            message: 'This field is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'This field is required',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Confirm your password',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('Paswords are not matching')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'This field is required',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
          <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;