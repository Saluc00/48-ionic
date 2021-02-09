import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonList, IonRadioGroup, IonListHeader, IonRadio, IonToast } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)    
    const [showToast, setShowToast] = useState(false);
    const [selected, setSelected] = useState<string>();

    let load = () => {
        if (selected == undefined) {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.type = selected!
            ctx.updateAssociation(newAsso)
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

            <h1>Etape 2</h1>
            <p><i>Type de l'association</i></p>
            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                <IonItem>
                    <IonLabel>Humanitaire</IonLabel>
                    <IonRadio slot="start" value="Humanitaire" />
                </IonItem>
                <IonItem>
                    <IonLabel>Sportive</IonLabel>
                    <IonRadio slot="start" value="Sportive"/>
                </IonItem>
                <IonItem>
                    <IonLabel>Culturelle</IonLabel>
                    <IonRadio slot="start" value="Culturelle" />
                </IonItem>
                <IonItem>
                    <IonLabel>Autre</IonLabel>
                    <IonRadio slot="start" value="Autre" />
                </IonItem>
            </IonRadioGroup>
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