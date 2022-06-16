import React from 'react'
import CountryInfoItem from './CountryInfoItem'

const CountryInfoListBox = ({ selectedCountry }) => {
    return (
        <>
            <CountryInfoItem selectedCountry={selectedCountry} />
        </>

    )
}

export default CountryInfoListBox