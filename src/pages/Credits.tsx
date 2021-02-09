import React, { useContext } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from
'@ionic/react';
import './Credits.css'
import AppContext from '../data/app-context';

const Accueil: React.FC = () => {
    const ctx = useContext(AppContext)
    console.log('accueil',ctx);

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Crédits</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <div className="all">
                <a href="/page/contacter">
                    <p>Nous contacter</p>
                </a>                
                <a href="/page/donation">
                    <p>Donation</p>
                </a>
                <a href="/page/propos">
                    <p>A propos</p>
                </a>
            </div>
        </IonContent>
    </IonPage>
    )
}

export default Accueil;