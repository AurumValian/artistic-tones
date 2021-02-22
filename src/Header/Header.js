import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <NavLink className="head-button" id="button1"to="/harpstuff">
          Harpistry
        </NavLink>
        <NavLink className="head-button" id="button2" to="/books">
          Books
        </NavLink>
        <NavLink className="head-button" id="button3" to="/sound">
          Sound Tech
        </NavLink>
      </div>
      <h1>
        Welcome to Artistic Tones!
      </h1>
      <NavLink className="head-button" id="button4" to='/'>
        About
      </NavLink>
    </header>
  )
}

export default Header;
