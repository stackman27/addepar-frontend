import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './layout/Header';
import Body from './layout/Body';
import Home from './views/Home';
import Portfolio from './views/Portfolio';


function App() {
  return (
    <Flex style = {{width: '90%', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column',}}> 
    <Router>
      <Header/>
      <Switch>
        <Route path = {"/home"}>
          <Home/>
        </Route>
        <Route path = {"/portfolio"}>
          <Portfolio/>
        </Route> 
        </Switch>
    </Router>
  </Flex>
  );
}

export default App;
