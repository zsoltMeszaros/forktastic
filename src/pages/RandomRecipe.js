import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import {Container, ButtonGroup, Button} from "@material-ui/core";
import LongRecipe from "../components/LongRecipe";

const realRecipe = {
    recipes: [
        {
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            dairyFree: true,
            veryHealthy: true,
            cheap: false,
            veryPopular: true,
            sustainable: false,
            weightWatcherSmartPoints: 11,
            gaps: 'no',
            lowFodmap: false,
            preparationMinutes: 10,
            cookingMinutes: 45,
            aggregateLikes: 1866,
            spoonacularScore: 98,
            healthScore: 73,
            creditsText: 'Jen West',
            license: 'CC BY-SA 3.0',
            sourceName: 'Pink When',
            pricePerServing: 276.67,
            extendedIngredients: [
                {
                    id: 9037,
                    aisle: 'Produce',
                    image: 'avocado.jpg',
                    consistency: 'solid',
                    name: 'avocado',
                    original: 'additional toppings: diced avocado, micro greens, chopped basil)',
                    originalString: 'additional toppings: diced avocado, micro greens, chopped basil)',
                    originalName: 'additional toppings: diced avocado, micro greens, chopped basil)',
                    amount: 8,
                    unit: 'servings',
                    meta: [
                        'diced',
                        'chopped'
                    ],
                    metaInformation: [
                        'diced',
                        'chopped'
                    ],
                    measures: {
                        us: {
                            amount: 8,
                            unitShort: 'servings',
                            unitLong: 'servings'
                        },
                        metric: {
                            amount: 8,
                            unitShort: 'servings',
                            unitLong: 'servings'
                        }
                    }
                },
                {
                    id: 11124,
                    aisle: 'Produce',
                    image: 'sliced-carrot.png',
                    consistency: 'solid',
                    name: 'carrots',
                    original: '3 medium carrots, peeled and diced',
                    originalString: '3 medium carrots, peeled and diced',
                    originalName: 'carrots, peeled and diced',
                    amount: 3,
                    unit: 'medium',
                    meta: [
                        'diced',
                        'peeled'
                    ],
                    metaInformation: [
                        'diced',
                        'peeled'
                    ],
                    measures: {
                        us: {
                            amount: 3,
                            unitShort: 'medium',
                            unitLong: 'mediums'
                        },
                        metric: {
                            amount: 3,
                            unitShort: 'medium',
                            unitLong: 'mediums'
                        }
                    }
                },
                {
                    id: 10111143,
                    aisle: 'Produce',
                    image: 'celery.jpg',
                    consistency: 'solid',
                    name: 'celery stalks',
                    original: '3 celery stalks, diced',
                    originalString: '3 celery stalks, diced',
                    originalName: 'celery stalks, diced',
                    amount: 3,
                    unit: '',
                    meta: [
                        'diced'
                    ],
                    metaInformation: [
                        'diced'
                    ],
                    measures: {
                        us: {
                            amount: 3,
                            unitShort: '',
                            unitLong: ''
                        },
                        metric: {
                            amount: 3,
                            unitShort: '',
                            unitLong: ''
                        }
                    }
                },
                {
                    id: 5062,
                    aisle: 'Meat',
                    image: 'chicken-breasts.png',
                    consistency: 'solid',
                    name: 'chicken breast',
                    original: '2 cups fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)',
                    originalString: '2 cups fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)',
                    originalName: 'fully-cooked chicken breast, shredded (may be omitted for a vegetarian version)',
                    amount: 2,
                    unit: 'cups',
                    meta: [
                        'shredded',
                        'fully-cooked',
                        'for a vegetarian version)'
                    ],
                    metaInformation: [
                        'shredded',
                        'fully-cooked',
                        'for a vegetarian version)'
                    ],
                    measures: {
                        us: {
                            amount: 2,
                            unitShort: 'cups',
                            unitLong: 'cups'
                        },
                        metric: {
                            amount: 473.176,
                            unitShort: 'ml',
                            unitLong: 'milliliters'
                        }
                    }
                },
                {
                    id: 11297,
                    aisle: 'Produce',
                    image: 'parsley.jpg',
                    consistency: 'solid',
                    name: 'flat leaf parsley',
                    original: '½ cup flat leaf Italian parsley, chopped (plus extra for garnish)',
                    originalString: '½ cup flat leaf Italian parsley, chopped (plus extra for garnish)',
                    originalName: 'flat leaf Italian parsley, chopped (plus extra for garnish)',
                    amount: 0.5,
                    unit: 'cup',
                    meta: [
                        'italian',
                        'chopped',
                        'for garnish)'
                    ],
                    metaInformation: [
                        'italian',
                        'chopped',
                        'for garnish)'
                    ],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: 'cups',
                            unitLong: 'cups'
                        },
                        metric: {
                            amount: 118.294,
                            unitShort: 'ml',
                            unitLong: 'milliliters'
                        }
                    }
                },
                {
                    id: 11215,
                    aisle: 'Produce',
                    image: 'garlic.png',
                    consistency: 'solid',
                    name: 'garlic',
                    original: '6 cloves of garlic, finely minced',
                    originalString: '6 cloves of garlic, finely minced',
                    originalName: 'garlic, finely minced',
                    amount: 6,
                    unit: 'cloves',
                    meta: [
                        'finely minced'
                    ],
                    metaInformation: [
                        'finely minced'
                    ],
                    measures: {
                        us: {
                            amount: 6,
                            unitShort: 'cloves',
                            unitLong: 'cloves'
                        },
                        metric: {
                            amount: 6,
                            unitShort: 'cloves',
                            unitLong: 'cloves'
                        }
                    }
                },
                {
                    id: 4053,
                    aisle: 'Oil, Vinegar, Salad Dressing',
                    image: 'olive-oil.jpg',
                    consistency: 'liquid',
                    name: 'olive oil',
                    original: '2 tablespoons olive oil',
                    originalString: '2 tablespoons olive oil',
                    originalName: 'olive oil',
                    amount: 2,
                    unit: 'tablespoons',
                    meta: [],
                    metaInformation: [],
                    measures: {
                        us: {
                            amount: 2,
                            unitShort: 'Tbsps',
                            unitLong: 'Tbsps'
                        },
                        metric: {
                            amount: 2,
                            unitShort: 'Tbsps',
                            unitLong: 'Tbsps'
                        }
                    }
                },
                {
                    id: 10411529,
                    aisle: 'Produce',
                    image: 'plum-tomatoes.png',
                    consistency: 'solid',
                    name: 'plum tomatoes',
                    original: '28 ounce-can plum tomatoes, drained and rinsed, chopped',
                    originalString: '28 ounce-can plum tomatoes, drained and rinsed, chopped',
                    originalName: '-can plum tomatoes, drained and rinsed, chopped',
                    amount: 28,
                    unit: 'ounce',
                    meta: [
                        'drained and rinsed',
                        'chopped'
                    ],
                    metaInformation: [
                        'drained and rinsed',
                        'chopped'
                    ],
                    measures: {
                        us: {
                            amount: 28,
                            unitShort: 'oz',
                            unitLong: 'ounces'
                        },
                        metric: {
                            amount: 793.787,
                            unitShort: 'g',
                            unitLong: 'grams'
                        }
                    }
                },
                {
                    id: 10016069,
                    aisle: 'Pasta and Rice;Canned and Jarred',
                    image: 'red-lentils.png',
                    consistency: 'solid',
                    name: 'red lentils',
                    original: '2 cups dried red lentils, rinsed',
                    originalString: '2 cups dried red lentils, rinsed',
                    originalName: 'dried red lentils, rinsed',
                    amount: 2,
                    unit: 'cups',
                    meta: [
                        'dried',
                        'red',
                        'rinsed'
                    ],
                    metaInformation: [
                        'dried',
                        'red',
                        'rinsed'
                    ],
                    measures: {
                        us: {
                            amount: 2,
                            unitShort: 'cups',
                            unitLong: 'cups'
                        },
                        metric: {
                            amount: 473.176,
                            unitShort: 'ml',
                            unitLong: 'milliliters'
                        }
                    }
                },
                {
                    id: 1102047,
                    aisle: 'Spices and Seasonings',
                    image: 'salt-and-pepper.jpg',
                    consistency: 'solid',
                    name: 'salt and pepper',
                    original: 'salt and black pepper, to taste',
                    originalString: 'salt and black pepper, to taste',
                    originalName: 'salt and black pepper, to taste',
                    amount: 8,
                    unit: 'servings',
                    meta: [
                        'black',
                        'to taste'
                    ],
                    metaInformation: [
                        'black',
                        'to taste'
                    ],
                    measures: {
                        us: {
                            amount: 8,
                            unitShort: 'servings',
                            unitLong: 'servings'
                        },
                        metric: {
                            amount: 8,
                            unitShort: 'servings',
                            unitLong: 'servings'
                        }
                    }
                },
                {
                    id: 11564,
                    aisle: 'Produce',
                    image: 'turnips.png',
                    consistency: 'solid',
                    name: 'turnip',
                    original: '1 large turnip, peeled and diced',
                    originalString: '1 large turnip, peeled and diced',
                    originalName: 'turnip, peeled and diced',
                    amount: 1,
                    unit: 'large',
                    meta: [
                        'diced',
                        'peeled'
                    ],
                    metaInformation: [
                        'diced',
                        'peeled'
                    ],
                    measures: {
                        us: {
                            amount: 1,
                            unitShort: 'large',
                            unitLong: 'large'
                        },
                        metric: {
                            amount: 1,
                            unitShort: 'large',
                            unitLong: 'large'
                        }
                    }
                },
                {
                    id: 6615,
                    aisle: 'Canned and Jarred',
                    image: 'chicken-broth.png',
                    consistency: 'liquid',
                    name: 'vegetable stock',
                    original: '8 cups vegetable stock',
                    originalString: '8 cups vegetable stock',
                    originalName: 'vegetable stock',
                    amount: 8,
                    unit: 'cups',
                    meta: [],
                    metaInformation: [],
                    measures: {
                        us: {
                            amount: 8,
                            unitShort: 'cups',
                            unitLong: 'cups'
                        },
                        metric: {
                            amount: 1.893,
                            unitShort: 'l',
                            unitLong: 'liters'
                        }
                    }
                },
                {
                    id: 10511282,
                    aisle: 'Produce',
                    image: 'brown-onion.png',
                    consistency: 'solid',
                    name: 'yellow onion',
                    original: '1 medium yellow onion, diced',
                    originalString: '1 medium yellow onion, diced',
                    originalName: 'yellow onion, diced',
                    amount: 1,
                    unit: 'medium',
                    meta: [
                        'diced',
                        'yellow'
                    ],
                    metaInformation: [
                        'diced',
                        'yellow'
                    ],
                    measures: {
                        us: {
                            amount: 1,
                            unitShort: 'medium',
                            unitLong: 'medium'
                        },
                        metric: {
                            amount: 1,
                            unitShort: 'medium',
                            unitLong: 'medium'
                        }
                    }
                }
            ],
            id: 715415,
            title: 'Red Lentil Soup with Chicken and Turnips',
            readyInMinutes: 55,
            servings: 8,
            sourceUrl: 'http://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/',
            image: 'https://spoonacular.com/recipeImages/715415-556x370.jpg',
            imageType: 'jpg',
            summary: 'Need a <b>gluten free and dairy free main course</b>? Red Lentil Soup with Chicken and Turnips could be an outstanding recipe to try. For <b>$2.8 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. One serving contains <b>448 calories</b>, <b>23g of protein</b>, and <b>20g of fat</b>. Head to the store and pick up garlic, olive oil, celery stalks, and a few other things to make it today. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes about <b>55 minutes</b>. Plenty of people made this recipe, and 1866 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href="https://spoonacular.com/recipes/clean-eating-carrot-ginger-red-lentil-soup-921419">Clean Eating Carrot & Ginger Red Lentil Soup</a>, <a href="https://spoonacular.com/recipes/one-pot-red-lentil-sweet-potato-stew-928497">One-Pot Red Lentil Sweet Potato Stew</a>, and <a href="https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185">Red Lentil and Chicken Soup</a> for similar recipes.',
            cuisines: [],
            dishTypes: [
                'soup'
            ],
            diets: [
                'gluten free',
                'dairy free'
            ],
            occasions: [
                'fall',
                'winter'
            ],
            winePairing: {
                pairedWines: [],
                pairingText: '',
                productMatches: []
            },
            instructions: 'To a large dutch oven or soup pot, heat the olive oil over medium heat. Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally. Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through. Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!',
            analyzedInstructions: [
                {
                    name: '',
                    steps: [
                        {
                            number: 1,
                            step: 'To a large dutch oven or soup pot, heat the olive oil over medium heat.',
                            ingredients: [
                                {
                                    id: 4053,
                                    name: 'olive oil',
                                    image: 'olive-oil.jpg'
                                }
                            ],
                            equipment: [
                                {
                                    id: 404667,
                                    name: 'dutch oven',
                                    image: 'dutch-oven.jpg'
                                }
                            ]
                        },
                        {
                            number: 2,
                            step: 'Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.',
                            ingredients: [
                                {
                                    id: 11124,
                                    name: 'carrot',
                                    image: 'sliced-carrot.png'
                                },
                                {
                                    id: 11143,
                                    name: 'celery',
                                    image: 'celery.jpg'
                                },
                                {
                                    id: 11282,
                                    name: 'onion',
                                    image: 'brown-onion.png'
                                }
                            ],
                            equipment: [],
                            length: {
                                number: 10,
                                unit: 'minutes'
                            }
                        },
                        {
                            number: 3,
                            step: 'Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.',
                            ingredients: [
                                {
                                    id: 1102047,
                                    name: 'salt and pepper',
                                    image: 'salt-and-pepper.jpg'
                                },
                                {
                                    id: 6615,
                                    name: 'vegetable stock',
                                    image: 'chicken-broth.png'
                                },
                                {
                                    id: 10016069,
                                    name: 'red lentils',
                                    image: 'red-lentils.png'
                                },
                                {
                                    id: 11529,
                                    name: 'tomato',
                                    image: 'tomato.png'
                                },
                                {
                                    id: 16069,
                                    name: 'lentils',
                                    image: 'lentils-brown.jpg'
                                },
                                {
                                    id: 11564,
                                    name: 'turnip',
                                    image: 'turnips.png'
                                },
                                {
                                    id: 11215,
                                    name: 'garlic',
                                    image: 'garlic.png'
                                }
                            ],
                            equipment: [
                                {
                                    id: 404794,
                                    name: 'stove',
                                    image: 'oven.jpg'
                                },
                                {
                                    id: 404752,
                                    name: 'pot',
                                    image: 'stock-pot.jpg'
                                }
                            ],
                            length: {
                                number: 22,
                                unit: 'minutes'
                            }
                        },
                        {
                            number: 4,
                            step: 'Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.',
                            ingredients: [
                                {
                                    id: 5062,
                                    name: 'chicken breast',
                                    image: 'chicken-breasts.png'
                                },
                                {
                                    id: 11297,
                                    name: 'parsley',
                                    image: 'parsley.jpg'
                                }
                            ],
                            equipment: [],
                            length: {
                                number: 5,
                                unit: 'minutes'
                            }
                        },
                        {
                            number: 5,
                            step: 'Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!',
                            ingredients: [
                                {
                                    id: 11297,
                                    name: 'fresh parsley',
                                    image: 'parsley.jpg'
                                }
                            ],
                            equipment: []
                        }
                    ]
                }
            ],
            originalId: null,
            spoonacularSourceUrl: 'https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415'
        }
    ]
};

const RandomRecipe = props => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const getRandomRecipeUrl = process.env.REACT_APP_GET_A_RANDOM_RECIPE_URL;

    const [isLoading, setIsLoading] = useState(false);
    const [randomRecipe, setRandomRecipe] = useState(realRecipe);


    useEffect(() => {
        setIsLoading(true);
        axios.get(getRandomRecipeUrl + apiKey)
            .then(res => setRandomRecipe({recipes: res.data.recipes}));
        setIsLoading(false);
    }, []);


    const getRandomRecipe = () => {
        axios.get(getRandomRecipeUrl + apiKey)
            .then(res => setRandomRecipe({recipes: res.data.recipes}));
    };

    return (

        <React.Fragment>
            <ButtonGroup>
                <Button onClick={getRandomRecipe} variant={"contained"} color={"secondary"}>Give me Another
                    Recipe</Button>
            </ButtonGroup>
            <Container maxWidth={"lg"} style={{
                display: "flex", flexWrap: "wrap",
                alignItems: 'center', justifyContent: 'center'
            }}>
                {isLoading
                ? <div>Loading..</div>
                : <LongRecipe key={randomRecipe.recipes[0].id} recipe={randomRecipe.recipes[0]}/>
                }
            </Container>
        </React.Fragment>
    );
};

// PropTypes
RandomRecipe.propTypes = {
    apiKey: PropTypes.string.isRequired,
};

export default RandomRecipe;