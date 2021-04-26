import React from 'react';
import { MessageStatusIcon } from '../';
import className from 'classnames';
import { format, isSameMonth, isSameDay, isSameWeek } from 'date-fns';
import { DefaultAvatar } from '../';

const setMessageTime = createdAt => {
    let currentDate = new Date();
    if (!isSameDay(createdAt, currentDate) && isSameWeek(createdAt, currentDate)) {
        return format(createdAt, "EEEE")
    }
    else if (!isSameMonth(createdAt, currentDate)) {
        return format(createdAt, "dd.MM.yyyy")
    }
    else {
        return format(createdAt, "HH:mm")
    }
}


export default function DialogListItem({ user, message, date, unread, isMe, hasRead }) {
    return (
        <div className="dialog-list">
            <div className={className("dialog-list__item", { "dialog-list__item--online": user.isOnline })}>
                <div className="dialog-list__item-avatar">
                    <DefaultAvatar user={user} />
                </div>
                <div className="dialog-list__item-info">
                    <div className="dialog-list__item-info-top">
                        <b>{user.fullname}</b>
                        <time>
                            {setMessageTime(message.createdAt)}
                        </time>
                    </div>
                    <div className="dialog-list__item-info-bottom">
                        <p>
                            {message.text}
                        </p>
                        {/* if i send iMe == true */}
                        {isMe && <MessageStatusIcon isMe={true} hasRead={hasRead} />}
                        {unread > 0 && <div className="dialog-list__item-info-bottom-amount">{unread > 10 ? '+10' : unread}  </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
