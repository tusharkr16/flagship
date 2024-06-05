import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://restcountries.com/v3.1/all');
            const countriesData = data.map(country => ({
                name: country.name.common,
                flag: country.flags.svg
            }));
            setCountries(countriesData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-wrap justify-center'>
            {countries.map((country, index) => (
                <div className='border rounded-lg m-1 mt-5 mb-5 me-3 ms-3 p-5' key={index} style={{ flex: '1 0 14%', textAlign: 'center' }}>
                    <img src={country.flag} alt={`Flag ${index}`} style={{ width: '100%' }} />
                    <p className='text-xl'>{country.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Countries;
