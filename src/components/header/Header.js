import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет,меня зовут <em>Митрий</em>
          </strong>
          <br />
          Я, фронтенд разработчик
        </h1>
        <div className="header__text">
          <p>со страстью к обучению и творчеству.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
