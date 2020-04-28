import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./layout/Header";
import RandomRecipe from "./pages/RandomRecipe";
import {Button, ButtonGroup, Container, Link, Grid} from "@material-ui/core";
import StickyFooter from "./layout/StickyFooter";
import SearchRecipeByName from "./components/SearchRecipeByName";

const testRecipes = {
    recipes: [
        {
            id: 1,
            title: 'Pepperoni Pizza',
            readyInMinutes: 30,
            servings: 4,
            vegetarian: false
        },
        {
            id: 2,
            title: 'Spagetti',
            readyInMinutes: 45,
            servings: 4,
            vegetarian: false
        },
        {
            id: 3,
            title: 'Carbonara',
            readyInMinutes: 35,
            servings: 4,
            vegetarian: false
        },
        {
            id: 4,
            title: 'Chicken Noodle Soup',
            readyInMinutes: 300,
            servings: 4,
            vegetarian: false
        },
        {
            id: 5,
            title: 'French Omlette',
            readyInMinutes: 15,
            servings: 1,
            vegetarian: true
        }
    ]
};


const App = (props) => {

    const [state, setState] = useState({recipes: []});

    useEffect(() => {
        // axios.get(getTenRandomRecipeUrl + apiKey)
        //     .then(res => setState({recipes: res.data.recipes}))
        setState(testRecipes);
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header/>

                    <Route exact path="/" render={props => (
                        <Container style={{alignItems: "center", justifyContent: "center"}}>
                            <Grid container>
                                <Grid item>
                                    <ButtonGroup>

                                        <Button style={buttonStyle}>
                                            <Link href={"/random"} color={"inherit"}>Random
                                                Recipe</Link>
                                        </Button>

                                        <Button size={"large"}
                                                style={buttonStyle}>Search</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item>
                                    <SearchRecipeByName/>
                                </Grid>
                            </Grid>
                        </Container>
                    )}/>
                    <Route path={"/random"} render={props => (
                        <RandomRecipe />
                    )}
                    />

                    <StickyFooter/>
                </div>
            </div>
        </Router>
    );
};

const buttonStyle = {

    backgroundColor: 'mediumseagreen',
    color: 'white',
    outline: 'white 1px',
};

export default App;
