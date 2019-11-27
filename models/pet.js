module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      type: DataTypes.STRING,
      size: DataTypes.STRING,
      gender: DataTypes.STRING,
      coat: DataTypes.STRING,
      age: DataTypes.STRING,
      description: DataTypes.STRING,
      photos: DataTypes.STRING,
    });
    return Pet;
  };
  

  //add description and photos