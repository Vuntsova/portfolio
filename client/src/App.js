import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


 class App extends Component {
   render() { 
     return (
       <Router>
         <Fragment>
           <Header></Header>
           <Route exact path="/" component={Home} />
           <Switch>
             <Route exact path="/about" component={About} />
             <Route exact path="/work" component={Work} />
             <Route exact path="/contact" component={Contact} />
           </Switch>
         </Fragment>
       </Router>
     );
   }
}
export default App;