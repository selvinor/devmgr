import {REACT_APP_BASE_URL} from '../config';

// export const PLANTS_HAS_ERRORED = 'PLANTS_HAS_ERRORED';
// export const plantsHasErrored = (hasErrored) => ({
//     type: PLANTS_HAS_ERRORED,
//     hasErrored
// });
// export const PLANTS_IS_LOADING = 'PLANTS_IS_LOADING'; 
// export const plantsIsLoading = (isLoading) => ({
//     type: PLANTS_IS_LOADING,
//     isLoading
// });
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS'; 
export const addPlantSuccess = (newPlant) => ({
    type: ADD_PLANT_SUCCESS,
    newPlant
});
export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS';
export const fetchPlantSuccess = (plants) => ({
    type: FETCH_PLANT_SUCCESS,
    plants
});
export const fetchPlants = () => (dispatch, getState)  => {
  console.log('fetch plants fired!');
  //const authToken = getState().auth.authToken;
  fetch(`${REACT_APP_BASE_URL}/`, {
    //fetch('http://192.168.1.5:8080/api/plants', {
    method: 'GET'
    // headers: {
    //     // Provide our auth token as credentials
    //     Authorization: `Bearer ${authToken}`
    // }
})
  .then(res => {
      if (!res.ok) {
        console.log('!!!PROBLEM!!!');
          return Promise.reject(res.statusText);
      }      
      return res.json();
  }).then(data => {
    let  plant_data = data;
    console.log('***** plant: ', plant_data);
    //subscription_data = Object.keys(data);   
    dispatch(fetchPlantSuccess(data));
  })
  .catch(error=> {
    console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}
// export const LOAD_TEST_DATA = 'LOAD_TEST_DATA';
// export const loadTestData = (testData) => ({
//     type: LOAD_TEST_DATA,
//     testData
// });
// Async actions


export const addPlantToPlantLib = () => dispatch => {
  fetch(`${REACT_APP_BASE_URL}/api/plants`)
  .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(newPlant => {
      dispatch(addPlantSuccess(newPlant));
  });
};