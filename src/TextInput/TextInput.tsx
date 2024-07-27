import React, { ChangeEvent } from 'react'

const TextInput = () => {
    const [text, setText] = React.useState('')

    return (
        <div>
            <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setText(e.target.value)
                }}
                value={text}
                placeholder="Enter some text"
            />
            <p>{text}</p>
        </div>
    )
}

export default TextInput
