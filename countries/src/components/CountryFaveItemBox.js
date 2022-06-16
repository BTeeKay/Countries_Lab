import React from 'react'
import FaveCountryList from './FaveCountryList'

const CountryFaveItemBox = ({ favCountry }) => {
    return (
        <>

            <FaveCountryList favCountry={favCountry} />
        </>

    )
}

export default CountryFaveItemBox