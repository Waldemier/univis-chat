import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Status.scss';

export default function Status({ online }) {
    return (
        <span className={classNames("status", { "status--online": online })}>{online ? 'в мережі' : 'не в мережі'}</span>
    )
}

Status.propTypes = {
    online: PropTypes.bool
}