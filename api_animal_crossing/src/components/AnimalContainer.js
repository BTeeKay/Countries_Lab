import React, {useState, useEffect} from 'react'
import AnimalItems from './AnimalItems'

const AnimalContainer = () => {

    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        fetch(`http://acnhapi.com/v1a/villagers/`)
        .then(result => result.json())
        .then(animals => setAnimals(animals))
      }

    useEffect(() => {
        getAnimals();
    }, [])

    return (
        <>
            <h1>This is the container</h1>
            <AnimalItems animals={animals} />

        </>
    )
}

export default AnimalContainer