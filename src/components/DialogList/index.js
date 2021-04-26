import React from 'react';

import orderBy from 'lodash/orderBy';

import { DialogListItem } from '../';
import { Input, Empty } from 'antd';

import './Dialog.scss';

const { Search } = Input;

export default function DialogList({ items, userId, onSearch, inputValue }) {
    return (
        <div className="dialog-list">
            <div className="dialog-list__search">
                <Search placeholder="Пошук серед контактів" onChange={e => onSearch(e.target.value)} value={inputValue} />
            </div>
            {items.length ? orderBy(items, ['createdAt'], ['desc']).map((item, index) => ( //desc - за спаданням, asc - за зростанням || createdAt - what we sorted (element of items)
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
            ) : <Empty description="Нічого не знайдено" />}
        </div>
    )
}
