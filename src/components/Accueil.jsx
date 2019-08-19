import React from 'react';
import { Link } from 'react-router-dom';
import '../ressources/css/accueil.css';

const Accueil = () => (
  <div className="Accueil">
    <Link to="/accueil">Accueil</Link>
    <br />
    <Link to="/ajouter">Ajouter</Link>
    <br />
    <Link to="/lister">Lister</Link>
  </div>
);

export default Accueil;
