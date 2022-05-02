import * as React from 'react';
import {reviewByTitle} from '../services/NYTReviews';

export const Context = React.createContext();

const MovieContextProvider = ({children}) => {
    const [reviewsList, setReviewsList] = React.useState({});
    const [title, setTitle] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [offset, setOffset] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [startDate, setStartDate] = React.useState("1900-01-01");
    const [endDate, setEndDate] = React.useState("2022-01-01");

    React.useEffect(() => {
        if (title) {
            setLoading(true);
            reviewByTitle(title, offset, startDate, endDate)
                .then(reviews => setReviewsList(reviews))
                .catch(err => setError(err))
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setReviewsList({});
        }
    },[title, offset, startDate, endDate]);

    return(
        <Context.Provider value={{
            states:{
                reviewsList: reviewsList,
                title: title,
                error: error,
                offset: offset,
                loading: loading,
                startDate: startDate,
                endDate: endDate
            },
            actions:{
                setReviewsList: setReviewsList,
                setTitle: setTitle,
                setError: setError,
                setOffset: setOffset,
                setLoading: setLoading,
                setStartDate: setStartDate,
                setEndDate: setEndDate
            }
        }}>
            {children}
        </Context.Provider>
    );
}
export default MovieContextProvider;