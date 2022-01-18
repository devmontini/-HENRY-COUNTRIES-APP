const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db')
const axios = require('axios');


const activityRouter = Router();

activityRouter.get("/", async (req, res) => {
    try {
        let getAllActivities = await Activity.findAll({
            include: Country
        });
        return res.status(200).json(getAllActivities);
    } catch (error) {
        return next(error);
    }
})

activityRouter.post("/", async (req, res) => {

    try {

        let {name, dificultad, duracion, temporada, idPais} = req.body

        const createActividad = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada
        });
    
        await createActividad.setCountries(idPais); 
    
        res.status(200).json({ mesage: 'Se creo', createActividad });
    
    } catch (error) {
        console.log(error);
    }
})

module.exports = activityRouter;