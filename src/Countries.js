// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Countries = () => {
//     const [countries, setCountries] = useState([]);

//     const fetchData = async () => {
//         try {
//             const { data } = await axios.get('https://restcountries.com/v3.1/all');
//             const countriesData = data.map(country => ({
//                 name: country.name.common,
//                 flag: country.flags.svg
//             }));
//             setCountries(countriesData);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (

//     );
// };

// export default Countries;
