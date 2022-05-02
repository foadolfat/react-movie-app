import * as React from 'react';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import {Context} from '../contexts/MovieContext';
import "./index.css";

const ReviewPage = () => {
    const {states, actions} = React.useContext(Context);
    return (
        <div>
            <Navbar />
            <Reviews />
            {!states.loading && states.offset!==0 && <button className={"page-button"} onClick={() => actions.setOffset(states.offset-20)}>Load Previous</button>}
            {!states.loading && states.reviewsList.has_more && <button className={"page-button"} onClick={() => actions.setOffset(states.offset+20)}>Load Next</button>}
        </div>
    );
}
export default ReviewPage;