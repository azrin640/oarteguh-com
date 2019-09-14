const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   let request = req.body.country.toLowerCase();
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.common.toLowerCase();
      console.log(name);
      if(value.name.common === request ){
         countryArr.push(value);
      }
      acc = countryArr;
      return acc;
   }, []);
   res.json(result);
}