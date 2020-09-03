import React from 'react';
import './App.css';
import { Home, Contact, Portafolio } from '../pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'



import { Nav, Footer, Webdevelopment } from '../components'
import PortafolioHook from '../hooks/portofalioHook'




import './App.css'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Nav className="NavComponent" />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
                exit={false}
              >
                <Switch locacation={location}>
                  <Route path='/contact'>
                    <Contact />
                  </Route>
                  <Route path="/portafolio/:id" component={PortafolioHook} exact>
                  </Route>
                  <Route path="/Certifications" component={Webdevelopment} exact>
                  </Route>
                  <Route path='/portfolio' exact>
                    <Portafolio />
                  </Route>
                  <Route path='/' exact>
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <div>
            <Footer className="FooterComponent" />
          </div>
        </Router>
        <Router>
        
        </Router>
      </div>
    )
  }
}


export default App