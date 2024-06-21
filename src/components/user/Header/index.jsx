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
const UserHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Shree</div>
      <SearchHeader></SearchHeader>
      <ul>
        {SCHEMA.map((item, index) => {
          return (
            <li key={index}>
              <Link className="w-full h-full" to={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <a href="#about">About</a> d55
        </li>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon fontSize={"50px"} color={"green"} />}
            style={{ backgroundColor: "transparent", border: "none" }} // Áp dụng CSS trực tiếp qua thuộc tính style
          />
          <MenuList>
            {SCHEMA.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Link className="w-full h-full" to={item.link}>
                    {item.name}
                  </Link>
                </MenuItem>
              );
            })}
            <MenuItem>
              <a className="w-full h-full" href={"#about"}>
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
