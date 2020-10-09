import React from 'react';
import logo from './logo.svg';
import './App.css';
import
{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom"


//Components
import Navbar from "./components/Navbar/Navbar";
import Trail from './components/Trail';
import Game from "./components/pages/Game";

//Pages
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import NotFoundPage from "./components/pages/404";
import AuthState from './context/AuthState';
import Login from './components/pages/Login';
import gameChoice from "./components/pages/GameChoice";
import GameState from "./context/game/GameState";
<<<<<<< HEAD
import accessor from "./components/pages/accessor/a_result";
import User from "./components/pages/participant/result";
import Menu from "./components/pages/Menu";

class App extends React.Component {
  render(){
    return (
      <AuthState>
        <GameState>
        <Router>
          <div className="App">
              <Navbar />
          </div>

          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/404" component={NotFoundPage}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/game" component = {Game}/>
              <Route exact path = "/gameChoice" component = {gameChoice}/>
              <Route exact path = "/a_results" component = {accessor}/>
              <Route exact path = "/result" component = {User}/>
              <Route exact path = "/menu" component = {Menu}/>
              <Redirect to="/"/>

            </Switch>
          </div>
        </Router>
        </GameState>
      </AuthState>

    );
  }
=======
import ResultsState from "./context/results/ResultsState";

class App extends React.Component {
    render() {
        return (
            <AuthState>
                <ResultsState>
                    <GameState>
                        <Router>
                            <div className="App">
                                <Navbar/>
                            </div>

                            <div>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/register" component={Register}/>
                                    <Route exact path="/404" component={NotFoundPage}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/game" component={Game}/>
                                    <Route exact path="/gameChoice" component={gameChoice}/>
                                    <Redirect to="/"/>

                                </Switch>
                            </div>
                        </Router>
                    </GameState>
                </ResultsState>
            </AuthState>

        );
    }
>>>>>>> 521f1b3b22ccaae69ff2b028e5fb346058b79251
}

export default App;
