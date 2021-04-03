import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MessageDate, MessageStatusIcon, AudioMessage } from '../';



import './Message.scss';

export default function Message({ avatar_url, user, text, date, isMe, hasRead, attachments, isTyping, audio }) {

    return (
        //if then
        <div className={classNames("message", {
            "message--isMe": isMe,
            "message--isTyping": isTyping,
            "message--isAudio": audio,
            "message--image": attachments && attachments.length === 1
        })}>
            <div className="message__content">
                <MessageStatusIcon isMe={isMe} hasRead={hasRead} />
                <div className="message__avatar">
                    <img src={avatar_url} alt={`${user.fullname} avatar`} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {
                                text && <p className="message__text">{text}</p>
                            }

                            {
                                isTyping && (
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                )
                            }
                            {
                                audio && <AudioMessage audio={audio} />
                            }
                        </div>
                    )
                    }
                    {attachments && (
                        <div className="message__attachments">
                            {
                                attachments.map((item, index) => (
                                    <div key={index} className="message__attachments-item">
                                        <img src={item.url} alt={item.filename} />
                                    </div>
                                ))
                            }
                        </div>
                    )
                    }
                    {date && <time className="message__date">
                        <MessageDate date={date} />
                    </time>}
                </div>
            </div>
        </div>
    )
}

Message.defaultProps = {
    user: { fullname: 'Gaius Julius Caesar' },
};

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.object,
    isMe: PropTypes.bool,
    hasRead: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
};