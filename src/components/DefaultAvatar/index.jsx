import React from 'react';

import { generateDefaultAvatar } from '../../utils/helpers';

import './DefaultAvatar.scss';

export default function DefaultAvatar({ user }) {
    if (user.avatarUrl) {
        return (<img src={user.avatarUrl} alt={`${user.fullname} avatar`} />);
    }
    else {
        const { color, lightenColor } = generateDefaultAvatar(user._id);
        const firstUsernameSymbol = user.fullname[0].toUpperCase();

        return (
            <div
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${lightenColor} 96.52%)` }}
                className="avatar avatar--symbol" //Задали суфікс для більшої зрозумілості при додаванні стилів у scss
            >
                {firstUsernameSymbol}
            </div>
        )
    }
}
