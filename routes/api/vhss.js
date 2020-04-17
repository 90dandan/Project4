const express = require('express');
const router = express.Router();
const vhssCtrl = require('../../controllers/vhss');

/*------------------------------ Public Routes ------------------------------*/


/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, vhssCtrl.index);
router.post('/', checkAuth, vhssCtrl.create);
router.get('/:id', checkAuth, vhssCtrl.show);
router.put('/:idx', checkAuth, vhssCtrl.update);
router.delete('/:idx', checkAuth , vhssCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
