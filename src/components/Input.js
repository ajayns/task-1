import React from 'react'

const Input = ({text, handleChange, handleAdd, inputDisabled, addDisabled}) => (
    <div>
        <div>Your skills (Upto 10)</div>
        <input
            type="text"
            value={text}
            onChange={handleChange}
            disabled={inputDisabled}
        />
        <button 
            type="button"
            onClick={handleAdd}
            disabled={addDisabled}
            className="button"
            style={{ margin: '0 1rem' }}
        >
            Add
        </button>
    </div>
)

export default Input