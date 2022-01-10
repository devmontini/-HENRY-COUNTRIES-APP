const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db')
const axios = require('axios');


const counrtyRouter = Router();

//AGREGA A LA BD LA DATA DE API
const getDataApi = async () => {
    try {
        const dataUrl = await axios.get(`https://restcountries.com/v3/all`)
        const dataApi = dataUrl.data.map(el =>{
            return {
            id: el.cca3,
            name: el.name.common,
            flags: el.flags[0],
            continents: el.continents[0],
            capital: el.capital ? el.capital[0] : "Sin Capital",
            subregion: el.subregion,
            area: el.area,
            population: el.population,
            }
        })
        return dataApi

    } catch (error) {
        console.log('No nos llego info desde la Api', error);
    }
}


//BUSCAR EN BD NOMBRE O TODA LA DB(si hay o no bd creada)
counrtyRouter.get('/', async (req, res) =>{

    const {name} = req.query
    const paisesBd = await Country.findAll()

    try {

        if(!paisesBd.length) {

            let infoCountries = await getDataApi()
            await Country.bulkCreate(infoCountries)
            const paisesBd = await Country.findAll()

            if (name) {
                let countriesName = paisesBd.find(e => e.name.toLowerCase() === name.toLowerCase());
                if(countriesName === undefined) {
                    return res.status(404).send('No encontrado')
                } else {
                    return res.json(countriesName) 
                }
            } else {
                return res.json(paisesBd) 
            }

        } else {

            if (name) {
                let countriesName = paisesBd.find(e => e.name.toLowerCase() === name.toLowerCase());
                if(countriesName === undefined) {
                    return res.status(404).send('No encontrado2')
                } else {
                    return res.json(countriesName) 
                }
            } else {
                return res.json(paisesBd) 
            }

        }

    } catch (error) {
        console.log(error)
    }
})


//BUSCAR POR ID
counrtyRouter.get('/:id', async (req, res) =>{
    const { id } = req.params
    const paisesBd = await Country.findAll({
        include: {model: Activity}
    })

    try {
        if(id){
            let countriesId = paisesBd.find(e => e.id === id);
            if(countriesId === undefined) {
                return res.status(404).send('No encontrado2')
            } else {
                return res.json(countriesId) 
            }
        }
    } catch (error) {
        console.log(error)
    }
})




    
    
module.exports = counrtyRouter;