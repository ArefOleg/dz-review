const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Article = require('./models/Article');
const Block = require('./models/Block');
const Image = require('./models/Image');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Синхронизация моделей
sequelize.sync({ force: true }).then(async () => {
  console.log('Database synced');
});

// Роуты
app.use('/api/articles', require('./routes/articles'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});