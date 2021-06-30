import { Switch, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";
import SignupPage from './pages/sign-up'

import "./App.css";

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
        <SignupPage/>
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
