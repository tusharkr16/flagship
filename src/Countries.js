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
                alt={flagaltText}
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

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.log(err));
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <nav style={{ width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>



                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Search for countries"
                        className="search-input"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            height: "40px",
                            marginTop: "5px",
                            padding: "10px",
                            border: "2px solid gray"
                        }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </nav>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                {filteredCountries.map((country, index) => (
                    <CountryCard
                        className="CountryCard"
                        key={index}
                        name={country.name.common}
                        flagimg={country.flags.png}
                        flagaltText={country.flags.alt}
                    />
                ))}
            </div>
        </>
    );
}

export default Countries;
