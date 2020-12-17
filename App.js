import React from 'react';
import  {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Homepage from './pages/Homepage';
class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    home: {
       title: ' Quote for life',
       subTitle: 'The reward for good work is more work.',
       text: 'Just as we either admire or laugh at past visionary concepts from a modern point of view, people a few decades from now will also likely have different ways of looking at our current ideas. Whether something is a flop or changes the world depends on many factors such as technical capabilities, as well as our willingness to promote and accept innovation.'
    },
   }
  }

  render() {
    return (
         <Router>
          <Container className="p-0" fluid={true}>
             <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand> Never Stop Smiling:)</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
             </Navbar>
           <Route path="/" exact render={() => <Homepage title = {this.state.home.title} subTitle={this.state.home.subTitle} text= {this.state.home.text}/>}/> 
            </Container> 
         </Router>
    );
 }
}
export default App;
