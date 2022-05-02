import * as React from 'react';
import "./index.css";

const Review = ({review}) => {
    const [expand, setExpand] = React.useState(false);
    return(
        <div className={`${expand ? 'movie-pad': ''}`}>
            <button className={`movie-box ${expand ? 'highlighted' : ''}`} onClick={()=>{setExpand(!expand)}}>{review.display_title}</button>
            {expand && review &&
            <div>
                <div>
                    <h1>{review.headline}</h1>
                    <p>{review.summary_short}</p>
                    <p>{review.byline}</p>
                    <a href={review.link.url} target="_blank"  rel="noopener noreferrer">{review.link.suggested_link_text}</a>
                </div>
                {review.multimedia && <img src={review.multimedia.src} alt="img"></img>}
            </div>}
        </div>
    )
}
export default Review;