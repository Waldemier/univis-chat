import { Route } from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Route path={["/", "/login", "/registration"]} component={Auth} exact />
      <Route path="/home" component={Home} exact />
    </div>
  );
}

export default App;
