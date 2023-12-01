import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { Form, Input, Button, Checkbox } from 'antd';
// import { Form, Input, Button } from './LoginForm.styled';
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(logIn(values));
  };
    
return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'This field is required',
          },
        ]}
      >
        <Input
          prefix={<IoPerson className="site-form-item-icon"/> }
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'This field is required',
          },
        ]}
      >
        <Input
          prefix={<RiLockPasswordFill className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
    
export default LoginForm;
