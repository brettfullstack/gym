export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ad61fd66bmshf23b37b02d45e3cp124725jsn82e9865409a5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}