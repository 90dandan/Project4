const Vhs = require('../models/vhs');

module.exports = {
    create
};

function create(req, res) {
    Vhs.findById(req.params.id, function(err, vhs) {
      vhs.reviews.push(req.body);
      vhs.save(function(err) {
        res.redirect(`/allvhs/${vhs._id}`);
      });
    });
}