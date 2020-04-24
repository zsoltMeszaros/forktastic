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
                    <Container>

                        <ButtonGroup style={{float: 'right'}}>

                            <Button style={buttonStyle}>
                                <Link onClick={props.getRandomRecipe} href={"/random"} color={"inherit"}>Random
                                    Recipe</Link>
                            </Button>

                            <Button size={"large"}
                                    style={buttonStyle}>Search</Button>
                        </ButtonGroup>
                    </Container>
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

const buttonStyle = {

    backgroundColor: 'mediumseagreen',
    color: 'white',
    outline: 'white 1px',
};


export default Header;
