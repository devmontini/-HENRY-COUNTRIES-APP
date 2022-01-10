import axios from 'axios';

export function getCountries() {

    return async function(dispatch) {

        const res = await axios.get("http://localhost:3001/countries")
            return dispatch({
                type: 'GET_COUNTRIES',
                payload: res.data
            });
    }
}

export function getSearchName(name) {

    return async function(dispatch) {

        var res = await axios.get(`http://localhost:3001/countries?name=${name}`);
        
        return dispatch({
            type: 'GET_NAME_COUNTRY',
            payload: res.data
        })
    }
}

export function getContinent(payload){
    return { 
        type: 'GET_CONTINENT',
        payload
    }
}

export function byActivity (payload){
    return { 
        type: 'BY_ACTIVITY',
        payload
    }
}

export function getAllActivities(payload){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/activities")

            return dispatch({
                type: "GET_ACTIVITIES",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getOrderName(payload){
    return { 
        type: 'GET_ORDER_NAME',
        payload
    }
}

export function getOrderPopu(payload){
    return { 
        type: 'GET_ORDER_POPU',
        payload
    }
}

export function getDetails(id) {
    return async function(dispatch){
        try{
            const res = await axios.get(`http://localhost:3001/countries/${id}`)

            return dispatch ({
                type: 'GET_DETAILS',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload){
    return async function (dispatch) {
         const res = await axios.post("http://localhost:3001/activities",payload);
         return dispatch({
			type: "CREATE_ACTIVITY",
			payload: res.data,
		});
    }
}