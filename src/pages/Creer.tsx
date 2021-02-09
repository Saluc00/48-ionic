import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import AppContext from '../data/app-context';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';
import Form6 from './Forms/Form6';
import Form7 from './Forms/Form7';
import Form8 from './Forms/Form8';
import Resume from './Forms/Resume';

const Creer: React.FC = () => {
    const ctx = useContext(AppContext)

    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonMenuButton />
                </IonButtons>
                <IonTitle>Créer son association</IonTitle>
            </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                <IonTitle size="large">Créer son association</IonTitle>
                </IonToolbar>
            </IonHeader>

            {ctx.number <= 0 ? <Form1 />:
             ctx.number == 1 ? <Form2 /> :
            ctx.number == 2 ? <Form3 /> :
            ctx.number == 3 ? <Form4 /> : 
            ctx.number == 4 ? <Form5 /> : 
            ctx.number == 5 ? <Form6 /> : 
            ctx.number == 6 ? <Form7 /> :
            ctx.number == 7 ? <Form8 />: 
            <Resume />}

            </IonContent>
        </IonPage>
    )
}

export default Creer;