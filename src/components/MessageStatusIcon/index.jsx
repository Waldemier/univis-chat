import React from 'react'
import checkedSvg from '../../asserts/img/checked.svg';
import uncheckedSvg from '../../asserts/img/unchecked.svg';
import PropTypes from 'prop-types';

const MessageStatusIcon = ({ isMe, hasRead }) => {
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