import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'

function Scene7() {
    const {gameState, setGameState} = useContext(gameContext)

    return (
        <div className="scene7">
            <div className="scene7-leaderboard">
                <h1>Leaderboard</h1>
                <div className="scene7-leaderboard-list">
                    <ul></ul>
                </div>
            </div>
        </div>
    )
}

export default Scene7