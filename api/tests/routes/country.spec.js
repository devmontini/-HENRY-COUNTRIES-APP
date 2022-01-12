/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');//SERVER
const { Country, conn } = require('../../src/db.js');//DB

const agent = session(app);
const country = { //agregar los datos q faltaban
  id: 'ARG',
  name: 'Argentina',
  flags: "https://flagcdn.com/ar.svg",
  continents: "South America",
  capital: "Buenos Aires",
  subregion: "South America",
  area: '2780400',
  population: '45376763',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country))); //decia pokemon


    // ME MOSTRARA LAS ACTIVIDADES
    describe('GET /countries TODO', () => {
      it('should get 200', () =>
        agent.get('/countries')
          .expect(200)
      );
    });

      // ME MOSTRARA LA ACTIVIDAD POR QUERY
    describe('GET /countries QUERY', () => {
      it('should get 200', () =>
        agent.get('/countries?name=Argentina')
        .expect(200)
      );
    });

    // ME MOSTRARA LA ACTIVIDAD POR ID
    describe('GET /countries ID', () => {
      it('should get 200', () =>
        agent.get('/countries/ARG')
        .expect(200)
      );
    });
});
