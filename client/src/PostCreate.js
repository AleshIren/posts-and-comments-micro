import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <label> Title</label>
            <div className='form-group'>
                <input value={title} 
                onChange={e => setTitle(e.target.value)} 
                className='form-control' />
            </div>
            <button className='btn btn-primary' >Submit</button>
            
        </form>
        
    </div>
};

export default PostCreate;