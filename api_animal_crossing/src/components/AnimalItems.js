import React from 'react'

const AnimalItems = ({animals}) => {
    

    
    const options = animals.map((animal, index) => {
        return <option key={index}>{animal.name["name-USen"]}</option>
    })

    return (
        <>
            <select>
            {options}
            </select>
        </>
    )
}

export default AnimalItems