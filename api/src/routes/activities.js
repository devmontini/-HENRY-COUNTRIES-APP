const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db')
const axios = require('axios');


const activityRouter = Router();

activityRouter.post("/", async (req, res) => {
    let {name, dificultad, duracion, temporada, idPais} = req.body

    try {
        if (name) {
            
            let createActividad = await Activity.create({
                name,
                dificultad,
                duracion,
                temporada
            });

            let createdDb = await Country.findAll({
                where: {id: idPais}
            });
            
            createActividad.addCountries(createdDb)

            res.status(200).send('Actividad creada')
        } else {
            res.send('Actividad no creada')
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = activityRouter;