import React from 'react';

import { Messages, Status, MessagesInput } from '../../components';

import { Dialogs } from '../../containers';

import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './Home.scss'

export default function Home() {
    return (
        <div>
            <section className="home">
                <div className="chat">
                    <div className="chat__sidebar">

                        <div className="chat__sidebar-header">
                            <div>
                                <TeamOutlined />
                                <span>Список діалогів</span>
                            </div>
                            <Button type="link" shape="circle" icon={<FormOutlined />} />
                        </div>

                        <div className="chat__sidebar-dialogs">
                            <Dialogs
                                userId={2}
                                items={[
                                    {
                                        "_id": "1442f12857814e2cc6607b09c4b1ce98",
                                        "text": "Voluptate officia esse labore minim labore ex. Sunt irure dolore irure id id. Enim nisi labore amet proident ut culpa.",
                                        "createdAt": new Date(2021, 2, 7),
                                        "user": {
                                            "_id": "1442f12857814e2cc6607b09c4b1ce98",
                                            "fullname": "Nancy Henry",
                                            "isOnline": false,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "6b38f04aa37259792fc1a2fd19fd8bc6",
                                        "text": "Reprehenderit quis incididunt laboris laborum consequat culpa quis fugiat fugiat in cillum. Id non ad ad ex consequat. Aliqua ea et ex Lorem aliqua ex laboris deserunt et dolor veniam non.",
                                        "createdAt": new Date(2021, 2, 9),
                                        "user": {
                                            "_id": "6b38f04aa37259792fc1a2fd19fd8bc6",
                                            "fullname": "Sexton William",
                                            "isOnline": true,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "52e136f34494d7c4652bb565349179ea",
                                        "text": "Minim officia nisi velit amet sunt ea tempor. Aute proident occaecat incididunt laboris eu. Ad exercitation id incididunt non consequat ut esse aliquip.",
                                        "createdAt": new Date(2021, 2, 11),
                                        "user": {
                                            "_id": "52e136f34494d7c4652bb565349179ea",
                                            "fullname": "Kathleen Paul",
                                            "isOnline": false,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "dbc77edc59a2e24e8c37eaf6dad7e0cd",
                                        "text": "Occaecat pariatur quis non esse ea id sit. Minim qui ullamco cupidatat ea voluptate voluptate ipsum dolor exercitation velit cupidatat dolor. Ea ex dolor esse nulla excepteur qui minim deserunt aliquip proident exercitation ad irure.",
                                        "createdAt": new Date(2021, 2, 20),
                                        "user": {
                                            "_id": "dbc77edc59a2e24e8c37eaf6dad7e0cd",
                                            "fullname": "Lee Rivers",
                                            "isOnline": true,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "55f3d1c5aed1601ad7b8a896a7eecefc",
                                        "text": "Consectetur pariatur excepteur eiusmod anim sit in eu commodo pariatur occaecat elit consectetur. Id minim veniam tempor aliquip non do dolor consectetur officia labore ex ullamco duis aliqua. Minim velit exercitation culpa Lorem ea qui sunt id ullamco elit anim duis nisi.",
                                        "createdAt": new Date(2021, 1, 7),
                                        "user": {
                                            "_id": "55f3d1c5aed1601ad7b8a896a7eecefc",
                                            "fullname": "Willa Chase",
                                            "isOnline": true,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "e226697f588c950b942413618b485951",
                                        "text": "Tempor et ea minim Lorem consequat est mollit laborum officia. Fugiat nostrud commodo adipisicing sunt elit. Amet aliqua sint officia mollit qui reprehenderit id laboris ex anim pariatur exercitation ullamco.",
                                        "createdAt": new Date(2020, 11, 22),
                                        "user": {
                                            "_id": "e226697f588c950b942413618b485951",
                                            "fullname": "Figueroa Alvarado",
                                            "isOnline": false,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "78c0beba129198f85ba8077a536b0162",
                                        "text": "Magna deserunt ullamco qui adipisicing minim veniam cillum excepteur quis sunt fugiat id est deserunt. Dolore id exercitation proident aute veniam est occaecat eu. Tempor proident magna sint consequat.",
                                        "createdAt": new Date(2020, 6, 20),
                                        "user": {
                                            "_id": "78c0beba129198f85ba8077a536b0162",
                                            "fullname": "Chambers Mejia",
                                            "isOnline": false,
                                            "avatarUrl": null
                                        }
                                    },
                                    {
                                        "_id": "76ad3e5cd39a30b7b0563d26a20c2148",
                                        "text": "Officia reprehenderit voluptate consectetur quis esse quis consectetur eiusmod id quis eu sint eiusmod. Ut occaecat dolor pariatur velit. Nostrud tempor ex do officia eiusmod consectetur nisi.",
                                        "createdAt": new Date(2020, 1, 22),
                                        "user": {
                                            "_id": "76ad3e5cd39a30b7b0563d26a20c2148",
                                            "fullname": "Deena Kirby",
                                            "isOnline": true,
                                            "avatarUrl": null
                                        }
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="chat__main">
                        <div className="chat__main-header">
                            <div />
                            <div className="chat__main-header-center">
                                <b className="chat__main-header-username">Князь Святослав</b>
                                <div className="chat__main-header-status">
                                    <Status online={true} />
                                </div>
                            </div>
                            <Button type="link" shape="circle" icon={<EllipsisOutlined style={{ fontSize: "22px" }} />} />
                        </div>
                        <div className="chat__main-chatting">
                            <Messages />

                        </div>
                        <div className="chat__main-input">
                            <MessagesInput />
                        </div>
                    </div>
                </div>

                {/* 

                <Message
                    avatar_url="https://lh3.googleusercontent.com/a-/AOh14GiDvCr94ndzmracMCr5pPFHZAfHSWoyUU9gLiiH7w=s96-c-rg-br100"
                    date={new Date("Fri Mar 26 2021 12:25:30")}
                    audio="https://ringon.site/?do=get-file&id=55346"
                /> */}
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
