import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/QuoteBoard.css"

const QuoteBoard = () => {
    const [data, setData] = useState(null);

    // Make API call
    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
            headers: {
                'X-Api-Key': 'jD+C9ps5WZ2Z3KvPlJW+Ew==Yav7ceUyxVveNdJZ'
            }
        })
            .then(response => response.json())
            .then(json => setData(json[0])) // Assuming the API always returns a single quote
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="wrapper">
            <h2>Quote Board</h2>
            {data && (
                <div className="quote-container">
                    <p className="quote">"{data.quote}"</p>
                    <p className="author">- {data.author}</p>
                </div>
            )}
        </div>
    )
}
export default QuoteBoard;