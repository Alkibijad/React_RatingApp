import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="header">
      <ul className="header_list">
              <li className="navbar_item"><Link to='/AvarageRate'>Avarage Rate</Link></li>
              <li className="navbar_item"><Link to='/RatingText'>Rating Text</Link></li>
              <li className="navbar_item"><Link to='/Ratings'>Ratings</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
