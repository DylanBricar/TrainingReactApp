import React from 'react';
import { Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Ajouter from './components/Ajouter';
import Lister from './components/Lister';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/accueil" component={Accueil} />
    <Route exact path="/ajouter" component={Ajouter} />
    <Route exact path="/lister" component={Lister} />
    <Footer />
  </div>
);

export default App;
