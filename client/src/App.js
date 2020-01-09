import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

 const App  = () => {
     return (
       <Router>
         <Fragment>
           <header>
             <Header></Header>
           </header>
           <Route exact path="/" component={Home} />
           <Switch>
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
           </Switch>
           <Route exact path="/about" component={About} />
         </Fragment>
       </Router>
     );
}
export default App;