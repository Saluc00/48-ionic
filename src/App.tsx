import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useContext, useEffect } from 'react';
import Accueil from './pages/Accueil';
import Creer from './pages/Creer';
import Map from './pages/Map';
import Profil from './pages/Profil';
import AppContext from './data/app-context';
import Credits from './pages/Credits';
import Contacter from './pages/Contacter';
import Donation from './pages/Donation';
import Propos from './pages/Propos';
import Info from './pages/Info';

const App: React.FC = () => {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.initContext();
  }, [])
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/accueil" />
            </Route>
            <Route path="/page/accueil" exact={true}>
              <Accueil />
            </Route>
            <Route path="/page/creer" exact={true}>
              <Creer />
            </Route>
            <Route path="/page/profil" exact={true}>
              <Profil />
            </Route>
            <Route path="/page/map" exact={true}>
              <Map />
            </Route>
            <Route path="/page/credits" exact={true}>
              <Credits />
            </Route>
            <Route path="/page/contacter" exact={true}>
              <Contacter />
            </Route>
            <Route path="/page/donation" exact={true}>
              <Donation />
            </Route>
            <Route path="/page/propos" exact={true}>
              <Propos />
            </Route> 
            <Route path="/page/info/:name" exact={true}>
              <Info />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
