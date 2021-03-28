import React from 'react';
import { MessageDate, MessageStatusIcon } from '../';
import className from 'classnames';

import './DialogListItem.scss';

const getAvatar = avatarUrl => {
    if (avatarUrl) {
        return (<img src={avatarUrl} alt="" />);
    }
    else {
        //TODO: make the default avatar like telegram
    }
}

export default function DialogListItem({ user, message, date, unread }) {
    return (
        <div className="dialog-list">
            <div className={className("dialog-list__item", { "dialog-list__item--online": user.isOnline })}>
                <div className="dialog-list__item-avatar">
                    {getAvatar("https://source.unsplash.com/100x100/?random=1&nature,water")}
                </div>
                <div className="dialog-list__item-info">
                    <div className="dialog-list__item-info-top">
                        <b>Князь Володимир</b>
                        <time>
                            {/* <MessageDate date={new Date("Fri Mar 26 2021 12:25:30")} /> */}
                        21:51
                    </time>
                    </div>
                    <div className="dialog-list__item-info-bottom">
                        <p>
                            Билинний князь Володимир не є точним...
                    </p>
                        <MessageStatusIcon isMe={true} hasRead={true} />
                        {unread > 0 && <div className="dialog-list__item-info-bottom-amount">{unread > 10 ? '+10' : unread}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
