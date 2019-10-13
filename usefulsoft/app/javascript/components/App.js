import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

// const PageOne = () => {
//     return <div>PageOne</div>;
// };

const PageTwo = () => {
    return <div>PageTwo</div>;
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/pagetwo"  component={PageTwo}/>
                </Switch>
            </div>
        )
    };
}

export default App;