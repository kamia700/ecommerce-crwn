import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
          {
            title: 'Accessories',
            imageUrl: 'https://i.ibb.co/8XJnZF9/accessories.png',
            id: 1,
            linkUrl: 'accessories'
          },
          {
            title: 'Shoes',
            imageUrl: 'https://i.ibb.co/C64FHFw/shoes.png',
            id: 2,
            linkUrl: 'shop/shoes'
          },
          {
            title: 'Clothing',
            // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            imageUrl: 'https://i.ibb.co/rm9gxmf/clothing1.png',
            // imageUrl: 'https://i.ibb.co/Bqp7FyF/clothing.png',
            id: 3,
            linkUrl: 'shop/clothing'
          },
          {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/PNxjf80/woman.png',
            // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/kqBJWPv/man.png',
            // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>  
    ) 
  }
}

export default Directory;