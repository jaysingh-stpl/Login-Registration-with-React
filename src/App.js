import React, {Component} from 'react';
import AppRouter from './routes/AppRouter';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <AppRouter/>
                </div>
            </div>
        );
    }
}

export default App;
