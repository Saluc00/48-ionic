import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { mapOutline, mapSharp, bookmarkOutline, personCircleOutline, personCircleSharp, homeOutline, homeSharp, addOutline, addSharp, informationCircleOutline, informationCircleSharp } from 'ionicons/icons';
import './Menu.css';
import AppContext from '../data/app-context';
import { useContext } from 'react';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Accueil',
    url: '/page/accueil',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Créer mon association',
    url: '/page/creer',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: 'Mon espace personnel',
    url: '/page/profil',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'Carte associative',
    url: '/page/map',
    iosIcon: mapOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Crédits',
    url: '/page/credits',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp
  }
];


const Menu: React.FC = () => {
  const ctx = useContext(AppContext)
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>MakeYourAsso</IonListHeader>
          <IonNote>Création simplifié d'association !</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Mes associations</IonListHeader>
          {ctx.profile.associations.map((asso, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={`/page/info/${asso.nom}`} routerDirection="none" lines="none" detail={false}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                  <IonLabel>{asso.nom}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
