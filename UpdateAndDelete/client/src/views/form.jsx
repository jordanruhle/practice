import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const PirateForm = (props) => {

    const navigate =useNavigate()

    const [ pirateInfo, setPirateInfo] = useState ({
        name: "",
        imgUrl: "",
        treasureChests: 0,
        catchPhrase: "",
        crewPosition : "Captain",
        pegLeg : true,
        eyePatch : true,
        hookHand : true,
    })

    const [errors, setErrors] = useState([])

    const formChangeHandler = (e) => {
        setPirateInfo({
            ...pirateInfo,
            [e.target.name]: e.target.value
        })
        console.log(pirateInfo)
    }

    const checkboxHandler = (e) => {
        setPirateInfo({
            ...pirateInfo,
            [e.target.name]: e.target.checked
        })
        console.log(pirateInfo)
    }

    const createPirate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates", pirateInfo)
            .then(res => {
                console.log(res.data)
                navigate('/pirates')
            })
            .catch(err => {
                console.log(err)
                const errorsArr = []
                const errorResponse = err.response?.data?.error?.errors 
                for (const key in errorResponse) {
                    let message = (Object.keys(errorResponse))
                    errorsArr.push(errorResponse[key].message)
                }
                setErrors(errorsArr)
                console.log(errors)
            })
    }

    return (
        <>
            <h1>Add Pirate</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Link to={`/pirates/`}><button>Crew Board</button></Link>
            <form onSubmit={ createPirate }>
                <div>
                    <label>Name: </label>
                    <input 
                    type="text"
                    name="name"
                    onChange={ (e) => { formChangeHandler(e) }} />
                </div>
                <div>
                    <label>Image Url: </label>
                    <input 
                    type="text"
                    name="imgUrl"
                    onChange={ (e) => { formChangeHandler(e) }} />
                </div>
                <div>
                    <label># of Treasure Chests: </label>
                    <input 
                    type="number"
                    name="treasureChests"
                    onChange={ (e) => { formChangeHandler(e) }} />
                </div>
                <div>
                    <label>Pirate Catch Phrase: </label>
                    <input 
                    type="text"
                    name="catchPhrase"
                    onChange={ (e) => { formChangeHandler(e) }} />
                </div>
                <div>
                    <label>Crew Position: </label>
                    <select name="crewPosition"
                    onChange={ (e) => { formChangeHandler(e) }}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select> 
                </div>
                <div>
                    <label>Peg Leg: </label>
                    <input 
                    type="checkbox"
                    name="pegLeg"
                    checked={pirateInfo.pegLeg}
                    onChange={ (e) => { checkboxHandler(e) }} />
                </div>
                <div>
                    <label>Eye Patch: </label>
                    <input 
                    type="checkbox"
                    name="eyePatch"
                    checked={pirateInfo.eyePatch}
                    onChange={ (e) => { checkboxHandler(e) }} />
                </div>
                <div>
                    <label>Hook Hand: </label>
                    <input 
                    type="checkbox"
                    name="hookHand"
                    checked={pirateInfo.hookHand}
                    onChange={ (e) => { checkboxHandler(e) }} />
                </div>
                
                <button>Add Pirate</button>
            </form>
        </>
    )

}

export default PirateForm