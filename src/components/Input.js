import React from 'react'

const Input = ({text, handleChange, handleAdd}) => (
    <div>
        <div>Your skills (Upto 10)</div>
        <input
            type="text"
            value={text}
            onChange={handleChange}
        />
        <button onClick={handleAdd} type="button">Add</button>
    </div>
)

export default Input