import DirectoryActionTypes from './directory.types';

const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}
export default directoryReducer;