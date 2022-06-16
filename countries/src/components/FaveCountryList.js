import React from 'react'

const FaveCountryList = ({ favCountry }) => {

    const list = favCountry.map((country, index) => {
        return <li key={index}>{country.name.common}</li>
    })

    return (

        <div className="fave-countries"><h2>Favourite countries</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default FaveCountryList