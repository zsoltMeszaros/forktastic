import React from 'react';
import {Chip} from "@material-ui/core";


const GlutenFreeTag = () => {

    return (
        <React.Fragment>
            <Chip label={"GLUTEN FREE"} style={{ backgroundColor: "rebeccapurple", color: "white", marginLeft: "10px"}}  />
        </React.Fragment>
    );
}

export default GlutenFreeTag;