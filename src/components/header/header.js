import "./header.css";
import search from "../../images/search.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="block"></div>
        <nav>
          <ul>
            <li className='ml-30'>
              <a className='text'>Фильмы</a>
            </li>
            <li className='ml-30'>
              <a className='text'>Сериалы</a>
            </li>
            <li className='ml-30'>
              <a className='text'>Мульфильмы</a>
            </li>
            <li className='ml-30'>
              <a className='text'>Аниме</a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <img src={search} className='search'/>
          <div className="sign-in text ml-30">Вход</div>
          <div className="log-in text ml-30">Регистрация</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
