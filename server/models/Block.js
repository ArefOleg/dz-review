module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
      date: DataTypes.DATE,
      text: DataTypes.TEXT,
      title: DataTypes.STRING,
      articleId: DataTypes.INTEGER
    });
  
    Block.associate = models => {
      Block.belongsTo(models.Article);
    };
  
    return Block;
  };