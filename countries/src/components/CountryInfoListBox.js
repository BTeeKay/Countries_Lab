import React from 'react'
import CountryInfoItem from './CountryInfoItem'

const CountryInfoListBox = ({ selectedCountry }) => {
    return (
        <>
            <div>CountryInfoListBox</div>
            <CountryInfoItem selectedCountry={selectedCountry} />
        </>

    )
}

export default CountryInfoListBox