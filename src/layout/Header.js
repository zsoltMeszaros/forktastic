import React, {Component} from 'react';
import {ButtonGroup, Toolbar, Typography, Button, Container, Box} from '@material-ui/core';


class Header extends Component {

    render() {
        return (
            <Box style={headerStyle}>
                <Container style={toolbarStyle} maxWidth={"lg"}>
                    <Toolbar>
                        <Typography variant="h4">
                            Forktastic
                        </Typography>
                        <Container>
                            <ButtonGroup style={{ float: 'right'}}>
                                <Button onClick={this.props.getRandomRecipe}
                                        style={buttonStyle}>Random Recipe</Button>
                                <Button size={"large"}
                                        style={buttonStyle}>Search</Button>
                            </ButtonGroup>
                        </Container>
                    </Toolbar>
                </Container>
            </Box>
        );
    }
}


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
