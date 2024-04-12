import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/QuoteBoard.css"

const QuoteBoard = () => {
    const [data, setData] = useState(null);

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
    console.log(data);

    return (
        <div class="wrapper">
            <h2>Quote Board</h2>
            {data && (
                <div class="quote-container">
                    <p class="quote">"{data.quote}"</p>
                    <p class="author">- {data.author}</p>
                </div>
            )}
        </div>
    )
}
export default QuoteBoard;