import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    </Switch>
    
    
    </BrowserRouter>
  
  )
}

export default App
