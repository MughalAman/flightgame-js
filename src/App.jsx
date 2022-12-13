import './styles/App.css'
import Game from './components/Game'
import {useState} from 'react'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerName, setPlayerName] = useState('')
  
  const startGame = () => {
    const speacialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '`', '~']
    const playerName = document.getElementById('player_name').value
    if(playerName === '' || playerName === null || playerName === undefined || playerName.replaceAll(' ', '') === '' || playerName.split('').some(char => speacialChars.includes(char))) {
      alert('no name specified or name contains special characters')
      return
    }

    setIsPlaying(true)
    setPlayerName(playerName)

  }

  return (
    <div className="app">
      
      {!isPlaying ? 
        (
          <div className="game-menu">
            <h1>FLIGHTGAME</h1>
            <div className="game-menu-container">
              <input id="player_name" type="text" placeholder='Name'/>
              <button onClick={() => startGame()}>Play</button>
            </div>
          </div>
        ):
        (
          <Game playerName={playerName}/>
        )
      }
    </div>
  )
}

export default App
