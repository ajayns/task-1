import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

const Tag = SortableElement(({text, deleteTag}) => (
    <div className="tag">
        {text}
        <button 
            type="button" 
            onClick={e => deleteTag(text)}
            className="close"
        >
            x
        </button>
    </div>
))

export default Tag