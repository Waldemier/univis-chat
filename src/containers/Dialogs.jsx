import React from 'react'
import { DialogList } from '../components'

export default function Dialogs({ items, userId }) {
    const [inputValue, setValue] = React.useState('');
    const [filtered, setFiltered] = React.useState(Array.from(items));

    const onChangeInput = value => {
        setFiltered(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)) //if index letter does exist in fullname
        setValue(value)
    }

    return (
        <div>
            <DialogList items={filtered} userId={userId} onSearch={onChangeInput} inputValue={inputValue} />
        </div>
    )
}
