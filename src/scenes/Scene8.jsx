import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'
import axios from 'axios'


function Scene8() {
    const {gameState, setGameState} = useContext(gameContext)
    const [leaderboard, setLeaderboard] = useState([])

    const postAndFetchData = async () => {
        try {
            const api_url = 'http://localhost:5000/';

            const leaderboardResponse = await axios.post(api_url + `leaderboard/?player_name=${gameState.player_name}&player_country_code=${gameState.player_country_code}&player_score=${gameState.player_score}`);

            setLeaderboard(leaderboardResponse.data)
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        postAndFetchData();
    }, [])

    return (
        <div className="scene8">
            <div className="scene8-leaderboard">
                <h1>Leaderboard</h1>
                <div className="scene8-leaderboard-list">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Country</th>
                        </tr>
                        {leaderboard.map(entry => (
                            <tr>
                                <td>{entry.player_name}</td>
                                <td>{entry.player_score}</td>
                                <td><img className='scene8-leaderboard-entry-image' src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${entry.player_country_code}.svg`} alt={entry.player_country_code}/></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

            <div className="scene8-buttons">
                <button onClick={() => setGameState({...gameState, scene: 'scene0'})}>Play Again</button>
            </div>
        </div>
    )
}

export default Scene8