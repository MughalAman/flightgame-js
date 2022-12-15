import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'
import axios from 'axios'

function Scene2() {
    const {gameState, setGameState} = useContext(gameContext)
    const [map, setMap] = useState(' ')
    const [countries, setCountries] = useState([])

    const fetchData = async () => {
        try {

            const api_url = 'http://localhost:5000/';

            const countriesResponse = await axios.get(api_url + 'countries/');
            const mapResponse = await axios.get(api_url + `maps?start_lat=${gameState.map_lat}&start_lon=${gameState.map_lon}`);

            setCountries(countriesResponse.data);
            setMap(mapResponse.data);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();

    }, [])

    const updateGameState = (country_code, country_name, cost, map_lat, map_lon) => {
        setGameState({...gameState, scene: 'scene3', country_code: country_code, country_name: country_name, money: gameState.money - cost, distance: 5000, map_lat: map_lat, map_lon: map_lon})
    }

    return (
        <div className="scene2">
            <div className="scene2-text">
                <h2>SELECT A COUNTRY TO TRAVEL TO</h2>
            </div>

            <div className="scene2-countries">

                {countries.map((country) => (
                    <div className="scene2-country" onClick={() => updateGameState(country.country_code, country.country_name, country.price, country.coordinates.lat, country.coordinates.lon)}>
                        <div className="scene2-country-left">
                            <ul>
                                <li key={country.country_name}>Country: {country.country_name}</li>
                                <li>Distance: 5000km</li>
                                <li key={country.price}>Price: ${country.price}</li>
                            </ul>
                        </div>
                        <div className="scene2-country-right">
                            <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.country_code}.svg`} alt={country.country_code}/>
                        </div>
                    </div>
                ))}

            </div>

            <div className="scene2-map">
                {map && <img src={map.map_source} alt="map"/>}
            </div>

        </div>
    )
}

export default Scene2