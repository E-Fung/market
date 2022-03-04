const ProductInCart = require('../db').ProductInCart;

module.exports = {
  add(req, res) {
    return ProductInCart.create({})
      .then((product) => res.status(201).send(product))
      .catch((error) => res.status(400).send(error));
  },
  getAllById(req, res) {
    return ProductInCart.findAll({
      where: {
        UserId: req.body.user,
      },
    })
      .then((ProductInCart) => {
        if (!ProductInCart) {
          return res.status(404).send({
            message: 'ProductInCart not found',
          });
        }
        return res.status(200).send(ProductInCart);
      })
      .catch((error) => res.status(400).send(error));
  },
};
