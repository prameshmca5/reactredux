import React, {Component} from "react";
import "./NameMgt.css";
import {connect} from "react-redux";
//import OptionNameData from "./OptionNameData";
//import OptionNameData from './OptionNameData';
 
class nameMgt extends Component {
    constructor() {
        super();
        this.state = {value : ''}
      }
      handleChange = (e) =>{ 
        this.setState({value: e.target.value});
        
      }

    render() {
        return( 
            <div className="container">
                <h4>Welcome Redux Demo Applications...</h4>
                
                <div className="container">
                    <div className="row">
                    <div className="col">

                    <div className="cols-md-6 alert alert-warning formsiz">
                        <h5>Enter a Name</h5>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange}/><br/>
                            <button className="btn btn-primary" onClick={()=>this.props.onSubmitData(this.state.value)}>Add Name</button>
                    </div>
                        
                    </div>
                    <div className="col">
                    <div className="cols-md-6 alert alert-danger formsiz">  
                        <h3>List of Name</h3>
                        <ul className="list-group" id="nameList">
                            {this.props.nmead.map((nameRes, index) => (
                                <li className="list-group-item" key={index}><button className="btn btn-danger" onClick={()=>this.props.onNameDeleteResult(index)}>X</button>&nbsp; {nameRes}</li>
                            ))}
                            {/* <li className="list-group-item" ><button className="btn btn-danger" onClick={this.props.onNameDeleteResult}>X</button>&nbsp; Ramesh</li>
                            <li className="list-group-item"><button className="btn btn-danger" onClick={this.props.onNameDeleteResult}>X</button>&nbsp; LaxaKutty</li>
                            <li className="list-group-item"><button className="btn btn-danger" onClick={this.props.onNameDeleteResult}>X</button>&nbsp; Amutha</li> */}
                        </ul>
                    </div>
                    </div>
                    
                    </div>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = state => {
    console.log(state.naad);
    return {
        nmead : state.naad
    }
}

const mapDispatchToProps = dispacth => {
    return{
        onNameAddResult: ()=> dispacth({type:'NAMEADD_RESULT'}),
        onNameDeleteResult: (index) => dispacth({type:'REMOVE_NAME', data:index}),
        onSubmitData:(value)=> dispacth({type:'ADD_NEW', data:value})
    }
}

window['dispacth'] = mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(nameMgt);