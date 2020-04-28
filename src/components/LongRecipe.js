import React from 'react';
import PropTypes from 'prop-types';
import {Container, Paper, Grid, makeStyles} from '@material-ui/core';
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

    const {title, readyInMinutes, servings, vegetarian, image, glutenFree, vegan, dairyFree} = props.recipe;
    const extendedIngredients = props.recipe.extendedIngredients;
    const steps = props.recipe.analyzedInstructions[0].steps;


    return (
        <Container style={containerStyle} maxWidth={"md"}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img src={image} alt=""/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={2} className={classes.paper}>Tags:
                        <React.Fragment>
                            {vegetarian && <VegetarianTag/>}
                            {vegan && <VeganTag/>}
                            {glutenFree && <GlutenFreeTag/>}
                            {dairyFree && <DairyFreeTag/>}
                        </React.Fragment>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>{title}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>Ready in Minutes: {readyInMinutes}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={0}>Servings: {servings}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>Ingredients:</Paper>
                </Grid>
                <IngredientList  ingredients={extendedIngredients}/>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>Instructions:</Paper>
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
    border: "1px black solid",
    borderRadius: "25px",
    margin: '10px',
    padding: '20px',
};

// PropTypes
LongRecipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default LongRecipe;
