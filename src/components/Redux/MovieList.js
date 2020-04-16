import React, {Component} from "react";
import { connect } from 'react-redux';
import Outputvalue from './Outputvalue';

class MovieList extends Component {
    render () {
        return (
        <div>
            <h3 style={{textAlign:"center"}}>TEST => {this.props.ctr}</h3>
            <Outputvalue value={this.props.ctr} />
            <button className="btn btn-primary" onClick={this.props.movieClick}>Click Movie Action</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={this.props.songClick}>Click Songs Action</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={this.props.workClick}>Click Work Action</button>&nbsp;&nbsp;
            
        </div>
    )
}
}


const mapStateToProps = state => {
    return {
        ctr : state.red1.counter
    }
}
const mapDispatchToProps = dispatch => {
    return{
        movieClick : ()=>dispatch({type:"MOVIE"}),
        songClick : ()=>dispatch({type:"SONGS"}),
        workClick : ()=>dispatch({type:"WORKS"}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);


