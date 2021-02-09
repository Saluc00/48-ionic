import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonGrid, IonRow, IonCol, IonToast } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState<string>('')
    const [prenom, setPrenom] = useState<string>('')
    const [numero, setNumero] = useState<string>('')

    let load = () => {
        if (name == '' || prenom == '' || numero == '') {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.dirigeant.prenom = name!
            newAsso.dirigeant.nom = prenom!
            newAsso.dirigeant.numero = numero!
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
       
            <h1>Etape 4</h1>
            <p><i>Qui est le dirigeant ?</i></p>
            
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonItem>
                            <IonLabel position="floating">Nom</IonLabel>
                            <IonInput  onIonChange={e => setName(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size="6">
                        <IonItem>
                            <IonLabel position="floating">Prénom</IonLabel>
                            <IonInput  onIonChange={e => setPrenom(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
          
            <IonItem>
                <IonLabel position="floating">Numero</IonLabel>
                <IonInput  onIonChange={e => setNumero(e.detail.value!)}></IonInput>
            </IonItem>
            
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