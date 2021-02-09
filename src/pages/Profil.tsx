import React, { useContext, useState } from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import AppContext, { Association, Profile  } from '../data/app-context';
import './Profil.css'

const Profil: React.FC = () => {
  const ctx = useContext(AppContext)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [association, setAssociation] = useState<Association>()

  let changeProfil = () => {
    const newProfile: Profile = {
      username: username != '' ? username : ctx.profile.username,
      password: password != '' ? password : ctx.profile.password,
      email: email != '' ? email: ctx.profile.email,
      associations: ctx.profile.associations      
    }

    console.log(ctx.profile);
    ctx.updateProfile(newProfile)
    console.log(ctx.profile);
  }
  
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Mon espace personnel</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent fullscreen>
                <div className="all">
                  <h1>
                    Mon profil
                  </h1>
                  <IonHeader collapse="condense">
                    <IonToolbar>
                      <IonTitle size="large">Mon espace personnel</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonItem>
                    <IonLabel position="floating">Nom utilisateur</IonLabel>
                    <IonInput  onIonChange={e => setUsername(e.detail.value!)}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Mot de passe</IonLabel>
                    <IonInput  onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput  onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                  </IonItem>

                  <IonButton expand="block" onClick={() => changeProfil()}>Modifier</IonButton>
                </div>
              </IonContent>
            </IonPage>
    )
}

export default Profil;