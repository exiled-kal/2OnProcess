import React from 'react';
import './App.css';
import {FormControl, Select, MenuItem} from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <h2>COVID -19 TRACKER</h2>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">wide</MenuItem>
          <MenuItem value="worldwide">123Worldwide</MenuItem>
          <MenuItem value="worldwide">12341234Worldwide</MenuItem>
        </Select>
      </FormControl>
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
