import React from 'react';
import {Chip} from "@material-ui/core";


const VeganTag = () => {

    return (
        <React.Fragment>
            <Chip label={"DAIRY FREE"} style={{ backgroundColor: "burlywood", color: "black"}}  />
        </React.Fragment>
    );
}

export default VeganTag;
