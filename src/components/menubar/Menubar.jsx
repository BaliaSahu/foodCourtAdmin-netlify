import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Menubar = ({toggleSidebar}) => {

    const {token,setToken,setOrders}=useContext(StoreContext);

    const navigate=useNavigate();

    const logOut=()=>{
        localStorage.setItem("token","")
        setToken("");
        setOrders([]);
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar} ><i className="bi bi-list"></i></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        {!token && <button onClick={()=>navigate("/login")} className='btn btn-primary' style={{width:"100px","marginBottom":"10px","marginRight":"10px"}}>Sign In</button>}
                        {token && <button onClick={()=>logOut()} className='btn btn-danger' style={{width:"100px","marginBottom":"10px","marginRight":"10px"}} >Sign Out</button>}
                        {!token && <button className='btn btn-success' style={{width:"100px","marginBottom":"10px"}} >Sign up</button>}
                    </ul>
                </div>
            </div>
        </nav> 
    )
}

export default Menubar