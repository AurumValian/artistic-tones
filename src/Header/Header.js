import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
      <div>
        <NavLink className="head-button" to="/harpstuff">
          Harpistry
        </NavLink>
        <NavLink className="head-button" to="books">
          Books
        </NavLink>
        <NavLink className="head-button" to="sound">
          Sound Tech
        </NavLink>
      </div>
      <h1>
        Welcome to Artistic Tones!
      </h1>
      <NavLink className="head-button" to='/'>
        About
      </NavLink>
    </header>
  )
}

export default Header;
