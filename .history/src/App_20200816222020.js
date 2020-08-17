import React, {useState} from 'react';
import './App.css';
import {FormControl, Select, MenuItem} from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);

  
  return (
    <div className="app">
      <div className="app__header">
        <h2>COVID-19 TRACKER</h2>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
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
