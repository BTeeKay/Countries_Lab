import React, {useState, useEffect} from 'react'
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

    const getCountries = function() {
    fetch("https://restcountries.com/v3.1/all")
    .then(result => result.json())
    .then(countries => setCountries(countries))
    };

    return (
        <>
            <Header />
            <CountryDropBox countries={countries} />
            <CountryInfoListBox />
            <CountryFaveItemBox />
        </>
    )
}

export default CountriesBox