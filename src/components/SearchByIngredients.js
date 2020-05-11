import React, {useState} from 'react';
import axios from "axios";
import {Button, Container, FormControlLabel, FormGroup} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";


const SearchByName = (props) => {

    const testIngredients = {
        ingredients: [
            {
                id: 0,
                name: "tomato",

            },
            {
                id: 1,
                name: "potato",
            },
            {
                id: 2,
                name: "corn",
            },
            {
                id: 3,
                name: "chicken",
            },
            {
                id: 4,
                name: "onion",
            }
        ]
    };

    const [ingredientList, setIngredientList] = useState(testIngredients);

    return (
        <Container style={flexBoxStyle}>
                    {ingredientList.ingredients.map(ingredient => (
                        <FormControlLabel key={ingredient.id} control={<Checkbox color={"primary"}/>}
                                          label={ingredient.name}/>
                    ))}
            <Button type={"submit"} variant={"contained"} color={"primary"}>Search By Ingredients</Button>
        </Container>
    );
};

const flexBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px 10px 15px",
    backgroundColor: "darksalmon",
    borderRadius: "15px",
    width: "fit-content",
    marginBottom: "20px",
};


export default SearchByName;
