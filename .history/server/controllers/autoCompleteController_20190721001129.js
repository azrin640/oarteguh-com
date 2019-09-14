const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   let request = req.body.country.toLowerCase();
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.common;
      name.toLowerCase();
      console.log(name);
      if(value.name.common === req.body.country.toLowerCase()){
         countryArr.push()
      }
      acc = countryArr;
      return acc;
   }, []);
   res.json(result);
}