import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PirateList = (props) => {
    const {allPirates, removeFromDom} = props;



    return (
        <div>
            <h2>All Pirates</h2>
            <Link to={'/pirate/new'}><button>Add Pirate</button></Link>
            {
                allPirates.map( (pirate, i) =>
                <div key={i}>
                    <img src={pirate.imgUrl} alt={pirate.name} />
                    <Link to={`/pirates/${pirate._id}`} >
                        <p>{pirate.name}</p>
                    </Link>
                    <Link to={`/pirates/${pirate._id}`}><button>View Pirate</button></Link>
                    <Link to={`/${pirate._id}/edit`}><button>Edit Pirate</button></Link>
                    <button >
                        Walk the Plank
                    </button>
                </div>
                )
            }
        </div>
    )
}
    
export default PirateList;