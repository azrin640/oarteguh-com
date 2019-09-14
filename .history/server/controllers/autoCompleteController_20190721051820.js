// const countries = require('world-countries');
const countries = require('../json/places/country.json');
const states = require('../json/places/state.json');
const cities = require('../json/places/city.json');

exports.reqCity = async (req, res) => {
   let request = req.body.city.toLowerCase();
   var cityArr = [];
   const resultCities = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         countryArr.push(value);
      }
      acc = cityArr;
      return acc;
   }, []);
   console.log(resultCities);
   res.json(resultCities);
}

exports.reqStates = async (req, res) => {
   let request = req.body.states.toLowerCase();
   var stateArr = [];
   const resultStates = states.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         countryArr.push(value);
      }
      acc = stateArr;
      return acc;
   }, []);
   console.log(resultStates);
   res.json(resultStates);
}

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

