import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './Home';
import Profile from './Profile';

const oktaAuth = new OktaAuth({
  issuer: '{yourOktaDomain}',
  clientId: '{yourClientID}',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email', 'offline_access']
});

function App() {
  const history = useHistory();
  const restoreOriginalUri = (_oktaAuth,  originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login/callback" component={LoginCallback}/>
              <SecureRoute path="/profile" component={Profile}/>
          </Switch>
      </Security>
    </>
  );
}

export default App
