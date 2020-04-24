import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import {Grid, makeStyles} from "@material-ui/core";

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

const Ingredient = (props) => {

    const classes = useStyles();

    const {name} = props.ingredient;

    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>{name}</Paper>
        </Grid>
    );
};

// PropTypes
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired,
};

export default Ingredient;