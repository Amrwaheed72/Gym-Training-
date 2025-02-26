const API_KEY = import.meta.env.VITE_EXERCISE_KEY;

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (URL, options) => {
    const response = await fetch(URL, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};