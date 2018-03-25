import React from 'react'

import Tag from './Tag'

const Tags = ({tags, deleteTodo}) => (
    <div style={{ margin: '1rem 0 1rem 0' }}>
        {tags.map((tag, i) => <Tag key={i} text={tag} deleteTodo={deleteTodo}/>)}
    </div>
)

export default Tags