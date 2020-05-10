import React from 'react';
import axios from "axios";
import {Button, Container, Input} from '@material-ui/core';

const SearchByName = (props) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const getRecipeAutoCompleteResults = process.env.REACT_APP_AUTOCOMPLETE_RECIPE_SEARCH_URL_PART;
    const addApiKeyUrlPart = process.env.REACT_APP_API_KEY_URL_ENDING;


    const searchRecipe = (e) => {
        console.log(e.target.value);
    };

    return (
        <Container style={{ textAlign: "center"}}>
            <Input onChange={searchRecipe} style={{backgroundColor: "white", borderRadius: "1px", padding: "5px"}} placeholder={"Enter recipe name.."}/>

            <Button  variant={"contained"} color={"default"}>
                Search Recipe
            </Button>
        </Container>
    );
};


export default SearchByName;
