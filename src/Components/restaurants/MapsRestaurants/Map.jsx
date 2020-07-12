import React, { useContext } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
import { UserContext } from '../../Context/RestaurantContext'
import './MapsRestaurants.css'

import {
    PHONE_NOT_AVAILABLE,
    NOT_AVAILABLE,
    ADDRESS_NOT_AVAILABLE,
    CROSS_STREET_NOT_AVAILABLE,
    STATE_NOT_AVAILABLE,
    CODE_NOT_AVAILABLE
} from '../../../utils/constants'


const Map = (props) => {
    const { restaurantSelected } = useContext(UserContext);
    // location of restaurant
    const validInfo = (infoToCheck, keyword) => {
        return (infoToCheck === null || infoToCheck === undefined ? keyword : infoToCheck);
    }
    console.log('this is restaurants selected')
    console.log(restaurantSelected)
    const latitud = restaurantSelected?.location?.lat;
    const longitud = restaurantSelected?.location?.lng;
    const adress = validInfo(restaurantSelected?.location?.address, ADDRESS_NOT_AVAILABLE);
    const crossStreet = validInfo(restaurantSelected?.location?.crossStreet, CROSS_STREET_NOT_AVAILABLE);
    const state = validInfo(restaurantSelected?.location?.state, STATE_NOT_AVAILABLE);
    const PostalCode = validInfo(restaurantSelected?.location?.postalCode, CODE_NOT_AVAILABLE);
    let formattedPhone = validInfo(restaurantSelected?.contact?.formattedPhone, PHONE_NOT_AVAILABLE);
    const twitter = '@twitter ' + validInfo(restaurantSelected?.contact?.twitter, NOT_AVAILABLE);

    return (
        <>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: latitud, lng: longitud }}
            />

            <div className='containerNameRestaurantMap'>
                <h5 className='textNameRestaurant'>
                    {restaurantSelected.name}
                </h5>
                <p className='textCategoryRestaurant'>
                    {restaurantSelected.category}
                </p>
            </div>
            <div className='containerInfoRestaurantMap'>
                <p className='textAdressRestaurant'>
                    {adress}
                </p>
                <p className='textCrossStreetRestaurant'>
                    {`${crossStreet}, ${state} ${PostalCode}`}
                </p>
                <p className='textPhoneRestaurant'>
                    {formattedPhone}
                </p>
                <p className='texTwitterRestaurant'>
                    {twitter}
                </p>
            </div>
        </>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
);