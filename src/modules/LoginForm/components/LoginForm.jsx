import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function LoginForm() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div className="auth__top">
                <h2>Увійти в аккаунт</h2>
                <p>Будь ласка, увійдіть у свій аккаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input size="large" style={{ height: 50 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            size="large"
                            style={{ height: 50 }}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large">
                            Увійти в аккаунт
                </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/registration">Зареєструватися</Link>
                </Form>
            </Block>
        </div>
    )
}
