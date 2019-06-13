const initialState = {
  orders: [], 
  hasErrored: false,
  isLoading: false

}
export const orderReducer = (state=initialState, action) => {
  switch (action.type) {
  //   case 'FETCH_ORDER_REQUEST':
  //   return Object.assign({}, state, {        
  //     isLoading: true,
  //     hasErrored: null
  //   }); 

    case 'FETCH_ORDER_SUCCESS':
    console.log('fetch order success action.orders: ', action.orders);
      return Object.assign({}, state, {        
        orders: action.orders
    });

  //   case 'ORDERS_HAS_ERRORED':
  //     return Object.assign({}, state, {
  //       hasErrored: action.hasErrored
  //   });  

  //   case 'ORDERS_IS_LOADING':
  //     return Object.assign({}, state, {
  //       isLoading: action.isLoading
  //   }); 
  //   case  'LOAD_TEST_DATA':
  //   return Object.assign({}, state, {
  //     orders: action.testData
  // }); 

    case 'ADD_ORDER_SUCCESS':
    console.log('************ order reducer. action.newOrder: ', action.newOrder);
    return Object.assign({}, state, {
      orders: [...state.orders, action.newOrder]
    });
          
    default:
        return state;
  }
}  
