import React from 'react';
import {FormControlLabel, Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";

const SearchByTags = () => {

    const tags = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];

    let selectedTags = [];

    const addTagToSelected = (e) => {
        if (e.target.checked) {
            console.log(e.target.value);
        }
    };

    return (
        <Container style={boxStyle}>
            {tags.map((tag, index) => (
                <FormControlLabel key={index} control={<Checkbox onChange={addTagToSelected} color={"primary"}/>}
                                  label={tag}/>
            ))}
            <Button type={"submit"} variant={"contained"} color={"primary"}>Search By Diet</Button>
        </Container>
    )
};

const boxStyle = {
    marginBottom: "20px",
    borderRadius: "15px",
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "fit-content",
    padding: "15px",
};

export default SearchByTags;