import React from 'react';

import './collecton-preview.styles.scss';
import CollectionItem from '../collecton-item/collecton-item.component';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}/>
      ))}
    </div>
  </div>
)

export default CollectionPreview;