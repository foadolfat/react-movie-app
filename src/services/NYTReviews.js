const URL = "https://api.nytimes.com/svc/movies/v2/"
const KEY = process.env.REACT_APP_NYT_KEY;

export const reviewByTitle = (title, offset, startDate, endDate) => {
    return fetch(`${URL}reviews/search.json?query=${title}&offset=${offset}&opening-date=${startDate}:${endDate}&api-key=${KEY}`)
        .then(res => res.json())
        .catch((err) => {return {"error": err}})
}

