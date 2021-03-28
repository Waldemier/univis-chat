import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { verificationStatusMethod } from '../../../utils/helpers';

export default function LoginForm(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

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
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        hasFeedback
                        validateStatus={verificationStatusMethod('email', touched, errors, values)}
                        help={errors.email}
                    >
                        <Input
                            id="email"
                            size="large"
                            style={{ height: 50 }}
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="E-Mail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={verificationStatusMethod('password', touched, errors, values)}
                        help={errors.password}
                    >
                        <Input
                            id="password"
                            size="large"
                            style={{ height: 50 }}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
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
