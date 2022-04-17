import './App.css';
import React from 'react';
import Pokemon from './component/Pokemon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Deck from './component/Deck';
import Detail from './component/Detail';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 16 }}>
            <AppBar position="static">
              <Toolbar>
                <Link to="/">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    style={{ color: 'white', marginRight: 8 }}
                  >
                    Pokemon Apps
                  </Typography>
                </Link>
                <Link to="/fav">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    style={{ color: 'white' }}
                  >
                    Deck
                  </Typography>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
          <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/fav" component={Deck} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
