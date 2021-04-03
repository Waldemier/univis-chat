import React from 'react'

import { Message, DialogListItem, DialogList } from '../../components'

import './Home.scss'

export default function Home() {
    return (
        <div>
            <section className="home">

                <DialogList
                    userId={2}
                    items={[
                        {
                            text: "Билинний князь Володимир не є точним...",
                            hasRead: false,
                            createdAt: new Date(2021, 2, 26),
                            user: {
                                _id: "aab942e26a18329540139afcdf350584",
                                fullname: "Князь київський",
                                isOnline: false,
                                avatarUrl: "https://source.unsplash.com/100x100/?random=1&nature,water"
                            }
                        },
                        {
                            text: "Билинний князь Володимир не є точним...",
                            hasRead: false,
                            createdAt: new Date(),
                            user: {
                                _id: "b1238bf94cd25f28266970965553be9f",
                                fullname: "Князь новгородський",
                                isOnline: true,
                            }
                        }
                    ]}
                />

                <Message
                    avatar_url="https://lh3.googleusercontent.com/a-/AOh14GiDvCr94ndzmracMCr5pPFHZAfHSWoyUU9gLiiH7w=s96-c-rg-br100"
                    date={new Date("Fri Mar 26 2021 12:25:30")}
                    audio="https://ringon.site/?do=get-file&id=55346"
                />
                {/* <DialogListItem user={{ fullname: "Князь київський", isOnline: false }} unread={0} />
                <DialogListItem user={{ fullname: "Князь київський", isOnline: true }} unread={7} />
                <DialogListItem user={{ fullname: "Князь київський", isOnline: true }} unread={12} /> */}
                {/* <Message
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
                    isTyping
                /> */}
            </section>
        </div>
    )
}
