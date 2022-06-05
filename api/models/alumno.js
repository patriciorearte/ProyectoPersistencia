module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {});
  alumno.associate = function(models) {
    // associations can be defined here

    alumno.hasMany(models.carrera
      ,{
        as: 'relacion-alumnno-carrera',
        foreingKey: 'id_carrera'
      })
  };
  return alumno;
};