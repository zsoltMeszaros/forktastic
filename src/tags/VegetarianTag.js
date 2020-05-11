import React from 'react';
import {Chip} from "@material-ui/core";


const VegetarianTag = () => {

    return (
        <React.Fragment>
            <Chip label={"VEGETARIAN"} style={{ backgroundColor: "forestgreen", color: "white", marginLeft: "10px"}}  />
        </React.Fragment>
    );
};

export default VegetarianTag;
