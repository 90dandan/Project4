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
      const vhss = await Vhs.find({});
      res.status(200).json(vhss);
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
  try{
    const updateVhs = await Vhs.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateVhs);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try{
    const deleteVhs = await Vhs.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteVhs);
  }
  catch(err){
    res.status(500).json(err);
  }
}