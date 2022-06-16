import React from 'react'
import FaveCountryList from './FaveCountryList'

const CountryFaveItemBox = ({ favCountry }) => {
    return (
        <>
            <div>CountryFaveItemBox</div>
            <FaveCountryList favCountry={favCountry} />
        </>

    )
}

export default CountryFaveItemBox