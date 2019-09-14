// const countries = require('world-countries');
const countries = require('../json/places/country.json');
const states = require('../json/places/state.json');
const cities = require('../json/places/city.json');
const express = require('express');
const app = express();

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

exports.reqStateCountry = async (req, res, next) => {
   let request = req.body.city.toLowerCase();
   const city = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name ===  request ) acc = value;
      return acc;
   },);     // { id: '26983', name: 'Kuantan', state_id: '2315' }
   
   let state = states.reduce((acc, value) => {
      let id = value.id.toLowerCase();
      if(id ===  city.state_id ) acc = value;
      return acc;
   });      // { id: '2315', name: 'Pahang', country_id: '132' }

   let country = countries.reduce((acc, value) => {
      let id = value.id.toLowerCase();
      if(id ===  state.country_id ) acc = value;
      return acc; // { id: '132', sortname: 'MY', name: 'Malaysia', phonecode: '60' }
   });

   res.locals.autoCompleteStateCountry = { state: state.name, country: country.name, phonecode: country.phonecode };
   next();
}
