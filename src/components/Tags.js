import React from 'react'

import Tag from './Tag'

const Tags = ({tags, deleteTodo}) => (
    <div>
        {tags.map((tag, i) => <Tag key={i} text={tag} deleteTodo={deleteTodo}/>)}
    </div>
)

export default Tags