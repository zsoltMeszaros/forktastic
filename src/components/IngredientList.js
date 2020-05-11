import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from "./Ingredient";
import Container from "@material-ui/core/Container";

const IngredientList = (props) => {
    return (
        <Container style={{display: "flex", flexWrap: "wrap-reverse", alignItems: "center", justifyContent: "center"}}>
            {props.ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient}/>
            ))}
        </Container>
    );
};

// PropTypes
IngredientList.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default IngredientList;