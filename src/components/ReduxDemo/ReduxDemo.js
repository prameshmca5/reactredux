import React from "react";
import "./ReduxDemo.css";


const ReduxDemo =() => {
    return(
        <div className="container">
            <h4>Welcome Redux Demo Applications...</h4>
            
            <div className="container">
                <div className="row">
                <div className="col">
                <div className="cols-md-6 alert alert-warning">
                     <h5>Enter a Name</h5>
                     <form id="frmname">
                         <input type="text" className="form-control" id="name" /><br/><br/>
                         <button className="btn btn-primary">Add Name</button>
                     </form>
                </div>
                </div>
                <div className="col">
                <div class="cols-md-6 alert alert-danger">
                    <h3>List of Name</h3>
                    <ul className="list-group" id="nameList">

                    </ul>
                </div>
                </div>
                
                </div>
            </div>
        </div>
       
    );
}

export default ReduxDemo;