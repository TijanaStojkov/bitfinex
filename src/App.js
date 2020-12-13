import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';

//materialize
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';

//components
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

//router
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true)
  }
  return (
    <div className="App">
      
      <Router basename='/'>
        {!isAuth && <Redirect to={'/'}/>}
        <Redirect to={'/'}/>
          <Header isAuth={isAuth} handleLogin={handleLogin}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profile' component={Profile}/>
        </Router>
    </div>
  );
}

export default App;
