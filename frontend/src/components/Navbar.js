import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    alert("Logged out");
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      {/* LOGO */}
      <Link to="/" style={logoStyle}>
        EventHub
      </Link>

      {/* NAV LINKS */}
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>

        {!token && (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/signup" style={linkStyle}>Signup</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/my-bookings" style={linkStyle}>My Bookings</Link>
            <Link to="/admin" style={linkStyle}>Add Event</Link>
            <button style={logoutBtnStyle} onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

/* 🎨 Styles */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "#101014",
  position: "sticky",
  top: 0,
  zIndex: 100,
  borderBottom: "1px solid #2a2a2d",
  boxShadow: "0 3px 12px rgba(0,0,0,0.25)"
};

const logoStyle = {
  color: "#61dafb",
  fontSize: "28px",
  fontWeight: "700",
  textDecoration: "none",
};

const navLinksStyle = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
};

const linkStyle = {
  color: "#e2e2e2",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "500",
  transition: "0.3s",
};

const logoutBtnStyle = {
  background: "linear-gradient(90deg, #d9534f, #b63430)",
  color: "white",
  padding: "9px 18px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s"
};
