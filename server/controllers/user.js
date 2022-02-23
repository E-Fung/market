const User = require('../db').User;

module.exports = {
  getById(req, res) {
    return User.findAll({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'user not found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },
};
