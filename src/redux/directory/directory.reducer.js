const initialState = {
    sections : [
             
        {
          title: 'Hats',
          imageUrl: 'https://images.unsplash.com/photo-1575846171058-979e0c211b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
          id: 1,
          linkUrl: 'shop/hats'
          
        },
        {
          title: 'Jackets',
          imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]

};


const directoryReducer = (state = initialState, action) => {
    switch(action.type) {
    




default:
   return state;
}
        
}

export default directoryReducer;