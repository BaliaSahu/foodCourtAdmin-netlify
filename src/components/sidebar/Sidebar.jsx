import { Link } from "react-router-dom";
import logo from "../../assets/software-engineer.png";

const Sidebar = ({ sidebarVisible }) => {
  return (
    <div
      className={`border-end bg-white position-fixed h-100 ${
        sidebarVisible ? "d-block" : "d-none d-md-block"
      }`}
      style={{ width: "250px", zIndex: 100 }}
    >
      <div className="sidebar-heading border-bottom bg-light p-2 d-flex align-items-center">
        <img style={{ height: "40px", paddingRight: "10px" }} src={logo} alt="Logo" />
        Admin
      </div>

      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action p-3" to="/add">
          Add Food
        </Link>
        <Link className="list-group-item list-group-item-action p-3" to="/list">
          List Food
        </Link>
        <Link className="list-group-item list-group-item-action p-3" to="/orders">
          Orders
        </Link>
        <Link className="list-group-item list-group-item-action p-3" to="/messages">
          Messages
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
