import React from 'react'
import AddFavCountry from './AddFavCountry'

const CountryDrop = ({ countries, onCountryChange }) => {

    const options = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name.common}</option>
    })

    const handleChange = (event) => {
        const chosenIndex = event.target.value;
        const country = countries[chosenIndex];
        onCountryChange(country);
    }

    return (
        <>
            <select onChange={handleChange}>
                <option>Select a Country</option>
                {options}
            </select>
            <AddFavCountry />
        </>


    )
}

export default CountryDrop