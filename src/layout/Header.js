import React from 'react';
import {Link, Typography, Container, Box, Button} from '@material-ui/core';
import ButtonGroup from "@material-ui/core/ButtonGroup";


const Header = () => {

    const openLoginModal = () =>{
        document.querySelector("#registerModal").style.display = "none";
        document.querySelector("#loginModal").style.display = "block";
    };

    const openRegisterModal = () =>{
        document.querySelector("#loginModal").style.display = "none";
        document.querySelector("#registerModal").style.display = "block";
    };

    return (
        <Box style={headerStyle}>
            <Container style={toolbarStyle} maxWidth={"lg"}>
                <Link style={{textDecoration: "none",}} color="inherit" href={"/"}>
                    <Typography variant="h4">
                        Forktastic
                    </Typography>
                </Link>
                <Container style={{ width: "fit-content", marginRight: "0px" }}>
                    <Link href={"/random"} style={{textDecoration: "none", }}>
                        <Button variant={"contained"} color={"secondary"}>
                            Random Recipe
                        </Button>
                    </Link>
                    <ButtonGroup style={{textDecoration: "none", marginLeft: "20px"}}>
                        <Button onClick={openRegisterModal} variant={"contained"} color={"primary"}>
                            Register
                        </Button>
                        <Button onClick={openLoginModal} variant={"contained"} color={"primary"}>
                            Login
                        </Button>
                    </ButtonGroup>
                </Container>
            </Container>
        </Box>
    );
};


const headerStyle = {
    backgroundColor: 'mediumseagreen',
    maxWidth: "100%"
};

const toolbarStyle = {
    alignItems: "center",
    height: "70px",
    minWidth: "60%",
    backgroundColor: 'seagreen',
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap'
};


export default Header;
