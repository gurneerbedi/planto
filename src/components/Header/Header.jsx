import "./Header.scss";
import PlantLogo from "/images/plantlogo.png"

function Header(){
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img
                        className="logo__img"
                        src={PlantLogo}
                        alt="planto logo"
                    />
                    <div className="logo__name">Planto.</div>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__item">Home</li>
                    <li className="navbar__item">Explore Plants</li>
                    <li className="navbar__item">Contact</li>
                </ul>
            </div>
        </>
    );
}
export default Header;