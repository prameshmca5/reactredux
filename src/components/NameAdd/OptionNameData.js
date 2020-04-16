import React, {Component} from 'react';

class OptionNameData extends Component {
    render(props) {
        console.log(props.value);
        return(
         <>
        <li className="list-group-item">Ramesh</li>
        <li className="list-group-item">Amutha</li>
        <li className="list-group-item">Laxana</li>
        <li className="list-group-item">Kavin</li>
        </>  
        )
    }
}

export default OptionNameData;

