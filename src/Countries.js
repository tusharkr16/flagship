import React, { useEffect, useState } from "react";

const CountryCard = ({ name, flagimg, flagaltText }) => {
    return (
        <div
            className="countryCard"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "10px",
                border: "1px solid black",
                borderRadius: "8px",
                width: "200px",
                height: "200px",
            }}
        >
            <img
                src={flagimg}
                alt={flagaltText || `Flag of ${name}`}
                style={{
                    width: "100px",
                    height: "100px",
                }}
            />
            <h2 className="text-2xl mt-2">{name}</h2>
        </div>
    );
};

function Countries() {
    const API = "https://restcountries.com/v3.1/all";
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching countries:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading countries.</div>;
    }

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div style={{ display: "block", width: "100%" }}>
                <input
                    type="text"
                    placeholder="Search for countries"
                    className="search-input"
                    style={{
                        display: "block",
                        width: "50%",
                        height: "40px",
                        marginTop: "40px",
                        margin: "auto",
                        padding: "10px",
                        border: "2px solid gray"
                    }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                    <CountryCard
                        key={index}
                        name={country.name.common}
                        flagimg={country.flags.png}
                        flagaltText={country.flags.alt}
                    />
                ))
            ) : (
                <div>No countries found.</div>
            )}
        </div>
    );
}

export default Countries;
