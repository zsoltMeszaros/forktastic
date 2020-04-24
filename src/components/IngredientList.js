import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
    return (
        props.ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient}/>
        ))
    );
};

// PropTypes
IngredientList.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default IngredientList;