const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const counrtyRouter = require('./countries.js')
const activityRouter = require('./activities.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', counrtyRouter)
router.use('/activities', activityRouter)


module.exports = router;
