import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd';

import { Message } from '../'

export default function Messages({ items }) {
    return items ?
        <div>
            <Message
                avatar_url="https://lh3.googleusercontent.com/a-/AOh14GiDvCr94ndzmracMCr5pPFHZAfHSWoyUU9gLiiH7w=s96-c-rg-br100"
                date={new Date("Fri Mar 26 2021 12:25:30")}
                audio="https://ringon.site/?do=get-file&id=55346"
            />
            <Message
                avatar_url="https://lh3.googleusercontent.com/a-/AOh14GiDvCr94ndzmracMCr5pPFHZAfHSWoyUU9gLiiH7w=s96-c-rg-br100"
                text="Привіт! Як справи ? 🖐🏻"
                date={new Date("Fri Mar 26 2021 12:25:30")}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
                    }
                ]}
            />
            <Message
                avatar_url="https://lh3.googleusercontent.com/a-/AOh14GiDvCr94ndzmracMCr5pPFHZAfHSWoyUU9gLiiH7w=s96-c-rg-br100"
                text="Привіт! 🖐🏻 Все гаразд, ти як ?"
                date={new Date("Fri Mar 26 2021 12:38:30")}
                isMe={true}
                hasRead={false}
            />
            <Message
                avatar_url="https://source.unsplash.com/200x200/?random=3&nature,water"
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    }
                ]}
            />
            <Message
                avatar_url="https://source.unsplash.com/200x200/?random=3&nature,water"
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    }
                ]}
            />
        </div> : <Empty description="Немає повідомлень" />
}

Messages.propTypes = {
    items: PropTypes.array,
}