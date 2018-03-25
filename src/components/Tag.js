import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

const Tag = SortableElement(({text, deleteTodo}) => (
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
))

export default Tag