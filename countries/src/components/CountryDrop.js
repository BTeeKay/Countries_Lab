import React from 'react'

const CountryDrop = ({ countries, onCountryChange, onFavCountryClick, selectedCountry}) => {

    const options = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name.common}</option>
    })


    const handleChange = (event) => {
        const chosenIndex = event.target.value;
        const country = countries[chosenIndex];
        onCountryChange(country);
    }

    const handleClick = () => {
        onFavCountryClick(selectedCountry);
    }

    return (
        <>
            <select onChange={handleChange}>
                <option>Select a Country</option>
                {options}
            </select>
            <div>
                <button onClick={handleClick}>
                    Add Favourite!
                </button>
            </div>
        </>


    )
}

export default CountryDrop