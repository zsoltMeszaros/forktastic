import React from 'react';
import {Link, Toolbar, Typography, Container, Box} from '@material-ui/core';


const Header = (props) => {

    return (
        <Box style={headerStyle}>
            <Container style={toolbarStyle} maxWidth={"lg"}>
                <Toolbar>
                    <Link style={{ textDecoration: "none", }}  color="inherit" href={"/"}>
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
};




export default Header;
