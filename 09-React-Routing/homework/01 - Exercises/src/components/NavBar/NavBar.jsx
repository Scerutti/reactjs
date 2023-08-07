import React from "react";
import avivateLogo from "../../assets/avivate_logo.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <img src={avivateLogo} alt="logo-avivate" />
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <span>Navieras</span>
          </li>
          <li>
            <span>Promociones</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
