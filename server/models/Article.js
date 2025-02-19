module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Article.associate = models => {
        Article.hasMany(models.Block, { onDelete: 'CASCADE' });
        Article.hasMany(models.Image, { onDelete: 'CASCADE' });
    };

    return Article;
};