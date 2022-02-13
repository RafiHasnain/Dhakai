import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//pages
const LogIn = React.lazy(() => import("./pages/LogIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const App = () => {
  const loading = () => <div>Loading...</div>;
  return (
    <Router>
      <Switch>
        <Suspense fallback={loading()}>
          <Route exact path='/'>
            <Redirect to='/log-in' />
          </Route>
          <Route path='/log-in' component={LogIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
