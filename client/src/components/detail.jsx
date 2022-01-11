import styles from "./modules/detail.module.css"

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
        <div className={styles.container}>
            {
                myCountry
                ?<div className={styles.content}>
                    <img className={styles.img} src={myCountry.flags} alt='country'/>
                    <h1 className={styles.title}>{myCountry.name}</h1>
                    <div className={styles.data}>
                        <div className={styles.info}>
                            <h4>Id: {myCountry.id}</h4>
                            <h4>Continent: {myCountry.continents}</h4>
                            <h4>Capital: {myCountry.capital}</h4>
                            <h4>Subregion: {myCountry.subregion}</h4>
                            <h4>Area: {myCountry.area}</h4>
                            <h4>Population: {myCountry.population}</h4>
                            <Link to= '/home' ><button className={styles.button}>Return</button></Link>
                        </div>
                        <div className={styles.activ}>
                            {
                                myCountry.activities && myCountry.activities.length  
                                ? myCountry.activities.map(el =>
                                    <li><span>{el.name} </span>      
                                        <p>Dificultad: <span>{el.dificultad}</span></p>   
                                        <p>Duracion: <span>{el.duracion}</span> Hs</p>   
                                        <p>Temp: <span>{el.temporada}</span></p> 
                                    </li>) 
                                : <h3>Sin actividades</h3>
                            }
                        </div>
                    </div>
                </div> 
                : <div>
                    <img src="https://i.pinimg.com/originals/76/59/35/7659353c8fcde74a4c224dafd7a5eccf.gif" alt="country" />
                    <p>Loading...</p> 
                </div>
            }
            
        </div>
    )
}