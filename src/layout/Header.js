import React from 'react';
import {Link, Toolbar, Typography, Container, Box, Button} from '@material-ui/core';


const Header = (props) => {

    return (
        <Box style={headerStyle}>
            <Container style={toolbarStyle} maxWidth={"lg"}>
                        <Link style={{textDecoration: "none",}} color="inherit" href={"/"}>
                            <Typography variant="h4">
                                Forktastic
                            </Typography>
                        </Link>
                        <Link href={"/random"} style={{textDecoration: "none", marginLeft: "auto"}}>
                            <Button variant={"contained"} color={"secondary"}>
                                Random Recipe
                            </Button>
                        </Link>
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
