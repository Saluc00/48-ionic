import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonToast } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [adresseSiege, setAdresseSiege] = useState<string>('')
    const [postal, setPostal] = useState<string>('')
    const [ville, setVille] = useState<string>('')

    let load = () => {
        if (adresseSiege == '' || postal == '' || ville == "" ) {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.siegeSocial.adress = adresseSiege!
            newAsso.siegeSocial.codePostal = postal!
            newAsso.siegeSocial.ville = ville!
            ctx.updateAssociation(newAsso)
            console.log(newAsso);
            ctx.numberAdd()
        }
    }

    let back = () => {
        ctx.numberLess()
    } 

    return (
        <div className="form1">
            <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            color="danger"
            cssClass="form1"
            message="Merci de remplir les champs correctement !"
            duration={1000}
        />
            <h1>Etape 3</h1>
            <p><i>Définir le siege social</i></p>
            <IonItem>
                <IonLabel position="floating">Adresse de l'association</IonLabel>
                <IonInput  onIonChange={e => setAdresseSiege(e.detail.value!)}></IonInput>
            </IonItem>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonItem>
                            <IonLabel position="floating">Code postal</IonLabel>
                            <IonInput  onIonChange={e => setPostal(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size="6">
                        <IonItem>
                            <IonLabel position="floating">Ville</IonLabel>
                            <IonInput  onIonChange={e => setVille(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
          
            <IonGrid>
                <IonRow>
                    <IonCol><IonButton expand="block" onClick={() => back()}>Retour</IonButton></IonCol>
                    <IonCol><IonButton expand="block" onClick={() => load()}>Continuer !</IonButton></IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Form;