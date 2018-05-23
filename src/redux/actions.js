import fetch from 'cross-fetch';

export const ORDER_STATUS = 'RECENT';
export const LOAD_CAMPERS = 'LOAD_CAMPERS';

export function changeOrderStatus(order) {
  return {
    type: ORDER_STATUS,
    order: order
  };
}

export function loadCampers(order = 'recent') {
  let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/' + order;
  return function (dispatch) {
    return fetch(url)
        .then(
            response => response.json(),
            error => console.log('Error Occured: ' + error)
        ).then(data => {
          console.log('Data has been loaded.', data);
          dispatch({
            type: LOAD_CAMPERS,
            campers: data
          });
        });
  }
}