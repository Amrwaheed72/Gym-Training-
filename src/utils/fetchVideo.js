const API_KEY = import.meta.env.VITE_EXERCISE_KEY;

export const videoOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchVideo = async (URL, options) => {
    const response = await fetch(URL, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};