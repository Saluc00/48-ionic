import React from 'react'
import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import louis from '../assets/louis.png'
import lucas from '../assets/lucas.png'
import maxime from '../assets/maxime.png'
import pierre from '../assets/pierre.png'
import william from '../assets/wil.png'

const Propos: React.FC = () => {
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>A propos</IonTitle>
                </IonToolbar>
              </IonHeader>
        
              <IonContent fullscreen>
                <div className="all">
                  <h1>A propos de MakeYourAsso</h1>
                  <br />
                  <p>MakeYourAsso est l'idée d'une bande de copains qui faisaient du foot dans leur petit club d'Arsac.
                    Un beau jour le club a dû fermer ses portes : le président ne pouvait plus s'en occuper. 
                    C'est alors que le groupe a voulu créer sa propre association, afin de poursuivre le rêve de leur viel ami. 
                    Cependant, face à l'ampleur des démarches administratives, Maxime, l'un des membres du groupe, s'exclama : 
                    "C'est pas possible qu'il y ait autant d'asso avec une telle paperasse !"; ce à quoi ses amis acquiescèrent. 
                    C'est ainsi que naquit MakeYourAsso, une plateforme qui vous permettra de créer une association en un rien de temps ! </p>
                    <IonImg src={louis} />
                    <p><i>Louis</i></p>
                    <IonImg src={lucas} />
                    <p><i>Lucas</i></p>
                    <IonImg src={maxime} />
                    <p><i>Maxime</i></p>
                    <IonImg src={pierre} />
                    <p><i>Pierre</i></p>
                    <IonImg src={william} />
                    <p><i>William</i></p>
                </div>
              </IonContent>
            </IonPage>
    )
}

export default Propos;