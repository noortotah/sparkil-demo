import { NavLink } from "react-router-dom";
import styles from "./Header.scss";

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5" style={{height: '88px'}}>
          <NavLink className="navbar-brand" to={{ pathname: "/"}}>
            <img src="spark_logo.svg" alt="spark-logo"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link active" to={{
                        pathname: "/lenders",
                        }}>
                        Lenders
                        <span className="badge badge-pill badge-badge">1</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                  
                  </ul>
                  <NavLink className="btn text-danger logout-link" to={{
                        pathname: "login",
                        }}>
                    Logout 	&nbsp;
                    <i className="logout-icon"></i>
                  </NavLink>
                 
                </div>
              </nav>
     );
}
 
export default Header;