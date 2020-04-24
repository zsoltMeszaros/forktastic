import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Recipes from "./components/Recipes";
import Header from "./layout/Header";
import RandomRecipe from "./pages/RandomRecipe";
import {Container} from "@material-ui/core";


class App extends Component {

    state = {
        recipes: []
    };

    componentDidMount(): void {
        this.setState({recipes: testRecipes});
    }

    getRandomRecipe = () => {
        axios.get(``)
            .then(res => this.setState({recipes: res.data.recipes}))
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header getRandomRecipe={this.getRandomRecipe}/>
                        <Route exact path="/" render={props => (
                            <Container maxWidth={"md"} style={{ display: "flex", flexWrap: "wrap"}}>
                                <Recipes recipes={this.state.recipes}/>
                            </Container>
                        )}/>
                        <Route path={"/random"} render={props => (
                            <RandomRecipe recipes={this.state.recipes}/>
                        )}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

const testRecipes = [
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
];

export default App;
