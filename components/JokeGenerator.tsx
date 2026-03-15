import React, { useEffect, useState } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                setJoke(`${data.setup} - ${data.punchline}`);
            })
            .catch(error => console.error('Error fetching the joke:', error));
    }, []);

    return (
        <div style={{ padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <h2>Random Joke</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{joke}</p>
            <button onClick={() => window.location.reload()} style={{ padding: '10px 15px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Get Another Joke</button>
        </div>
    );
};

export default JokeGenerator;