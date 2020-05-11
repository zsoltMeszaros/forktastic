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

    const {originalString} = props.ingredient;


    return (
        <div style={ingredientStyle}>
            {originalString}
        </div>
    );
};

const ingredientStyle = {
    maxWidth: "fit-content",
    backgroundColor: "beige",
    padding: "10px 32px 10px 20px",
    textAlign: "center",
    margin: "10px",
    borderRadius: "15px",
};

// PropTypes
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired,
};

export default Ingredient;