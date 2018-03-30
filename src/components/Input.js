import React from 'react'

const Input = ({text, handleChange, handleAdd, inputDisabled, addDisabled}) => (
    <form>
        <div>Your skills (Upto 10)</div>
        <input
            type="text"
            value={text}
            onChange={handleChange}
            disabled={inputDisabled}
        />
        <button 
            onClick={handleAdd}
            disabled={addDisabled}
            className="button"
            style={{ margin: '0 1rem' }}
        >
            Add
        </button>
    </form>
)

export default Input