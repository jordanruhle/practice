import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const OnePirate = (props) => {

    const [onePirate, setOnePirate] = useState([])
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res.data.pirate)
                setOnePirate(res.data.pirate)
                setLoaded(true)
            })
            .catch(err => console(err))
    }, [])

    const deletePirate = () => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>All Pirates</h2>
            {
                loaded ? <div>
                    <h1>{onePirate.name}</h1>
                    <div>
                        <img src={onePirate.imgUrl} alt={onePirate.name} />
                        <h2>"{onePirate.catchPhrase}"</h2>
                    </div>
                    <div>
                        <h3>About</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Position:</td>
                                    <td>{onePirate.crewPosition}</td>
                                </tr>
                                <tr>
                                    <td>Treasures:</td>
                                    <td>{onePirate.treasureChests}</td>
                                </tr>
                                <tr>
                                    <td>Peg Leg:</td>
                                    <td>{onePirate.pegLeg ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>Eye Patch:</td>
                                    <td>{onePirate.eyePatch ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>Hook Hand:</td>
                                    <td>{onePirate.hookHand ? "Yes" : "No"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>{onePirate.price}</p>
                    <p>{onePirate.description}</p>
                </div>
                    : <p>Loading...</p>
            }
        </div>
    )
}

export default OnePirate;