import React from 'react'

import Tag from './Tag'

const Tags = ({tags}) => (
    <div>
        {tags.map((tag, i) => <Tag key={i} text={tag} />)}
    </div>
)

export default Tags