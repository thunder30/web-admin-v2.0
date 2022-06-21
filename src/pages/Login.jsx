import { useDispatch } from "react-redux";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  Image,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthProvider";
// import landing from '../assets/auth/undraw_all_the_data_re_hh4w.svg'
import landing from "../assets/auth/corgin-logo.png";
import { authSuccess } from "../redux/slices/authSlice";
import { login, getMe } from "../api/auth";

const { Item } = Form;
const { Text, Paragraph } = Typography;

const WrapperStyled = styled.div`
  .login-form-forgot {
    float: right;
    color: #b3b3b3;
    &:hover {
      text-decoration: underline;
    }
  }
  .login-form-button {
    width: 100%;
  }
`;
const TextStyled = styled(Text)`
  font-size: 1.75rem;
`;
const ParagraphStyled = styled(Paragraph)`
  color: #b3b3b3;
  font-size: 1rem;
  margin-bottom: 1.3rem;
`;
function Login() {
  const dispatch = useDispatch();
  // Contexts
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    phone: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);
  const [form] = Form.useForm();

  // two ways binding
  const handleUser = (e) => {
    e.preventDefault();
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRemember = ({ target: { checked } }) => {
    setRemember(checked);
  };

  // submit form
  const handleOnFinish = async () => {
    //console.log('Received value of form: ', values)
    // call api login
    await loginUser({
      email: "ngoctinh3004@gmail.com",
      password: "admin",
    });

    //dispatch()
    try {
      const data = await login(loginForm);
      if (data.success) {
        //dispatch(loginUser(data.data));
        const dataUser = await getMe();
        if (dataUser.success) {
            console.log('dataUser.data => ',dataUser.data)
          dispatch(authSuccess(dataUser.data));
        } else {
          console.log(dataUser.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col xs={0} sm={0} md={{ span: 10, offset: 0 }}>
        <Image preview={false} width="100%" src={landing} alt="landing" />
      </Col>
      <Col xs={24} sm={{ span: 24 }} md={{ span: 8, offset: 2 }}>
        <WrapperStyled>
          <div>
            <TextStyled>
              Đăng nhập cùng <Text strong>Corgi Soccer</Text>{" "}
            </TextStyled>
            <ParagraphStyled>
              Quản lý sân bóng của bạn một cách hiệu quả.
            </ParagraphStyled>
          </div>

          <Form name="normal_login" form={form} onFinish={handleOnFinish}>
            <Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input
                name="phone"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Số điện thoại"
                size="large"
                value={loginForm.phone}
                onChange={handleUser}
              />
            </Item>
            <Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password
                name="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Mật khẩu"
                size="large"
                value={loginForm.password}
                onChange={handleUser}
              />
            </Item>

            <Item>
              <Item name="remember" valuePropName="checked" noStyle>
                <Checkbox
                  name="remember"
                  value={remember}
                  onChange={handleRemember}
                >
                  Nhớ mật khẩu
                </Checkbox>
              </Item>
              <Link to="/forgot" className="login-form-forgot">
                Quên mật khẩu?
              </Link>
            </Item>

            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Đăng nhập
              </Button>
            </Item>
          </Form>
        </WrapperStyled>{" "}
      </Col>
    </Row>
  );
}

export default Login;
