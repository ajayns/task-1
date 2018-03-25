import React from 'react'

const Tag = ({text, deleteTodo}) => (
    <div>
        {text}
        <button type="button" onClick={e => deleteTodo(text)}>x</button>
    </div>
)

export default Tag