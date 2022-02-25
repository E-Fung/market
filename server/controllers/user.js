const User = require('../db').User;

module.exports = {
  add(req, res) {
    return User.create(req.body)
      .then((user) => {
        return res.status(200).send(user);
      })
      .catch((error) => {
        if (error.name === 'SequelizeUniqueConstraintError') {
          return res.status(401).json({ error: 'User already exists' });
        } else if (error.name === 'SequelizeValidationError') {
          return res.status(401).json({ error: 'Validation error' });
        } else next(error);
      });
  },
};
