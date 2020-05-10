import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./layout/Header";
import RandomRecipe from "./pages/RandomRecipe";
import {Button, ButtonGroup, Container, Link, Grid, Box} from "@material-ui/core";
import StickyFooter from "./layout/StickyFooter";
import SearchByName from "./components/SearchByName";
import TagSearch from "./components/SearchByTags";

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
                <Header/>
                <Route exact path="/" render={props => (
                    <Container style={{
                        width: "50%",
                        height: "600px",
                        backgroundColor: "lightsalmon",
                        borderRadius: "50px"
                    }}>
                        <Container >
                            <SearchByName/>
                        </Container>
                        <Container>
                            <TagSearch/>
                        </Container>

                    </Container>
                )}/>
                <Route path={"/random"} render={props => (
                    <RandomRecipe/>
                )}
                />
            </div>
            <StickyFooter/>
        </Router>
    );
};


export default App;
