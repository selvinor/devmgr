const initialState = {
  plants: [], 
  hasErrored: false,
  isLoading: false

}
export const plantReducer = (state=initialState, action) => {
  switch (action.type) {
  //   case 'FETCH_PLANT_REQUEST':
  //   return Object.assign({}, state, {        
  //     isLoading: true,
  //     hasErrored: null
  //   }); 

    case 'FETCH_PLANT_SUCCESS':
    console.log('fetch plant success action.plants: ', action.plants);
      return Object.assign({}, state, {        
        plants: action.plants
    });

  //   case 'PLANTS_HAS_ERRORED':
  //     return Object.assign({}, state, {
  //       hasErrored: action.hasErrored
  //   });  

  //   case 'PLANTS_IS_LOADING':
  //     return Object.assign({}, state, {
  //       isLoading: action.isLoading
  //   }); 
  //   case  'LOAD_TEST_DATA':
  //   return Object.assign({}, state, {
  //     plants: action.testData
  // }); 

    case 'ADD_PLANT_SUCCESS':
    console.log('************ plant reducer. action.newPlant: ', action.newPlant);
    return Object.assign({}, state, {
      plants: [...state.plants, action.newPlant]
    });
          
    default:
        return state;
  }
}  
