const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   const result = countries.find(req.body.country);
   res.json(result);
}