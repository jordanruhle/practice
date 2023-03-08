import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setTitle(res.data.pirate.title);
                setPrice(res.data.pirate.price);
                setDescription(res.data.pirate.description);
                setLoaded(true);
            })
    }, []);


    return (
        <div>
            <h1>Update a Pirate</h1>
            {
                loaded ? (
                <form >
                    <p>
                        <label>Title</label><br />
                        <input type="text" 
                        name="title" 
                        value={title} 
                         />
                    </p>
                    <p>
                        <label>Price</label><br />
                        <input type="number" 
                        name="price"
                        value={price} 
                         />
                    </p>
                    <p>
                        <label>Description</label><br />
                        <input type="text" 
                        name="description" 
                        value={description} 
                         />
                    </p>
                    <input type="submit" />
                </form>
                ) : <p>Loading...</p>
            }
        </div>
    )

}

export default Update