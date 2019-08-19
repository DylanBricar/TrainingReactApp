import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import '../../ressources/css/header.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '61px',
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: '#444444',
  },
  button: {
    marginRight: '10px',
  },
  iconHover: {
    marginLeft: '10px',
    verticalAlign: 'sub',
    marginRight: '10px',
    fontSize: '30px',
    color: 'white',
  },
});

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar className={classes.navbar} osition="static">
          <Toolbar>
            <Typography className={classes.title}>
              <Link to="/accueil" className={classes.link}>
                <HomeIcon className={classes.iconHover} />
                <span className="soustitle">Training React App</span>
              </Link>
            </Typography>

            <Link to="/lister" className="link">
              <Button variant="contained" color="primary" className={classes.button}>Liste des éléments</Button>
            </Link>

            <Link to="/ajouter" className="link">
              <Button variant="contained" color="primary" className="coloredbutton">Créer un nouvel élément</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <div className="imgbackground" />
    </header>
  );
};

export default Header;
