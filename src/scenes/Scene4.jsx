import {React, useContext} from 'react'
import {gameContext} from '../components/Context'

import apple from '../assets/jobs/goodjobs/apple.png'
import bathroom from '../assets/jobs/goodjobs/bathroom.png'
import beard from '../assets/jobs/goodjobs/beard.png'
import beverage from '../assets/jobs/goodjobs/beverage.png'
import bornana from '../assets/jobs/goodjobs/bornana.png' //banana
import car from '../assets/jobs/goodjobs/car.png'
import chess from '../assets/jobs/goodjobs/chess.png'
import cupcake from '../assets/jobs/goodjobs/cupcake.png'
import fidget from '../assets/jobs/goodjobs/fidget.png'
import haircut from '../assets/jobs/goodjobs/haircut.png'
import hamburger from '../assets/jobs/goodjobs/hamburger.png'
import lawn from '../assets/jobs/goodjobs/lawn.png'
import mall from '../assets/jobs/goodjobs/mall.png'
import massage from '../assets/jobs/goodjobs/massage.png'
import pants from '../assets/jobs/goodjobs/pants.png'
import rake from '../assets/jobs/goodjobs/rake.png'
import rock from '../assets/jobs/goodjobs/rock.png'
import shoe from '../assets/jobs/goodjobs/shoe.png'
import sock from '../assets/jobs/goodjobs/sock.png'
import pear from '../assets/jobs/goodjobs/pear.jpg'

//import bad jobs
import bank from '../assets/jobs/badjobs/bank.png'
import body from '../assets/jobs/badjobs/body.png'
import grandma from '../assets/jobs/badjobs/grandma.png'
import guns from '../assets/jobs/badjobs/guns.png'
import murder from '../assets/jobs/badjobs/murder.png'
import redcross from '../assets/jobs/badjobs/redcross.png'
import rhino from '../assets/jobs/badjobs/rhino.png'
import steal from '../assets/jobs/badjobs/steal.png'
import wolt from '../assets/jobs/badjobs/wolt.png'

function Scene4() {
    const {gameState, setGameState} = useContext(gameContext)

    const JobImageHandler = (jobName) => {
        switch (jobName) {
            //good jobs
            case 'apple':
                return <img src={apple} alt={jobName}/>;

            case 'bathroom':
                return <img src={bathroom} alt={jobName}/>;

            case 'beard':
                return <img src={beard} alt={jobName}/>;

            case 'beverage':
                return <img src={beverage} alt={jobName}/>;

            case 'bornana':
                return <img src={bornana} alt={jobName}/>;

            case 'car':
                return <img src={car} alt={jobName}/>;

            case 'chess':
                return <img src={chess} alt={jobName}/>;

            case 'cupcake':
                return <img src={cupcake} alt={jobName}/>;

            case 'fidget':
                return <img src={fidget} alt={jobName}/>;

            case 'haircut':
                return <img src={haircut} alt={jobName}/>;

            case 'hamburger':
                return <img src={hamburger} alt={jobName}/>;

            case 'lawn':
                return <img src={lawn} alt={jobName}/>;

            case 'mall':
                return <img src={mall} alt={jobName}/>;

            case 'massage':
                return <img src={massage} alt={jobName}/>;

            case 'pants':
                return <img src={pants} alt={jobName}/>;

            case 'pear':
                return <img src={pear} alt={jobName}/>;

            case 'rake':
                return <img src={rake} alt={jobName}/>;

            case 'rock':
                return <img src={rock} alt={jobName}/>;

            case 'shoe':
                return <img src={shoe} alt={jobName}/>;

            case 'sock':
                return <img src={sock} alt={jobName}/>;

            //bad jobs

            case 'bank':
                return <img src={bank} alt={jobName}/>;
            
            case 'body':
                return <img src={body} alt={jobName}/>;
            
            case 'grandma':
                return <img src={grandma} alt={jobName}/>;
            
            case 'guns':
                return <img src={guns} alt={jobName}/>;
            
            case 'murder':
                return <img src={murder} alt={jobName}/>;

            case 'redcross':
                return <img src={redcross} alt={jobName}/>;

            case 'rhino':
                return <img src={rhino} alt={jobName}/>;

            case 'steal':
                return <img src={steal} alt={jobName}/>;

            case 'wolt':
                return <img src={wolt} alt={jobName}/>;
    

            default:
                return null;
        }
    }

    return (
        <div className="scene4">
            <div className="scene4-text">
                <h2>YOU HAVE ARRIVED IN {gameState.country_name}</h2>
                <h2>SELECT A JOB</h2>
            </div>

            <div className="scene4-jobs">

                <div className="scene4-job">
                    {JobImageHandler('apple')}
                    <h3>sell apples</h3>
                </div>

                <div className="scene4-job">
                    {JobImageHandler('car')}
                    <h3>sell cars</h3>
                </div>

                <div className="scene4-job">
                    {JobImageHandler('sock')}
                    <h3>sell socks</h3>
                </div>

            </div>
        </div>
    )
}

export default Scene4