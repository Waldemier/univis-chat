import React from 'react'
import checkedSvg from '../../assets/img/checked.svg';
import uncheckedSvg from '../../assets/img/unchecked.svg';
import PropTypes from 'prop-types';

const MessageStatusIcon = ({ isMe=true, hasRead }) => {
    return isMe && (hasRead ?
        (<img className="message__icon-read" src={checkedSvg} alt="Checked icon" />)
        :
        (<img className="message__icon-read message__icon-read--unread" src={uncheckedSvg} alt="Unchecked icon" />)
    );
};

MessageStatusIcon.propTypes = {
    isMe: PropTypes.bool,
    hasRead: PropTypes.bool,
};

export default MessageStatusIcon;
