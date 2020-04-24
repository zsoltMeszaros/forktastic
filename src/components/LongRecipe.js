import React from 'react';
import PropTypes from 'prop-types';
import {Container, Paper, Grid, makeStyles} from '@material-ui/core';
import VegetarianTag from "./VegetarianTag";
import IngredientList from "./IngredientList";

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

    const {title, readyInMinutes, servings, vegetarian, image, instructions,} = props.recipe;
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
                    <Paper className={classes.paper}>Tags:
                        {vegetarian && <VegetarianTag/>}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{title}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Ready in Minutes: {readyInMinutes}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Servings: {servings}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Ingredients:</Paper>
                </Grid>
                <IngredientList ingredients={extendedIngredients}/>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Instructions:</Paper>
                </Grid>
                {steps.map(step => (
                    <Grid item xs={12}>
                        <Paper className={classes.paper} key={step.number}>
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
