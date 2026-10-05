import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Create } from './pages/Create';

const App: React.FC = () => (
  <IonRouterOutlet>
    <Route exact path="/home" component={Home} />
    <Route exact path="/create" component={Create} />
    <Route exact path="/product/:id" component={Detail} />
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </IonRouterOutlet>
);

export default App;
