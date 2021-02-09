import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

const Contacter: React.FC = () => {
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Nous contacter</IonTitle>
                </IonToolbar>
              </IonHeader>
        
              <IonContent fullscreen>
                  <div className="all">
                    <h1><b>MakeYourAsso</b></h1>
                    <br />
                    <p>89 Quais des Chartrons</p>
                    <p>33000 Bordeaux</p>
                    <p>05 12 34 56 78</p>
                    <p>contact@makeyourasso.fr</p>
                  </div>
              </IonContent>
            </IonPage>
    )
}

export default Contacter;