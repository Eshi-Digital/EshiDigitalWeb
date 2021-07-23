import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import NotFoundPage from './pages/not-found';
import SignUpPage from './pages/sign-up';
import Home from './pages/home';
import Service from './pages/service';
import ContactUs from './pages/contact/contact';

import './App.css';
import './assets/css/style.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/services">
        <Service />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
