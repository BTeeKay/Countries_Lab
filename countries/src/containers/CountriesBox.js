import React from 'react'
import Header from '../components/Header'
import CountryDropBox from '../components/CountryDropBox'
import CountryInfoListBox from '../components/CountryInfoListBox'
import CountryFaveItemBox from '../components/CountryFaveItemBox'


const CountriesBox = () => {


    return (
        <>
            <Header />
            <CountryDropBox />
            <CountryInfoListBox />
            <CountryFaveItemBox />


        </>
    )
}

export default CountriesBox