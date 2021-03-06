const API = "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";

// this function makes the petition of the Api
async function getRestaurants() {
    const response = await fetch(API, {
        "Content-Security-Policy": "upgrade-insecure-requests"
    })
    return response.json();
}

export default getRestaurants