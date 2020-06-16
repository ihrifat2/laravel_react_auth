import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/AuthApp/Navbar';
import Login from './components/AuthApp/Login';
import Landing from './components/AuthApp/Landing';
import Profile from './components/AuthApp/Profile';
import Register from './components/Register';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
