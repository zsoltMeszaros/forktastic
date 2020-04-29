import React from 'react';
import PropTypes from 'prop-types';
import {Container, Paper, Link, Grid, makeStyles} from '@material-ui/core';
import VegetarianTag from "../tags/VegetarianTag";
import IngredientList from "./IngredientList";
import GlutenFreeTag from "../tags/GlutenFreeTag";
import VeganTag from "../tags/VeganTag";
import DairyFreeTag from "../tags/DairyFreeTag";


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
            <Grid container style={{justifyContent: "center", alignItems: "center"}} spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}
                           elevation={10}>
                        <h1>
                            <Link style={{ color: "black", textDecoration: "none", cursor: "pointer" }} onClick={openSourceUrl}>
                                {title}
                            </Link>
                        </h1>
                        {vegetarian && <VegetarianTag/>}
                        {vegan && <VeganTag/>}
                        {glutenFree && <GlutenFreeTag/>}
                        {dairyFree && <DairyFreeTag/>}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>Ready in Minutes: {readyInMinutes}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>Servings: {servings}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={5}>Ingredients:</Paper>
                </Grid>
                <IngredientList ingredients={extendedIngredients}/>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={5}>Instructions:</Paper>
                </Grid>
                {steps.map(step => (
                    <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={0} key={step.number}>
                            {step.step}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const containerStyle = {
    backgroundColor: "lightgoldenrodyellow",
    borderRadius: "25px",
    margin: '10px',
    padding: '20px',
};

// PropTypes
LongRecipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default LongRecipe;
