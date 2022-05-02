import * as React from 'react';
import {Context} from '../contexts/MovieContext';
import Review from './Review';
import "./index.css";

const Reviews = () => {
    const {states} = React.useContext(Context);

    return(
        
        <div className={"movies-box"}>
            {states.reviewsList.results && states.reviewsList.results.length>0 && states.reviewsList.results.map((item, index) => {
                return <Review key={index} review={item}/>
            })}
            
        </div>
        
    )
    
}
export default Reviews;