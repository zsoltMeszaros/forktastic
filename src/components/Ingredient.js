import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import {FormControlLabel, Grid, makeStyles} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

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
            <FormControlLabel control={<Checkbox color={"primary"}/>}
                              label={originalString}>
            </FormControlLabel>
        </div>
    );
};

const ingredientStyle = {
    maxWidth: "fit-content",
    backgroundColor: "beige",
    textAlign: "center",
    paddingLeft: "5px",
    margin: "10px",
    borderRadius: "15px",
};

// PropTypes
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired,
};

export default Ingredient;