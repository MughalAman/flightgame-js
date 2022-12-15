import {React, useContext} from 'react'
import {gameContext} from '../components/Context'

function Scene1() {
    const {gameState, setGameState} = useContext(gameContext)

    return (
        <div className="scene1">
            <div className="scene1-text">
                <p>
                    Olet nuori sekä juuri valmistunut opiskelija, ja nyt on aika maksaa lainasi pois.
                    Haluat nähdä maailmaa, ja olet asettanut ensimmäiseksi tavoitteeksi matkata ympäri Europpaa.
                    Juuri valmistuneena sinulla ei ole ollenkaan rahaa, joten joudut tekemään rahasi eteen töitä.
                    Olet 15000 euroa velkaa, ja voit kerätä rahaa matkustamisesi ohella.
                    Mitä enemmän teet rahaa niin sitä parempi!
                    Olet nyt Helsingissä ja aloitat keräämällä rahaa ensimmäiseen kohteeseesi.
                    Onnea matkaan!!
                </p>
            </div>

            <div className="scene1-door">
                <button onClick={() => setGameState({...gameState, scene: 'scene2'})}>Enter</button>
            </div>
        </div>
    )
}

export default Scene1

