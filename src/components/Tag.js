import React from 'react'

const Tag = ({text, deleteTodo}) => (
    <div className="tag">
        {text}
        <button 
            type="button" 
            onClick={e => deleteTodo(text)}
            className="close"
        >
            x
        </button>
    </div>
)

export default Tag