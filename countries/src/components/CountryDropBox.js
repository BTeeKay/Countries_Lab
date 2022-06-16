import React from 'react'
import CountryDrop from './CountryDrop'

const CountryDropBox = ({ countries, onCountryChange }) => {



    return (
        <>
            <div>CountryDropBox</div>
            <CountryDrop countries={countries} onCountryChange={onCountryChange} />
        </>

    )
}

export default CountryDropBox