import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import NotFoundPage from './pages/not-found';
import SignUpPage from './pages/sign-up';

import './App.css';
import './assets/css/style.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
