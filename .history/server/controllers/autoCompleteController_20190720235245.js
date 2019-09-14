const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   const result = countries.map((country) => {
      if(country === req.body.country) return country;
   });
   res.json(result);
}