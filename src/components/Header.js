import Form from "./Form";
import { NavLink } from "react-router-dom";

const Header = ({ navigate, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form  /> {/* Pass the required props */}
      <nav className="main-nav">
        <ul>
          <li id="mountain">
            {/* Use navlinks to link the pages */}
          </li>
          <li id="beach">
          </li>
          <li id="bird">
          </li>
          <li id="food">
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
