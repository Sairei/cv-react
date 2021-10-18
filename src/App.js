import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Accueil from './pages/home/Accueil'
import Contact from './pages/contact/Contact'
import Connaissances from './pages/knowledges/Connaissances'
import Portfolio from './pages/portfolio/Portfolio'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/contact" component={Contact} />
          <Route path="/competences" component={Connaissances} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
