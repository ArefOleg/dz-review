module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
      path: DataTypes.STRING,
      articleId: DataTypes.INTEGER
    });
  
    Image.associate = models => {
      Image.belongsTo(models.Article);
    };
  
    return Image;
  };