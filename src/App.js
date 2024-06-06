import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      const countriesData = data.map(country => ({
        name: country.name.common,
        flag: country.flags.svg
      }));
      setCountries(countriesData);
    } catch (error) {
      setError(error); // Set error state to trigger console log
      console.error(error); // Log error to console
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {error && <div>Error: {error.message}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {countries.map((country, index) => (
          <div className='border rounded-lg m-1 mt-5 mb-5 me-3 ms-3 p-5' key={index} style={{ flex: '1 0 14%', textAlign: 'center' }}>
            <img src={country.flag} alt={`Flag ${index}`} style={{ width: '100%' }} />
            <h3 className='text-xl'>{country.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
