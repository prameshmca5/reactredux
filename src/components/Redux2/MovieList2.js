import React,{Component} from "react";
import { connect } from 'react-redux';

class MovieList2 extends Component {
    render(){
        return(
            <div>
                <h3 style={{textAlign:"center"}}>{this.props.actv}</h3>
                <button className="btn btn-primary" onClick={this.props.gymClick}>Click GYM Action</button>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={this.props.walkClick}>Click WALK Action</button>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={this.props.runClick}>Click RUN Action</button>&nbsp;&nbsp;
                
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        actv: state.red2.activity
    }
}
const mapDispatchToProps = dispatch => {
    return{
        gymClick : ()=>dispatch({type:"GYM"}),
        walkClick : ()=>dispatch({type:"WALKIN"}),
        runClick : ()=>dispatch({type:"RUNIN"}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList2);


