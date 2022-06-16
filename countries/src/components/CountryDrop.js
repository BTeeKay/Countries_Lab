import React from 'react'
import AddFavCountry from './AddFavCountry'

const CountryDrop = ({countries}) => {

    const options = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name.common}</option>
    })

    console.log(options)

    return (
        <>
            <select>
                <option>Select a Country</option>
                {options}
            </select>
            <AddFavCountry />
        </>


    )
}

export default CountryDrop