import React from 'react';
import {FormGroup, FormControlLabel, Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";

const SearchByTags = () => {

    const tags = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];

    let selectedTags = [];

    const addTagToSelected = (e) => {
        if (e.target.checked){
            console.log(e.target.value);
        }
    };

    return (
        <Container style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px"}}>
            <FormGroup row>

                {tags.map(tag => (
                    <FormControlLabel control={<Checkbox  onChange={addTagToSelected} color={"primary"}/>} label={tag}/>
                ))}
                <Button type={"submit"} variant={"contained"} color={"primary"}>Search By Diet</Button>
            </FormGroup>
        </Container>
    )
};

export default SearchByTags;