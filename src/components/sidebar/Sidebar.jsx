
import { Link } from "react-router-dom";
import logo from "../../assets/software-engineer.png"

const Sidebar = ({ sidebarVisible }) => {
    return ( 
        sidebarVisible && <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">
                <img style={{ height: "40px", paddingRight: "10px" }} src={logo} alt="" />
                Admin</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
                    <i className="bi bi-plus-square"></i> Add Food</Link>

                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">
                    <i className="bi bi-list-task"></i> List Food</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">
                    <i className="bi bi-cart"></i> Orders</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/messages">
                    <i className="bi bi-cart"></i> Messages</Link>
            </div>
        </div>
    )
}
export default Sidebar;