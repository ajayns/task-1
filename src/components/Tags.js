import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import Tag from './Tag'

const Tags = SortableContainer(({tags, deleteTag}) => (
    <div style={{ margin: '1rem 0 1rem 0' }}>
        {tags.map((tag, i) => <Tag key={i} index={i} text={tag} deleteTag={deleteTag}/>)}
    </div>
))

export default Tags