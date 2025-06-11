import './home.css'
import tata_logo from '../assets/tata-logo.png' 
const Home = () => {
  return (
    <div className="container">
      <div className="leftBar">
        <img src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Tata-Motors-logo.svg" />
      </div>
      <div className="middle">
        <ul className="main-list-container">
          <li className="home-container">
          Home
          </li>
          <ul className="home-container-list">
            <li>diwali</li>
            <li>rakhi </li>
            <li>holi </li>
          </ul>
          <li className='organisation'>ORGANISATION</li>
          <li>BUSINESS</li>
          <li>COROPRATE RESPONSIBILITY</li>
          <li>INVESTORS</li>
          <li>NEWSROOM</li>
          <li>CAREERS</li>
        </ul>
      </div>
      <div className="rightBar">
        <img src={tata_logo} alt="tatalogo" />
      </div>
    </div>
  );
}

export default Home