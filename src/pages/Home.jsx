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
            <ul className="home-container-list">
              <li>diwali</li>
              <li>rakhi </li>
              <li>holi </li>
            </ul>
          </li>
          <li className="organisation-container">
            ORGANISATION
            <ul className="organisation-list">
              <li>diwali</li>
              <li>rakhi </li>
              <li>holi </li>
            </ul>
          </li>
          <li className='buisnes-container'>
            BUSINESS
            <ul className="buisness-list">
              <li>diwali</li>
              <li>diwali</li>
              <li>diwali</li>
            </ul>
          </li>
          <li className='responsibility-container'>
            COROPRATE RESPONSIBILITY
            <ul className='responsibility-list'>
              <li>diwali</li>
              <li>diwali</li>
              <li>diwali</li>
            </ul>
          </li>
          <li className='investors-container'>
            INVESTORS
            <ul className='investors-list'>
              <li>diwali</li>
              <li>diwali</li>
              <li>diwali</li>
            </ul>
          </li>
          <li className='newsroom-container'>
            NEWSROOM
            <ul className='newsroom-list'>
              <li>diwali</li>
              <li>diwali</li>
              <li>diwali</li>
            </ul>
          </li>
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