import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../store/authStore";

const Navbar = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {auth.user ? (
          auth.user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
