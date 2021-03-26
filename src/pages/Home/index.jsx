import React from 'react'

import { Message } from '../../components'

import './Home.scss'

export default function Home() {
    return (
        <div>
            <section className="home">
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
                    hasReaded={false}
                />
            </section>
        </div>
    )
}
