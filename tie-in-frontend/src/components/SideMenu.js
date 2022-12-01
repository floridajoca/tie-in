import { Link, Outlet } from 'react-router-dom';
import SideMenuBusiness from './SideMenuBusiness';
import SideMenuStudent from './SideMenuStudent';

function SideMenu({hamburgerMenu, setHamburgerMenu}) {
  const userType = sessionStorage.getItem("userType");
  const isLoggedIn = sessionStorage.getItem("userLoggedIn");
  

  if (isLoggedIn === "true") {
    if (userType === "business") {
      return (
        <div className="side-menu">
         <SideMenuBusiness setHamburgerMenu={setHamburgerMenu}/> 
        </div>
      )
    } else {
      return (
        <div className="side-menu">
         <SideMenuStudent setHamburgerMenu={setHamburgerMenu}/>
        </div>
      );
    }
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signuplanding">Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default SideMenu;
