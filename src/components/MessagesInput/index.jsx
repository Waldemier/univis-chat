import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

import './MessagesInput.scss'

const onSearch = value => console.log(value);

export default function MessagesInput() {
    const [print, setPrint] = React.useState('');
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" shape="circle" icon={<SmileOutlined />} />
            </div>
            <Input onChange={e => setPrint(e.target.value)} size="large" placeholder="Введіть текст повідомлення" onSearch={onSearch} />
            <div className="chat-input__actions">
                <Button type="link" shape="circle" icon={<CameraOutlined />} />
                {print ? <Button type="link" shape="circle" icon={<SendOutlined />} /> : <Button type="link" shape="circle" icon={<AudioOutlined />} />}
            </div>
        </div>
    )
}
