import React from "react";
import { SCHEMA } from "../../../constants/user-top-nav-bar-item";
import styles from "./styles.module.scss";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import SearchHeader from "./SearchHeader";
import Cart from "../../core/Cart";
import ButtonExport from "../../core/ButtonExport";

const UserHeader = () => {
  const data = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 22, city: "Los Angeles" },
    { name: "Michael Johnson", age: 35, city: "Chicago" },
  ];
  return (
    <div className={styles.container}>
      <ButtonExport data={data} fileName={"sample.xlsx"}></ButtonExport>
      <div className={styles.title}>Shree</div>
      <SearchHeader />
      <ul className={styles.navList}>
        {SCHEMA.map((item, index) => (
          <li key={index}>
            <Link className={styles.navLink} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <a className={styles.navLink} href="#about">
            About
          </a>
        </li>
        <li>
          <Cart />
        </li>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon fontSize={"30px"} color={"green"} />}
            variant="outline"
            className={styles.menuButton}
          />
          <MenuList>
            {SCHEMA.map((item, index) => (
              <MenuItem key={index}>
                <Link className={styles.menuLink} to={item.link}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              <a className={styles.menuLink} href="#about">
                About
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </ul>
    </div>
  );
};

export default UserHeader;
