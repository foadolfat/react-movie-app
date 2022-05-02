import * as React from 'react';
import {Context} from '../contexts/MovieContext';
import Calendar from './Calendar';
import './index.css';

const Navbar = () => {
    const {states, actions} = React.useContext(Context);
    const handle = (value) => {
        actions.setTitle(value)
    }
    return (
        <div className={"navbar"}>
            <input className={"search-bar"} type="text" id="title" placeholder="Enter Movie Title" onKeyDown={e => e.key === 'Enter' && handle(e.target.value)}/>
            <button className={"search-button"} onClick={() => {
                const t = document.getElementById('title').value;
                actions.setTitle(t)
            }}>Get Reviews</button>
            <Calendar />
            {states.loading && <div>Loading...</div>}
        </div>
    );
}
export default Navbar;