import React from 'react'
import { Button as BaseButton } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

function Button(props) {
    return (
        <BaseButton  {...props} className={classNames("button", props.className, { "button--large" : (props.size === "large") })} /> //if then
    )
}

Button.propTypes = {
    className: PropTypes.string
};

export default Button;