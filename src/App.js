import React, {useEffect, useState} from 'react';
// import {StyleSheet, Dimensions} from 'react-native';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./layout/Header";
import RandomRecipe from "./pages/RandomRecipe";
import {Container} from "@material-ui/core";
import StickyFooter from "./layout/StickyFooter";
import SearchByName from "./components/SearchByName";
import TagSearch from "./components/SearchByTags";
import SearchByIngredients from "./components/SearchByIngredients";
import LoginModal from "./components/LoginModal";


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

    // const { width, height } = Dimensions.get('window');

    const [state, setState] = useState({recipes: []});

    useEffect(() => {
        // axios.get(getTenRandomRecipeUrl + apiKey)
        //     .then(res => setState({recipes: res.data.recipes}))
        setState(testRecipes);
    }, []);

    const displayLoginModal = () => {


    };

    const login = (e) => {
        
    };

    return (
        <Router>
            <div className="App" >
                <Header
                    displayLoginModal={displayLoginModal}
                />
                <LoginModal login={login} style={{ display: "none"}} />
                <Route exact path="/" render={props => (
                    <Container style={containerStyle}>
                        <Container >
                            <SearchByName/>
                        </Container>
                        <Container>
                            <TagSearch/>
                        </Container>
                        <Container>
                            <SearchByIngredients />
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

const containerStyle = {
    backgroundColor: "lightsalmon",
    borderRadius: "60px",
    padding: '30px 40px 30px 40px',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "30px",
    width: "fit-content",

};

const flexBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    margin: "5px",
    backgroundColor: "darksalmon",
    borderRadius: "15px"
};

const titleStyle = {
    maxWidth: "fit-content",
    backgroundColor: "beige",
    padding: "10px 40px 10px 40px",
    textAlign: "center",
    margin: "15px",
    borderRadius: "15px",
};

const boxStyle = {
    borderRadius: "30px",
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minWidth: "fit-content",
    maxWidth: "80%",
    padding: "20px",
};


export default App;
