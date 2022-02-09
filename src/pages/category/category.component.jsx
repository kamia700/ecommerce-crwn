import React from 'react';

import './category.styles.scss';
import CollectionItem from '../../components/collecton-item/collecton-item.component';

const CategoryPage = ({match}) => {
  console.log(match)
  return (
  <div className='category'>
    <h2>Category Page</h2>
  </div>
  )
};

export default CategoryPage;