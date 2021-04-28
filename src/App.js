import logo from './orion.png';
import './App.css';
import icon from './icon-play.png';
import fbk from './fbk.png';
import ig from './ig.png';
import twtr from './twt.png';

function App() {
  return (
    <div className="App">
    
    <div className="container">
      <header className="Menu">
          <img src={logo} className="logo-orion" />
          <ul>
            <li><a href="#" className="lien-Menu">A Propos</a></li>
            <li><a href="#" className="lien-menu">Nos services</a></li>
            <li><a href="#" className="lien-menu">Contacts</a></li>
          </ul>
      </header>
      
      <div className="intro">
        <p> <span>VIVEZ</span> un moment de nostalgie de votre enfance <br/> a travers nos projet d'animation
        
        </p>
        <a href="#" className="lien">EXPLOREZ</a>
      </div>

      <img src={icon} className="iconplay" alt="icone"/>

      <div className="rs-footer">
        <img src={fbk} className="rs"alt="icone-facebook"/>
        <img src={ig} className="rs" alt="icone-ig"/>
        <img src={twtr} className="rs" alt="icone-twitter"/>
      </div>
    </div>
      
     

    </div>
  );
}

export default App;
