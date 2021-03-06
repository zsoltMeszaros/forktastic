import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";


const RegisterModal = () => {

    const register = () => {

        let message = "";

        let username = document.querySelector("#register_username").value;
        let password = document.querySelector("#register_password").value;
        let rePassword = document.querySelector("#rePassword").value;
        let email = document.querySelector("#email").value;

        if (password === rePassword) {

            const newUser = {
                username: username,
                password: password,
                email: email
            };

            const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN;
            const registerRoute = process.env.REACT_APP_REGISTER_ROUTE;

            axios.post(backendDomain + registerRoute, newUser)
                .then(res => {
                    message=res.data.message;
                    document.querySelector("#errorMessage").textContent = message;
                    document.querySelector("#errorMessage").style.color = "green";
                }).catch(err => {
                message=err.response.data.message;
                document.querySelector("#errorMessage").textContent = message;
                document.querySelector("#errorMessage").style.color = "red";
            });


        }else{
            document.querySelector("#errorMessage").textContent = "Passwords don't match!";
        }
    };

    const hideModal = () => {
        let modal = document.querySelector("#registerModal");
        modal.style.display = "none";
    };


    return (
        <div id={"registerModal"} style={modalStyle}>
            <button onClick={hideModal} style={closeButtonStyle}>
                X
            </button>
            <div style={{margin: "60px 80px 60px 80px", textAlign: "center"}}>
                <form>
                    <h2>Username:</h2>
                    <input id={"register_username"} style={inputStyle} name={"username"} type="text"/>
                    <h2>Email:</h2>
                    <input id={"email"} style={inputStyle} name={"email"} type="text"/>
                    <h2>Password:</h2>
                    <input id={"register_password"} style={inputStyle} name={"password"} type="password"/>
                    <h2>Password Again:</h2>
                    <input id={"rePassword"} style={inputStyle} name={"rePassword"} type="password"/>
                    <div style={{marginTop: "15px"}}>
                        <Button onClick={register} variant={"contained"} color={"primary"}>Register</Button>
                    </div>
                    <div id={"errorMessage"} style={{ fontSize: "15px", margin: "10px" }}>
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
    top: "15%",
    width: "fit-content",
    height: "fit-content",
    borderRadius: "25px",
    border: "darkseagreen solid 12px",
    alignItems: "center",
    justifyContent: "center"
};

export default RegisterModal;
