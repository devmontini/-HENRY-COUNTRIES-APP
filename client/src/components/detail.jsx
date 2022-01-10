import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getDetails } from "../actions";
import { useEffect } from "react";

export default function GetDetailsCountry(props){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(props.match.params.id))
    })

    const myCountry = useSelector((state) => state.detail)

    return (
        <div>
            {
                myCountry
                ?<div>
                    <img src= {myCountry.flags} alt='country' width= '200px' height= '250px'/>
                    <h1>{myCountry.name}</h1>
                    <h4>Id: {myCountry.id}</h4>
                    <h4>Continent: {myCountry.continents}</h4>
                    <h4>Capital: {myCountry.capital}</h4>
                    <h4>Subregion: {myCountry.subregion}</h4>
                    <h4>Area: {myCountry.area}</h4>
                    <h4>Population: {myCountry.population}</h4>
                    {
                        myCountry.activities && myCountry.activities.length  
                        ? myCountry.activities.map(el =>
                            <li> Name: <span>{el.name} </span>      
                                <p>Duration: <span>{el.dificultad}</span>  Days  </p>   
                                <p>Difficulty: <span>{el.duracion}</span> </p>   
                                <p>Season: <span>{el.temporada}</span></p> 
                            </li>) 
                        : <h3>No hay actividades actualmente</h3>
                    }
                </div> 
                : <div>
                    <img src="https://i.pinimg.com/originals/76/59/35/7659353c8fcde74a4c224dafd7a5eccf.gif" alt="country" />
                    <p>Loading...</p> 
                </div>
            }
            <p>
                <Link to= '/home' ><button>Return</button></Link>
            </p>
        </div>
    )
}