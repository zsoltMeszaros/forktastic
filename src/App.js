import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Recipes from "./components/Recipes";
import Header from "./layout/Header";
import RandomRecipe from "./pages/RandomRecipe";
import {Container} from "@material-ui/core";


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

    const apiKey = process.env.REACT_APP_API_KEY;
    const getTenRandomRecipeUrl = process.env.REACT_APP_GET_TEN_RANDOM_RECIPE_URL;

    const [state, setState] = useState({recipes: []});

    const [randomRecipe, setRandomRecipe] = useState( {recipes: []});

    useEffect(() => {
        // axios.get(getTenRandomRecipeUrl + apiKey)
        //     .then(res => setState({recipes: res.data.recipes}))
        setState(testRecipes);
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header />
                    <Route exact path="/" render={props => (
                        <Container maxWidth={"lg"} style={{display: "flex", flexWrap: "wrap",
                            alignItems: 'center', justifyContent: 'center'}}>
                            <Recipes recipes={state.recipes}/>
                        </Container>
                    )}/>
                    <Route path={"/random"} render={props => (
                        <RandomRecipe apiKey={apiKey} />
                    )}
                    />
                </div>
            </div>
        </Router>
    );
};


export default App;
