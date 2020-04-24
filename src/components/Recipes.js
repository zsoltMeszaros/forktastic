import React from 'react';
import PropTypes from 'prop-types';
import BriefRecipe from "./BriefRecipe";

const Recipes = (props) => {
    return (
        props.recipes.map((recipe) => (
            <BriefRecipe key={recipe.id}
                         recipe={recipe}
            />
        ))
    );
};

// PropTypes
Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
};

export default Recipes;
