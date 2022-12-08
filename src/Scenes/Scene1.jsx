import {React, useContext} from 'react'
import {gameContext} from '../components/Context'

function Scene1() {
    const {gameState, setGameState} = useContext(gameContext)

    return (
        <div className="scene1">
            <div className="scene1-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid earum laboriosam sunt aperiam error reiciendis culpa dicta, maiores architecto ut, reprehenderit sed dolores! Sunt non quod excepturi cum asperiores et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id eum, omnis debitis exercitationem doloribus maxime voluptate cum, assumenda vero aperiam qui laboriosam. Fugiat asperiores doloribus quae laborum assumenda voluptatem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est eaque illum explicabo libero, voluptates, dolorum itaque accusamus aliquid ducimus architecto repudiandae suscipit, quae adipisci eius! Dolor optio illo sit.
                </p>
            </div>

            <div className="scene1-door">
                <button onClick={() => setGameState({...gameState, scene: 'scene2'})}>Enter</button>
            </div>
        </div>
    )
}

export default Scene1