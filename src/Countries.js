import { useEffect, useState } from "react"

const CountryCard = ({ name, flagimg, flagaltText }) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10px',
            margin: '10px',
            border: '1px solid black',
            borderRadius: '8px',
            width: '200px',
            height: '200px',

        }}>
            <img src={flagimg} alt={flagaltText} style={{
                width: '100px',
                height: '100px',
            }} />
            <h2>{name}</h2>
        </div>
    )
}

function Countries() {
    const API = 'https://restcountries.com/v3.1/all'
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log("Error:", err))
    }, [])
    return (
        <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            alignItems: 'center', height: '100vh'
        }}>
            {countries.map((country) => (
                <CountryCard name={country.name.common} flagimg={country.flags.png} flagaltText={country.flags.alt} />
            ))}

        </div>
    )
}

export default Countries;