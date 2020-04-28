import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
    return (
        <React.Fragment style={{display: "flex", flexWrap: "wrap"}}>
            {props.ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient}/>
            ))}
        </React.Fragment>
    );
};

// PropTypes
IngredientList.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default IngredientList;