import {React, useContext, useState, useEffect} from 'react'
import {gameContext} from '../components/Context'

import axios from 'axios'

function Scene4() {
    const {gameState, setGameState} = useContext(gameContext)
    const [jobs, setJobs] = useState([])

    const fetchData = async () => {
        try {

            const api_url = 'http://localhost:5000/';

            const jobsResponse = await axios.get(api_url + 'jobs/');

            const weatherResponse = await axios.get(api_url + `weather?lat=${gameState.map_lat}&lon=${gameState.map_lon}`);


            setJobs(jobsResponse.data)
            setGameState({...gameState, temp_c: weatherResponse.data.temperature})
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const updateGameState = (job_name, job_reward, job_is_bad, job_penalty_message) => {

        setGameState({...gameState, scene: 'scene5', job_name: job_name, job_reward: job_reward, job_is_bad: job_is_bad, job_penalty_message: job_penalty_message})
    }

    const endGame = () => {
        const player_score = gameState.money - (gameState.co2 / 2) + gameState.total_distance
        setGameState({...gameState, scene: 'scene7', player_score: player_score})
    }

    return (
        <div className="scene4">
            <div className="scene4-text">
                <h2>You have arrived in {gameState.country_name}</h2>
                <h2>Select a job</h2>
            </div>

            <div className="scene4-jobs">

                {jobs.map(job => (
                    <div className="scene4-job" onClick={() => {updateGameState(job.job_name, job.reward, job.is_bad, job.penalty_message)}}>
                        <img src={job.image_url} alt=' '/>
                        <h3>{job.job_name}</h3>
                    </div>
                ))}

            </div>

            {gameState.money >= 0 && 
                <div className="end-game">
                    <button onClick={() => endGame()}>End game</button>
                </div>
            }
        </div>
    )
}

export default Scene4