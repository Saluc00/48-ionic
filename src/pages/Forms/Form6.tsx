import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonToast, IonRadioGroup, IonRadio } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [type, setType] = useState<string>('')
    const [cotisation, setCotisation] = useState<string>('')

    let load = () => {
        if (type == '' || cotisation == '') {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.typeAdhesion = type!
            newAsso.typeCotisation = cotisation!
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
       
            <h1>Etape 6</h1>
            <p><i>Choisissez les règles d'adhésion</i></p>
            
            <p>Type d'adhésion</p>
            <IonRadioGroup value={type} onIonChange={e => setType(e.detail.value)}>
                <IonItem>
                    <IonLabel>Adhésion libre</IonLabel>
                    <IonRadio slot="start" value="Adhésion libre" />
                </IonItem>
                <IonItem>
                    <IonLabel>Adhésion soumise à l'accord de l'association</IonLabel>
                    <IonRadio slot="start" value="Adhésion soumise à l'accord de l'association"/>
                </IonItem>
            </IonRadioGroup>
            <br />
            <p>Cotisation</p>
            <IonRadioGroup value={cotisation} onIonChange={e => setCotisation(e.detail.value)}>
                <IonItem>
                    <IonLabel>Avec cotisation</IonLabel>
                    <IonRadio slot="start" value="Avec cotisation" />
                </IonItem>
                <IonItem>
                    <IonLabel>Sans cotisation</IonLabel>
                    <IonRadio slot="start" value="Sans cotisation"/>
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