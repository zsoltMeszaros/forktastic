import React from 'react';
import {Button, Container, Input} from '@material-ui/core';

const SearchByName = (props) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const getRecipeAutoCompleteResults = process.env.REACT_APP_AUTOCOMPLETE_RECIPE_SEARCH_URL_PART;
    const addApiKeyUrlPart = process.env.REACT_APP_API_KEY_URL_ENDING;

    const testAutocompletes = {
        titles: [
            {id: 34150, title: "chili"},
            {id: 98684, title: "chivito"},
            {id: 296687, title: "chicken"},
            {id: 402895, title: "chia jam"},
            {id: 440848, title: "chili ii"},
            {id: 527190, title: "chili mac"},
            {id: 552999, title: "chili pie"},
            {id: 568185, title: "chili dog"},
            {id: 595313, title: "chili dip"},
            {id: 551061, title: "chilli jam"}
        ]
    };

    const searchRecipe = (e) => {
        let searchString = e.target.value;
        // axios.get(getRecipeAutoCompleteResults + searchString + addApiKeyUrlPart + apiKey)
        //     .then(res => console.log(res.data));
    };

    return (
        <Container style={boxStyle}>
            <input onChange={searchRecipe} style={inputStyle}
                   placeholder={"Enter recipe name"}/>

            <Button style={{ margin: "10px"}} variant={"contained"} color={"secondary"}>
                Search by Name
            </Button>
        </Container>
    );
};

const inputStyle = {
    padding: "10px 15px 10px 15px",
    border: "none",
    fontSize: "1.1em",
    width: "fit-content",
    backgroundColor: "beige"
};

const boxStyle = {
    marginBottom: "20px",
    borderRadius: "30px",
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "fit-content",
    height: "fit-content"
};


export default SearchByName;
