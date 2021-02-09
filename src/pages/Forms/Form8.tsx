import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonToast, IonTextarea, IonGrid, IonRow, IonCol } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [textArea, setTextArea] = useState<string>('')

    let load = () => {
        if (textArea == '') {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.ressources = textArea
            ctx.updateAssociation(newAsso)
            ctx.numberAdd()
        }
    }

    let retour = () => {
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
            
            <h1>Etape 8</h1>
            <p><i>Ressources à disposition de l'association</i></p>
            <IonItem>
                <IonLabel position="floating">Détails des ressources</IonLabel>
                <IonTextarea value={textArea} onIonChange={e => setTextArea(e.detail.value!)}></IonTextarea>
            </IonItem>
            <br />
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonButton expand="block" onClick={() => retour()}>Retour</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton expand="block" onClick={() => load()}>Valider</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
        
    )
}

export default Form;