import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BriefRecipe from "./BriefRecipe";

class Recipes extends Component {


    render() {
        return (
            this.props.recipes.map((recipe) => (
                <BriefRecipe key={recipe.id}
                             recipe={recipe}
                />
            ))
        );
    }
}

// PropTypes
Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
};

export default Recipes;
