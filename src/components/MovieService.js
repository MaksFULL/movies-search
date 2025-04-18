import { searchMovie } from "../services/api"; // Убедись в правильном пути

export default class MovieService {
  async fetchMovies(query, page = 1) {
    if (!query) {
      throw new Error("Пошуковий запит порожній");
    }

    try {
      const data = await searchMovie(query, page);
      return data.results;
    } catch (error) {
      console.error("Помилка при отриманні фільмів:", error);
      throw new Error("Не вдалося завантажити фільми");
    }
  }
}
