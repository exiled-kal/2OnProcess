import React, {useState, useEffect} from 'react';
import './App.css';
import {FormControl, Select, MenuItem} from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry]

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h2>COVID-19 TRACKER</h2>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown */}

      {/* Infoboxes */}
      {/* Infoboxes */}
      {/* Infoboxes */}
      {/* Infoboxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
