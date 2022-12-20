import {React, useContext} from 'react'
import {gameContext} from './Context'

import ReactAudioPlayer from 'react-audio-player';

import start_game_music from '/music/start_game_logo_music.mp3'
import lobby_music from '/music/lobbymusic.mp3'
import leaderboard_music from '/music/leaderboard.mp3'
import victory_music from '/music/victory_music.mp3'


import flying_music_1 from '/music/flying/flying.mp3'
import flying_music_2 from '/music/flying/flying2.mp3'
import flying_music_3 from '/music/flying/flying3.mp3'

import good_job_music_1 from '/music/goodjobs/goodjob1.mp3'
import good_job_music_2 from '/music/goodjobs/goodjob2.mp3'
import good_job_music_3 from '/music/goodjobs/goodjob3.mp3'

import bad_job_music_1 from '/music/badjobs/badjob1.mp3'
import bad_job_music_2 from '/music/badjobs/badjob2.mp3'
import bad_job_music_3 from '/music/badjobs/badjob3.mp3'
import bad_job_music_4 from '/music/badjobs/badjob4.mp3'

function AudioManager() {
    const {gameState, setGameState} = useContext(gameContext)

    const getJobMusic = () => {
        if (gameState.is_bad_job === true) {
            const rand = Math.floor(Math.random() * 4)
            if (rand === 0) {
                return bad_job_music_1
            } else if (rand === 1) {
                return bad_job_music_2
            } else if (rand === 2) {
                return bad_job_music_3
            } else {
                return bad_job_music_4
            }
        } else {
            const rand = Math.floor(Math.random() * 3)
            if (rand === 0) {
                return good_job_music_1
            } else if (rand === 1) {
                return good_job_music_2
            } else {
                return good_job_music_3
            }
        }
    }

    const getFlyingMusic = () => {
        const rand = Math.floor(Math.random() * 3)
        if (rand === 0) {
            return flying_music_1
        } else if (rand === 1) {
            return flying_music_2
        } else {
            return flying_music_3
        }
    }

    const handleMusic = () => {
        switch (gameState.scene) {
            case 'scene0':
                return start_game_music
            case 'scene1':
                return lobby_music
            case 'scene2':
                return lobby_music
            case 'scene3':
                return getFlyingMusic()
            case 'scene4':
                return lobby_music
            case 'scene5':
                return getJobMusic()
            case 'scene6':
                return lobby_music
            case 'scene7':
                return victory_music
            case 'scene8':
                return leaderboard_music
        }
    }

    return (
        <div>
            <ReactAudioPlayer
                src={handleMusic()}
                autoPlay
                volume={0.05}
                loop
            />
        </div>
    )
}

export default AudioManager