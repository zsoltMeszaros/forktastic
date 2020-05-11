import React from 'react';
import axios from "axios";
import {Button, Container, FormControlLabel, FormGroup} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";

const SearchByName = (props) => {

    return (
        <Container style={{marginTop: "20px", backgroundColor: "beige", width: "fit-content", height: "fit-content", padding: "10px"}}>
            <FormGroup row>

                <FormControlLabel control={<Checkbox color={"primary"}/>} label={"Vegetarian"}/>
                <FormControlLabel control={<Checkbox color={"primary"}/>} label={"Vegan"}/>
                <FormControlLabel control={<Checkbox color={"primary"}/>} label={"Gluten-Free"}/>
                <FormControlLabel control={<Checkbox color={"primary"}/>} label={"Dairy-Free"}/>
            </FormGroup>
            <Button type={"submit"} variant={"contained"} color={"primary"}>Search By Ingredients</Button>
        </Container>
    );
};


export default SearchByName;
