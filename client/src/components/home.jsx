import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCountries, getOrderName, getOrderPopu, getContinent, getAllActivities, byActivity } from '../actions'
import Card from './card'
import Paginado from './paginado';
import SearchBar from './searchBar';

export default function HomePage () {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //La pagina empieza en la 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) //La pagina tiene 12 poke x Pagina
    const indexOfLastCountry = currentPage * countriesPerPage // ultimo personaje en 12 (1 x 12)
    const indexOfFirstCountry =  indexOfLastCountry - countriesPerPage //// primer personaje en 0 (12 - 12)
    const currentCountry = Array.isArray(allCountries) &&  allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    useEffect(() => {
        dispatch(getAllActivities())
    },[dispatch])

    function handleRecargar(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(getOrderName(e.target.value))
        setCurrentPage(1)//setear el ordenamiento en la pagina primera
        setOrden(`Orden ${e.target.value}`)
    }

    function handlSortPopu(e){
        e.preventDefault();
        dispatch(getOrderPopu(e.target.value))
        setCurrentPage(1)
        setOrden(`Orden ${e.target.value}`)
    }

    function handleFilterContinent(e){
        dispatch(getContinent(e.target.value))
    }

    function handleByActivity(e){
        e.preventDefault();
        dispatch(byActivity(e.target.value))
    }

    return(
        <div>

            {/*/////////////// NAV /////////////// */}
            <nav>

                {/* titulo  */}
                <h1>COUNTRIES</h1>

                {/* creacion  */}
                <Link to='/create'> Crea tu actividad </Link>

                {/* search */}
                <SearchBar/>

                {/* recargar */}
                <div> {/* flata recargar de nuevo sin esperear api */}
                    <button onClick={e => {handleRecargar(e)}}>
                        Volver a cargar paises
                    </button>
                </div>

                {/* ordenador */}
                <div>
                    <select onClick={e => {handleSortName(e)}}>
                        <option value='asc'> Ascendente </option>
                        <option value='desc'> Descendente </option>
                    </select>
                    <select onClick={e => {handlSortPopu(e)}}>
                        <option value='popu'> Poblacion asc </option>
                        <option value='pop'> Poblacion des </option>
                    </select>
                </div>

                {/* filtrado */}
                <div>
                    <select onChange={e => handleFilterContinent(e)}>
                        <option value='all'>Mundo</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="South America">South America</option>
                    </select>
                    <select onChange={(e) => handleByActivity(e)}>
                        <option value='All'>All Activities</option>
                        {
                            activities.map((el)=> {
                                return (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })
                        } 
                    </select>
                </div>

            </nav>

            {/*////////////// PAGINADO /////////////// */}
            <div> {/* FALTA PAG 1=9 las otras=12 */}
                <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
            </div>

            {/*/////////////// AREA /////////////// */}
            <div>
                {
                    currentCountry ? currentCountry.map((el)=> {
                        return (
                            <div key={el.id}>
                                <Link to={'/details/' + el.id}>
                                    <Card flags={el.flags} name={el.name} continents={el.continents} key={el.id}/>
                                </Link>
                            </div>
                        )
                    }) :
                    <div>
                        <Link to={'/details/' + allCountries.id}>
                            <Card 
                                flags={allCountries.flags} 
                                name={allCountries.name}
                                continents={allCountries.continents} 
                                key={allCountries.id}>
                            </Card>
                        </Link>
                    </div>
                } 
            </div>
        </div>
    )
}