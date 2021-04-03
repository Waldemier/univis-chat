import React from 'react';

import orderBy from 'lodash/orderBy';

import { DialogListItem } from '../';


export default function DialogList({ items, userId }) {
    return ( 
        <div>
            {
                orderBy(items, ['createdAt'], ['desc']).map((item, index) => ( //desc - за спаданням, asc - за зростанням || createdAt - what we sorted (element of items)
                        <DialogListItem
                            key={item + index}
                            userId={0}
                            user={item.user}
                            message={item}
                            isMe={item.user._id === userId}
                            hasRead={item.hasRead}
                            unread={0}
                        />
                    )
                )
            }
        </div>
    )
}
