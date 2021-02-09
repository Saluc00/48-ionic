import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Accueil.css'

const Donation: React.FC = () => {
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Donation</IonTitle>
                </IonToolbar>
              </IonHeader>
        
              <IonContent fullscreen>
                
              <div className="all">
                <h1>Dons MYA</h1>
                <br />
                <p><b>Comment nous aider ?</b></p>
                <p><i>Nous vous laissons la possibilité de nous faire un don par virement (ci dessous) ou en nous envoyant un chèque au 89 quais des chartrons, 33000 Bordeaux.</i></p>
                
                <br />
                <p><b>Titulaire du Compte:</b></p>
                <p>MakeYourAsso, 89 quais des chartrons, 33000 Bordeaux.</p>
                
                <br />
                
                <br />
                <p><b>IBAN</b></p>
                <p>FR12 3456 7890 1234 5678 9012 345</p>
                
                <br />

                <p><b>BIC</b></p>
                <p>PLMWFR5L</p>
              </div>
              </IonContent>
            </IonPage>
    )
}

export default Donation;