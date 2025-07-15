import styles from "./styles.module.css";
import logo from "../../assets/logo.png"; // ajuste o caminho conforme seu projeto
import ButtonNav from "../ButtonNav";
import { Fragment } from "react";
import { SearchNav } from "../SeachNav";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.nav2}>

        <ul className={styles.link}>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Publicar</a>
          </li>
        </ul>
        <SearchNav></SearchNav>
        <ButtonNav></ButtonNav>
        </div>
      </div>
    </Fragment>
  );
}
