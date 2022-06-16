import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import CountryDropBox from '../components/CountryDropBox'
import CountryInfoListBox from '../components/CountryInfoListBox'
import CountryFaveItemBox from '../components/CountryFaveItemBox'


const CountriesBox = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountry, setFavCountry] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function () {
        fetch("https://restcountries.com/v3.1/all")
            .then(result => result.json())
            .then(countries => setCountries(countries))
    };

    const onCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const onFavCountryClick = (country) => {
        setFavCountry(favCountry => [...favCountry, country])
    };


    return (
        <>
            <Header countries={countries}/>
            <CountryDropBox countries={countries} onCountryChange={onCountryChange} onFavCountryClick={onFavCountryClick}
                selectedCountry={selectedCountry} />
            {selectedCountry ? <CountryInfoListBox selectedCountry={selectedCountry} /> :
                null}
            <CountryFaveItemBox favCountry={favCountry} />
        </>
    )
}

export default CountriesBox