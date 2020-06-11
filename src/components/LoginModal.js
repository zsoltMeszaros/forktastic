import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const LoginModal = (props) => {

    const login = () => {
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
    };

    const hideModal = () => {
        let modal = document.querySelector("#loginModal");
        modal.style.display = "none";
    };

    return (
        <div id={"loginModal"} style={modalStyle}>
            <button onClick={hideModal} style={closeButtonStyle}>
                X
            </button>
            <div style={{margin: "60px 80px 60px 80px", textAlign: "center"}}>
                <form>
                    <h2>Username:</h2>
                    <input id={"login_username"} style={inputStyle} name={"login_username"} type="text"/>
                    <h2>Password:</h2>
                    <input id={"login_password"} style={inputStyle} name={"login_password"} type="password"/>
                    <div style={{marginTop: "15px"}}>
                        <Button onClick={login} variant={"contained"} color={"primary"}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
};


const inputStyle = {
    fontSize: "1.1em",
    width: "fit-content",
    borderRadius: "10px",
    backgroundColor: "beige",
    border: "darkseagreen solid 2px",
    height: "35px",
    padding: "5px 15px 5px 15px"
};

const closeButtonStyle = {
    backgroundColor: "red",
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "40px",
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    marginTop: "10px",
    marginRight: "10px",
    float: "right",
};

const modalStyle = {
    color: "darksalmon",
    display: "none",
    backgroundColor: "beige",
    position: "fixed",
    zIndex: "999",
    margin: "0 auto",
    left: "0",
    right: "0",
    top: "25%",
    width: "fit-content",
    height: "fit-content",
    borderRadius: "25px",
    border: "darkseagreen solid 12px",
    alignItems: "center",
    justifyContent: "center"
};

export default LoginModal;
