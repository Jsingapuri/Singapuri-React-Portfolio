import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-fill justify-content-center" style={{backgroundColor: "lightblue"}}>
      <li className="nav-item" onClick={() => handlePageChange("Home")}>
        <a
          href="#home"
          className={currentPage === "Home" ? "nav-link active" : "nav-link"} 
        >
          Home
        </a>
      </li>
      <li className="nav-item" onClick={() => handlePageChange("About")}>
        <a
          href="#about"
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" onClick={() => handlePageChange("Project")}>
        <a
          href="#project"
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          My Projects
        </a>
      </li>
      <li className="nav-item" onClick={() => handlePageChange("Contact")}>
        <a
          href="#contact"
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
