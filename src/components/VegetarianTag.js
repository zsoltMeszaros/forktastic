import React, {Component} from 'react';
import {Chip} from "@material-ui/core";


class VegetarianTag extends Component {


    render() {

        return (
            <React.Fragment>
                <Chip label={"VEGETARIAN"} style={{ backgroundColor: "forestgreen", color: "white"}}  />
            </React.Fragment>
        );
    }


}

export default VegetarianTag;
