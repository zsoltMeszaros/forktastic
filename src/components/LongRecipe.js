import React from 'react';
import PropTypes from 'prop-types';
import {Container, Paper, Link, Grid, makeStyles} from '@material-ui/core';
import VegetarianTag from "../tags/VegetarianTag";
import IngredientList from "./IngredientList";
import GlutenFreeTag from "../tags/GlutenFreeTag";
import VeganTag from "../tags/VeganTag";
import DairyFreeTag from "../tags/DairyFreeTag";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

const LongRecipe = (props) => {

    const classes = useStyles();

    const {title, readyInMinutes, servings, vegetarian, sourceUrl, glutenFree, vegan, dairyFree} = props.recipe;
    const extendedIngredients = props.recipe.extendedIngredients;
    const steps = props.recipe.analyzedInstructions[0].steps;

    const openSourceUrl = () => {
        window.open(sourceUrl, "_blank");
    };

    return (
        <Container style={containerStyle} maxWidth={"md"}>
            <Container style={boxStyle}>
                <Container>
                    <h1>
                        <Link style={{color: "black", textDecoration: "none", cursor: "pointer"}}
                              onClick={openSourceUrl}>
                            {title}
                        </Link>
                    </h1>
                </Container>
                <Container style={{justifyContent: "center", alignItems: "center",}}>
                    {vegetarian && <VegetarianTag/>}
                    {vegan && <VeganTag/>}
                    {glutenFree && <GlutenFreeTag/>}
                    {dairyFree && <DairyFreeTag/>}
                </Container>
            </Container>
            <Container style={titleContainerStyle}>
                <h2 style={titleStyle}>
                    Ready in Minutes: {readyInMinutes}</h2>
                <h2 style={titleStyle}>
                    Servings: {servings}</h2>
            </Container>
            <Container style={titleContainerStyle}>
                <h2 style={titleStyle}>
                    Ingredients:
                </h2>
            </Container>
            <Container style={flexBoxStyle}>
                <IngredientList ingredients={extendedIngredients}/>
            </Container>
            <Container style={titleContainerStyle}>
                <h2 style={titleStyle}>
                    Instructions:
                </h2>
            </Container>
            <Container style={flexBoxStyle}>
                {steps.map((step, index) => (
                    <div style={titleStyle}>
                        {index + 1 + ". " + step.step}
                    </div>
                ))}
            </Container>
        </Container>
    );
};

const titleContainerStyle = {
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    display: "flex",
    flexWrap: "wrap"
};

const flexBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    margin: "5px",
    backgroundColor: "darksalmon",
    borderRadius: "15px"
};

const titleStyle = {
    maxWidth: "fit-content",
    backgroundColor: "beige",
    padding: "10px 40px 10px 40px",
    textAlign: "center",
    margin: "15px",
    borderRadius: "15px",
};

const containerStyle = {
    backgroundColor: "lightsalmon",
    borderRadius: "80px",
    padding: '35px',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
};

const boxStyle = {
    borderRadius: "30px",
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minWidth: "fit-content",
    maxWidth: "80%",
    padding: "20px",
};

// PropTypes
LongRecipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default LongRecipe;
