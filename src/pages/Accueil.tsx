import React, { useContext } from 'react'
import { IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from
'@ionic/react';
import { useParams } from 'react-router';
import './Donation.css'
import img from '../assets/asso.jpg'
import logo from '../assets/logo.png'
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
                <IonTitle>Accueil</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <div className="all">
                <h1><b>NOTRE SERVICE</b></h1>
                <p><i>Les avantages de MakeYourAsso</i></p>
                <p>Avec MakeYourAsso, créer votre association n'a jamais été aussi simple, FINIS la paperasse de bas étages,
                    en quelques clic, voilà votre formulaire de création de votre association remplis !</p>
                <img src={img} />
            </div>

        </IonContent>
    </IonPage>
    )
}

export default Accueil;