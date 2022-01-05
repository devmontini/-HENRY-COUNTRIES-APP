const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dificultad: {
      type: DataTypes.STRING,
    },
    
    duracion: {
      type: DataTypes.STRING,
    },

    temporada: {
      type: DataTypes.STRING,
    },
    
  },
    {timestamps: false}, 
    {freezeTableName: true} 
  );
};