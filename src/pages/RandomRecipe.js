import React from 'react';
import BriefRecipe from "../components/BriefRecipe";

function RandomRecipe() {
    return (
        <React.Fragment>
            <BriefRecipe recipe={this.props.recipe}/>
        </React.Fragment>
    );
}

export default RandomRecipe;