import React from "react";
import { FaHiking, FaSnowboarding, FaBiking, FaSwimmer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GiMountainClimbing } from "react-icons/gi";
import "./main.css";
import { Link } from "react-router-dom";

const Actividades = () => {
  return (
    <div className="container-fluid">
      <div id="activi" className="btn-group-vertical">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaBiking className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaSwimmer className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaSnowboarding className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <FaHiking className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/map">
              <GiMountainClimbing className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Actividades;
