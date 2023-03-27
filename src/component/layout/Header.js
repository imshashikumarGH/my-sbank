import React from "react";

import logo from "../asset/SBI-Logo.png"
import Button from "../common/Button";
import classes from "./Header.module.css";

const Header = () =>{
    return  <div className={classes.div}>
        <img className ={classes.img} src={logo} alt="logo" />
        <Button></Button>
    </div>;
}

export default Header;