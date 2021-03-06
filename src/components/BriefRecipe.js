import React from 'react';
import PropTypes from 'prop-types';
import {Container, List, ListItem, ListItemText} from '@material-ui/core';
import VegetarianTag from "../tags/VegetarianTag";


const BriefRecipe = (props) => {

    const {title, readyInMinutes, servings, vegetarian} = props.recipe;

    return (
        <Container style={containerStyle} maxWidth={"xs"}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem divider>
                    <ListItemText style={{textAlign: "center"}}>{title}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Ready In Minutes:"/>
                    <div>{readyInMinutes}</div>
                </ListItem>
                <ListItem divider>
                    <ListItemText primary="Servings:"/>
                    <div>{servings}</div>
                </ListItem>
                <ListItem>
                    <ListItemText>Tags: </ListItemText>

                    <div>
                        {vegetarian && <VegetarianTag/>}
                    </div>
                </ListItem>
            </List>
        </Container>
    );
};

const containerStyle = {
    backgroundColor: "lightgoldenrodyellow",
    border: "1px black solid",
    borderRadius: "25px",
    margin: '10px',
    width: '25%',
};

// PropTypes
BriefRecipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default BriefRecipe;
