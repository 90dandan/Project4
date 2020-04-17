var Vhs = require('../models/vhs');
var User = require('../models/user');

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const user = await User.findById(req.user._id);
      res.status(200).json(user.vhss);
  }
  catch(err){
      res.status(500).json(err);
  }
}

// async function create(req, res) {
  // console.log('user: ', req.user)
//   try {
//     const vhs = await Vhs.create(req.body);
//     res.status(201).json(vhs);
//   }
//   catch(err){
//     res.status(500).json(err);
//   }
// }


async function create(req, res) {
  const vhs = await User.findById(req.user._id, function(err, user) {
      console.log(req.body, user)
      user.vhss.push(req.body);
      user.save(function(err) {
      res.status(201).json(user.vhss[user.vhss.length-1]);
      });
  });
}

async function show(req, res) {
  try{
    const vhs = await Vhs.findById(req.params.id);
    res.status(200).json(vhs);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function update(req, res) {
    const user = await User.findById(req.user._id);
    const vhsToUpdate = user.vhss.splice(req.params.idx, 1, req.body);
    user.save(function(err) {
    res.status(200).json(user.vhss[req.params.idx])
    })
}

async function deleteOne(req, res) {
  try{
    const user = await User.findById(req.user._id);
    let deletedVhs = user.vhss.splice(req.params.idx, 1)
    user.save(function(err) {
      if(err) return err
      res.status(200).json(deletedVhs);
    });
  }
  catch(err){
    res.status(500).json(err);
  }
}