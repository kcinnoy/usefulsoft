import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import PageTwo from './PageTwo';


class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  exact path="/pagetwo" component={PageTwo}/>
                </Switch>
            </div>
        )
    };
}

export default App;