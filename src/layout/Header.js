import React from 'react';
import {ButtonGroup, Toolbar, Typography, Button, Container, Box} from '@material-ui/core';
import {Link} from "@material-ui/core";


const Header = (props) => {

    return (
        <Box style={headerStyle}>
            <Container style={toolbarStyle} maxWidth={"lg"}>
                <Toolbar>
                    <Link  color="inherit" href={"/"}>
                        <Typography variant="h4">
                            Forktastic
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </Box>
    )
        ;
};


const headerStyle = {
    backgroundColor: 'mediumseagreen',
};

const toolbarStyle = {
    backgroundColor: 'seagreen',
    color: 'white',
    padding: '15px',
};




export default Header;
