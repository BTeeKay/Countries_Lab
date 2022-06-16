import React from 'react'
import CountryDrop from './CountryDrop'

const CountryDropBox = ({countries, onCountryChange, onFavCountryClick, selectedCountry}) => {

    return (
        <>
            <div>CountryDropBox</div>
            <CountryDrop countries={countries} onCountryChange={onCountryChange} onFavCountryClick={onFavCountryClick}
            selectedCountry={selectedCountry} />
        </>

    )
}

export default CountryDropBox