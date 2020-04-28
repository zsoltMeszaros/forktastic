import React, {useState} from 'react';
import { Input } from '@material-ui/core';

const SearchRecipeByName = (props) => {

    const [name, setName] = useState("");

    return (
        <React.Fragment>
            <Input required={true} placeholder={"Search Recipe by Name.."} />
        </React.Fragment>
    );
};


export default SearchRecipeByName;
