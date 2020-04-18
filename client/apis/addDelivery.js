import request from 'superagent'

const apiURL = 'http://localhost:3000/api/delivery'

export function addDelivery(
        pickUpAdress,
        pickupLatLng, 
        dropoffAdddress, 
        dropoffLatLng
     )
    {
    return request
    .post(apiURL)
    .send(
        pickUpAdress,
        pickupLatLng,
        dropoffAdddress, 
        dropoffLatLng
        )
    .then(res => res.body)
    .catch(err =>{
      throw new Error(err.message) 
    })
}