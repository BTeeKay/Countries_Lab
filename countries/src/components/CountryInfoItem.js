import React from 'react'

const CountryInfoItem = ({ selectedCountry }) => {
    return (
        <>
            <div className="country">
                <p>Name: {selectedCountry.name.common}</p>
                <p>Region: {selectedCountry.region}</p>
                <p>Population: {selectedCountry.population}</p>
            </div>
        </>
    )
}

export default CountryInfoItem