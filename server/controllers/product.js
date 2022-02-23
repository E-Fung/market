const Product = require('../db').Product;

module.exports = {
  add(req, res) {
    return Product.create({
      name: req.body.title,
      price: req.body.price,
      photoUrl: req.body.image,
      category: req.body.category,
      description: req.body.description,
    })
      .then((product) => res.status(201).send(product))
      .catch((error) => res.status(400).send(error));
  },
  getAllById(req, res) {
    return Product.findAll()
      .then((products) => {
        if (!products) {
          return res.status(404).send({
            message: 'products not found',
          });
        }
        return res.status(200).send(products);
      })
      .catch((error) => res.status(400).send(error));
  },
};
