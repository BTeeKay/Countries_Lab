import React from 'react'

const Header = ({countries}) => {

    const total = countries.reduce((acc, country) => {
        return acc + country.population
    }, 0)

    console.log(total)

    return (
        <div>
            <h1>Total World Population: {total}
            </h1>
        </div>
    )
}

export default Header