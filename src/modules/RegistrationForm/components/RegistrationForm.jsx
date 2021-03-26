import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

export default function RegistrationForm(props) {

    const [status, setStatus] = React.useState(false);

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
    } = props;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const temporaryStatusHandler = () => {
        setStatus(!status);
    }

    return (
        <div>
            <div className="auth__top">
                <h2>Реєстрація</h2>
                <p>Для входу в чат вам потрібно зареєструватися</p>
            </div>
            <Block>
                {!status ? (
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={handleSubmit} //antd alternative to onSubmit default form tag
                    >
                        <Form.Item
                            hasFeedback //for ant validate icon
                            validateStatus={!touched.email ? '' : errors.email && touched.email ? "error" : "success"}
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
                        <Form.Item>
                            <Input size="large" style={{ height: 50 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше ім'я" />
                        </Form.Item>
                        <Form.Item
                            hasFeedback //for ant validate icon
                            validateStatus={!touched.password ? '' : errors.password && touched.password ? "error" : "success"}
                            help={errors.password}
                        >
                            <Input
                                id="password"
                                size="large"
                                style={{ height: 50 }}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Пароль"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                size="large"
                                style={{ height: 50 }}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Повторіть пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large" onClick={handleSubmit}>
                                Зареєструватися
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Увійти в аккаунт</Link>
                    </Form>
                )
                    :
                    <div className="auth__success-block">
                        <div><InfoCircleTwoTone style={{ fontSize: 45 }} /></div>
                        <h2>Підтвердіть свій аккаунт</h2>
                        <p>На вашу пошту відправлено лист з посилання на підтвердження аккаунту.</p>
                    </div>
                }
            </Block>

        </div>
    )
}
