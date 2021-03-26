import React from 'react'
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import uk from 'date-fns/locale/uk';
import classNames from 'classnames';
import checkedSvg from '../../asserts/img/checked.svg'
import uncheckedSvg from '../../asserts/img/unchecked.svg'

import './Message.scss';

export default function Message({ avatar_url, user, text, date, isMe, hasReaded, attachments }) {
    return (
        //if then
        <div className={classNames("message", { "message--isMe": isMe })}>
            <div className="message__content">
                {isMe && hasReaded ?
                    (<img className="message__icon-readed" src={checkedSvg} alt="Checked icon" />)
                    :
                    (<img className="message__icon-readed message__icon-readed--unreaded" src={uncheckedSvg} alt="Unchecked icon" />)}
                <div className="message__avatar">
                    <img src={avatar_url} alt={`${user.fullname} avatar`} />
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {
                            attachments &&
                            attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))
                        }
                    </div>
                    <time className="message__date">
                        {formatDistanceToNow(date, { addSuffix: true, locale: uk })}
                    </time>
                </div>
            </div>
        </div>
    )
}

Message.defaultProps = {
    user: { fullname: 'Gaius Julius Caesar' },
}

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.object,
    isMe: PropTypes.bool,
    attachments: PropTypes.array
}