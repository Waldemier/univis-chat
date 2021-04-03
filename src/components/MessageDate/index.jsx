import React, { Fragment } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import uk from 'date-fns/locale/uk';
import PropTypes from 'prop-types';

const MessageDate = ({ date }) => (
    <Fragment>
        {formatDistanceToNow(date, { addSuffix: true, locale: uk })}
    </Fragment>
)


MessageDate.propTypes = {
    date: PropTypes.object
};

export default MessageDate;