import {React, useContext, useEffect, useState} from 'react'
import {gameContext} from '../components/Context'

function Scene5() {
    const {gameState, setGameState} = useContext(gameContext)
    const [timeRemaining, setTimeRemaining] = useState(60)

    const circleShrinker = () => {
        const circles = document.querySelectorAll('.scene5-game-circle')
        
        circles.forEach(circle => {
            circle.setAttribute('data-scale', parseFloat(circle.getAttribute('data-scale')) - 0.0005)
            circle.style.transform = `scale(${circle.getAttribute('data-scale')})`
        })
        
        //remove circles that are too small
        circles.forEach(circle => {
            if (circle.getAttribute('data-scale') < 0.05) {
                circle.remove()
            }
        }
        )
    }

    const addMoney = () => {
        setGameState(prevGameState => ({...prevGameState, money: prevGameState.money + 10}))
    }

    const circleSpawner = () => {
        const game = document.querySelector('.scene5-game')
        
        const circle = document.createElement('div')
        circle.classList.add('scene5-game-circle')
        circle.setAttribute('data-scale', 1)
        circle.style.left = Math.floor(Math.random() * 80) + '%'
        circle.style.top = Math.floor(Math.random() * 80) + '%'
        circle.addEventListener('click', (e) => {
            circleClickHandler(e)
        })
        game.appendChild(circle)
    }

    const circleClickHandler = (e) => {
        if (e.target.classList.contains('scene5-game-circle')) {
            e.target.remove()
            addMoney()
        }
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1)
        }, 1000)

        const spawnerInterval = setInterval(() => {
            circleSpawner()
        }, 500)

        const shrinkerInterval = setInterval(() => {
            circleShrinker()
        }, 1)

        return () => {
            clearInterval(spawnerInterval)
            clearInterval(shrinkerInterval)
            clearInterval(timerInterval)
        }
    }, [])



    return (
        <div className="scene5">
            <div className="scene5-info">
                <h1>Scene 5</h1>
                <p>Click on the circles to earn money. You have {timeRemaining} seconds.</p>
            </div>

            <div className="scene5-game">

            </div>
        </div>
    )
}

export default Scene5