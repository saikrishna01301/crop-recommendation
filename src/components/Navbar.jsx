import "./Navbar.scss";
const Navigation = () => {
  return (
    <div className="nav__container">
      {/* <div className="nav__left">
        <Logo className="nav__logo" />
        <div className="location">
          <Locate className="locate--svg" />
          <span className="location--text">Find Your Location</span>
        </div>
      </div> */}
      <ul className="nav__link">
        <li className="nav__link--item">search</li>
        <li className="nav__link--item">offers</li>
        <li className="nav__link--item">signIn</li>
        <li className="nav__link--item">cart</li>
      </ul>
    </div>
  );
};
export default Navigation;
