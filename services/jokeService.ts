import axios from 'axios';

// Function to fetch a random joke
export const fetchRandomJoke = async () => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
    } catch (error) {
        console.error('Error fetching joke:', error);
        throw error;
    }
};

// Function to fetch multiple jokes
export const fetchMultipleJokes = async (count) => {
    try {
        const response = await axios.get(`https://official-joke-api.appspot.com/jokes/programming/ten`);
        return response.data.slice(0, count);
    } catch (error) {
        console.error('Error fetching jokes:', error);
        throw error;
    }
};
