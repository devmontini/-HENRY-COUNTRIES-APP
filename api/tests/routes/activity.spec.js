/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activiti = { //agregar los datos q faltaban
  id: 2,
  name: 'Rafting',
  dificultad: 2,
  duracion: '1.30',
  temporada: "Verano",
};

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(activiti))); 

    // ME MOSTRARA LAS ACTIVIDADES
    describe('POST /activities', () => {
        it('should get 200', () =>{
            agent.post('/activities')
            .send({
                id: 1,
                name: 'asdasd',
                dificultad: 3,
                duracion: '1.40',
                temporada: "Verano",
            }).expect(200);
        });
    });

    describe('GET /activities', () => {
        it('should get 200', () =>
            agent.get('/activities').expect(200)
        );
    });

});