import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonToast, IonTextarea } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState<string>('')
    const [textArea, setTextArea] = useState<string>('')

    let load = () => {
        if (name == '' || textArea == '') {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.nom = name!
            newAsso.description = textArea
            ctx.updateAssociation(newAsso)
            ctx.numberAdd()
        }
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
            
            <h1>Etape 1</h1>
            <p><i>Nom de l'association</i></p>
            <IonItem>
                <IonLabel position="floating">Nom de l'association</IonLabel>
                <IonInput  onIonChange={e => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <br />
            <IonItem>
                <IonLabel position="floating">Description de l'association</IonLabel>
              <IonTextarea value={textArea} onIonChange={e => setTextArea(e.detail.value!)}></IonTextarea>
            </IonItem>
            <br />
            <IonButton expand="block" onClick={() => load()}>Continuer !</IonButton>
        </div>
        
    )
}

export default Form;