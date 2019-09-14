// const countries = require('world-countries');
const countries = require('../json/places/country.json');

exports.reqCountries = async (req, res) => {
   let request = req.body.country.toLowerCase();
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         countryArr.push(value);
      }
      acc = countryArr;
      return acc;
   }, []);
   console.log(result);
   res.json(result);
}