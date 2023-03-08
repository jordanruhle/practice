import React, {useEffect, useState } from "react";
import axios from "axios";
import PirateList from "../components/pirateList";


const Dashboard = (props) => {

    const [allPirates, setAllPirates ] = useState([])
    const [loaded, setLoaded ] = useState(false)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                console.log(res.data)
                setAllPirates(res.data)
                setLoaded(true)
            })
            .catch(err => console(err))
    }, [])

    const removeFromDom = pirateId => {
        setAllPirates(allPirates.filter(pirate => pirate._id !== pirateId));
    }

    return (
        <>
        
            {loaded && <PirateList removeFromDom={removeFromDom} allPirates={allPirates}/>}
        </>
    )
}

export default Dashboard