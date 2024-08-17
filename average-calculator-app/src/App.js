import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [numberType, setNumberType] = useState('e');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberType}`);
      setResponseData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch numbers. Please try again.');
      setResponseData(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Average Calculator</h1>
      <div className="controls">
        <label htmlFor="numberType">Select Number Type:</label>
        <select id="numberType" value={numberType} onChange={(e) => setNumberType(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={fetchNumbers}>Fetch Numbers</button>
      </div>

      {error && <p className="error">{error}</p>}

      {responseData && (
        <div className="results">
          <h2>Results</h2>
          <p><strong>Previous State:</strong> {JSON.stringify(responseData.windowPrevState)}</p>
          <p><strong>Current State:</strong> {JSON.stringify(responseData.windowCurrState)}</p>
          <p><strong>Fetched Numbers:</strong> {JSON.stringify(responseData.numbers)}</p>
          <p><strong>Average:</strong> {responseData.avg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
