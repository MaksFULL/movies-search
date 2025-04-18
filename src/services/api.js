import axios from "axios";


const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgwNjQ4ZjM0Y2EzYzVjMTViZDMzYzE4N2VjODMyNyIsIm5iZiI6MTczMTQ5MDQ0NC41MzcwMDM4LCJzdWIiOiI2NzM0NzBlYWE2N2UzNmJiNjY4ZDhjZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VLeQT31mMUXkyvpjyRh9DexSAvP7l9VUozndE_bDwow";


axios.defaults.baseURL = "https://api.themoviedb.org/3/";


const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
  params: {
    language: "uk-UA",
  },
};


const searchMovie = async (query, page = 1) => {
  if (!query) {
    console.warn("Query is empty!");
    return;
  }

  try {
    const response = await axios.get("search/movie", {
      ...options,
      params: {
        ...options.params,
        include_adult: false,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка в searchMovie:", error);
  }
};


const trendingMovie = async (page = 1) => {
  try {
    const response = await axios.get("trending/movie/day", {
      ...options,
      params: {
        ...options.params,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка в trendingMovie:", error);
  }
};


const detailsMovie = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}`, options);
    return response.data;
  } catch (error) {
    console.error("Ошибка в detailsMovie:", error);
  }
};


const reviewsMovie = async (movieId, page = 1) => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      ...options,
      params: {
        ...options.params,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка в reviewsMovie:", error);
  }
};


const creditsMovie = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, options);
    return response.data;
  } catch (error) {
    console.error("Ошибка в creditsMovie:", error);
  }
};


export {
  searchMovie,
  trendingMovie,
  detailsMovie,
  reviewsMovie,
  creditsMovie,
};
