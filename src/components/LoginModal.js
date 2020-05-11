import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const LoginModal = (props) => {


    return (
        <div style={modalStyle}>
            <Typography>Username:</Typography>
            <input name={"username"} type="text"/>
            <Typography>Password:</Typography>
            <input name={"password"} type="text"/>
            <Button variant={"contained"} color={"primary"}>Login</Button>
        </div>
    )
};

const modalStyle = {
    display: "none",
    backgroundColor: "white",
    position: "absolute",
    zIndex: "999",
    top: "25%",
    left: "25%",
    padding: "120px 130px 120px 130px",
    minWidth: "fit-content",
    maxWidth: "90%",
    minHeight: "fit-content",
    maxHeight: "90%",
};

export default LoginModal;
