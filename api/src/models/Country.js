const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    flags: {
      type: DataTypes.STRING,
    },
    
    continents: {
      type: DataTypes.STRING,
    },

    capital: {
      type: DataTypes.STRING,
    },

    subregion: {
      type: DataTypes.STRING,
    },

    area: {
      type: DataTypes.INTEGER,
    },

    population: {
      type: DataTypes.INTEGER,
    },
    
    createInDataBase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {timestamps: false}, 
  {freezeTableName: true} 
  );
};
