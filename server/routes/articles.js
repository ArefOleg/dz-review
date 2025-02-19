const router = require('express').Router();
const { Article, Block, Image } = require('../models/index');

// Создание статьи
router.post('/', async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Получение всех статей с связанными данными
router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [Block, Image]
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение конкретной статьи
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [Block, Image]
    });
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Обновление статьи
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Article.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Article not found' });
    res.json(await Article.findByPk(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Удаление статьи
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Article.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Article not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Добавление блока к статье
router.post('/:articleId/blocks', async (req, res) => {
  try {
    const block = await Block.create({
      ...req.body,
      articleId: req.params.articleId
    });
    res.status(201).json(block);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Добавление изображения к статье
router.post('/:articleId/images', async (req, res) => {
  try {
    const image = await Image.create({
      ...req.body,
      articleId: req.params.articleId
    });
    res.status(201).json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;