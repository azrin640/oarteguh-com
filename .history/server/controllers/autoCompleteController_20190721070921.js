// const countries = require('world-countries');
const countries = require('../json/places/country.json');
const states = require('../json/places/state.json');
const cities = require('../json/places/city.json');

exports.reqCities = async (req, res) => {
   let request = req.body.city.toLowerCase();
   var cityArr = [];
   const resultCities = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         cityArr.push(value);
      }
      acc = cityArr;
      return acc;
   }, []);
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
   res.json(result);
}

exports.reqStateCountry = async (req, res) => {
   let request = req.body.city.toLowerCase();
   console.log(request);
   const city = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name ===  request ) acc = value;
      return acc;
   },);     // { id: '26983', name: 'Kuantan', state_id: '2315' }
   
   let state = states.reduce((acc, value) => {
      let id = value.id.toLowerCase();
      if(id ===  city.state_id ) acc = value;
      return acc;
   });
   console.log(state);
}
