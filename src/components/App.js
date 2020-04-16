import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import Contact from './Contact';
//import About from './About';
import data from '../data/data.json';
import './App.css';
import MovieList from "./Redux/MovieList";
import MovieList2 from "./Redux2/MovieList2";
import NameMgt from "./NameAdd/NameMgt";

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: "Ramesh Pongiannan",
      jumbotronTitle: "List of courses",
      feeds: [],
    }


  }



  UNSAFE_componentWillMount() {
    this.setState({
      feeds: data,
    })
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle}/>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={MovieList2}/>
            <Route path="/redux" component={MovieList}/>
            <Route exact path="/" render={(props) => (
              <Feed feeds={this.state.feeds} />
            )} />
            <Route path="/namemgt" component={NameMgt}/>
          </Switch>
          <div className="footer">
                <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
