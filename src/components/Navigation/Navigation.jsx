import { NavLink, useNavigate } from "react-router-dom";
import s from "./Navigation.module.css"; 
import clsx from "clsx";
import { MdLocalMovies } from "react-icons/md";

const linkNav = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (!query) return;
    navigate(`/movies?query=${query}&page=1`);
    e.target.reset();
  };

  return (
    <header id="header" className={s.header}>
      <MdLocalMovies className={s.icon} />
      <nav className={s.nav}>
        <NavLink className={linkNav} to="/">HomePage</NavLink>
        <NavLink className={linkNav} to="/movies">MovieList</NavLink>
        <form onSubmit={handleSearch} className={s.form}>
          <input
            type="text"
            name="query"
            placeholder="Пошук фільмів..."
            className={s.input}
          />
          <button type="submit" className={s.btn}>Пошук</button>
        </form>
      </nav>
    </header>
  );
};

export default Navigation;
