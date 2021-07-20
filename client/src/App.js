import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import NotFoundPage from './pages/not-found';
import SignUpPage from './pages/sign-up';

import './App.css';
import './assets/css/style.css';
// import useScript from './hook/importScripts';

function App() {
  // useScript('./assets/js/vendor/vendor.min.js');
  // useScript('./assets/js/plugins/plugins.min.js');
  // useScript('./assets/js/ajax-contact.js');
  // useScript('./assets/js/plugins/aos.js');
  // useScript('./assets/js/plugins/waypoints.js');
  // useScript('./assets/js/plugins/jquery.selectric.min.js');
  // useScript('./assets/js/main.min.js');
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
