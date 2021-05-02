import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar() {
    return (
        <div>

            <nav id="navbar" >

                <div className="nav-wrapper">
                    <div className="logo">
                        <Link to="/"><img className="nbaImg" src="https://www.essentiallysports.com/wp-content/uploads/NBA_Logoman_2017-horizontal.jpg" /></Link>
                    </div>

                    <ul id="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dreamteam">Dream Team</Link></li>

                    </ul>

                </div>

            </nav>


        </div>
        
    );
}

export default NavBar;