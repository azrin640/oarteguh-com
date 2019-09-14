const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   const result = countries;
   res.json(result);
}