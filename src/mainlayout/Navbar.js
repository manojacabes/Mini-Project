import React from "react";
import "./../assets/style/Navbar.css";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";

function NavBar() {
  return (
    <div className="LayoutNavBar text-dark">
      <h6>
        <Link to="/home" className="Link">
          <FaHome /> &nbsp; &nbsp;Home
        </Link>
        <br></br>
        <br></br>
        <Link to="/profile" className="Link">
          <CgProfile /> &nbsp; &nbsp;Profile
        </Link>
        <br></br>
        <br></br>
        <Link to="/setting" className="Link">
          <FiSettings /> &nbsp; &nbsp;Settings
        </Link>
        <br></br>
        <br></br>
        <Link to="/send-invite" className="Link">
          <RiMailSendLine /> &nbsp; &nbsp;Send Invitation
        </Link>
        <br></br>
        <br></br>
        <Link to="/" className="Link">
          <VscSignOut /> &nbsp; &nbsp;Signout
        </Link>
        <br></br>
        <br></br>
        <Link to="/about" className="Link">
          <MdOutlineContactSupport /> &nbsp; &nbsp;About us
        </Link>
      </h6>
    </div>
  );
}

export default NavBar;
