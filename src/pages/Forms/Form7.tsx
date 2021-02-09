import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonToast, IonTextarea, IonGrid, IonRow, IonCol } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    const [nbPersonnes, setNbPersonnes] = useState<string>('')
    const [debatRetranscrit, setDebatRetranscrit] = useState<string>('')
    const [proposSujet, setProposSujet] = useState<string>('')
    const [resultatVote, setResultatVote] = useState<string>('')
    const [membresNomines, setMembresNomines] = useState<string>('')

    let load = () => {
        if (nbPersonnes == '' || debatRetranscrit == '' || proposSujet == '' || resultatVote == '' || membresNomines == '' ) {
            setShowToast(true)
        } else {
            const newAsso = {... ctx.association}
            newAsso.procesVerbal.nbPersonnes = nbPersonnes!
            newAsso.procesVerbal.debatRetranscrit = debatRetranscrit!
            newAsso.procesVerbal.proposSujet = proposSujet!
            newAsso.procesVerbal.resultatVote = resultatVote!
            newAsso.procesVerbal.membresNomines = membresNomines!
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
            
            <h1>Etape 7</h1>
            <p><i>Procès verbal</i></p>
            <IonItem>
                <IonLabel position="floating">Noms des personnes</IonLabel>
                <IonInput  onIonChange={e => setNbPersonnes(e.detail.value!)}></IonInput>
            </IonItem>
            <br />
            <IonItem>
                <IonLabel position="floating">Débat retranscrit</IonLabel>
              <IonTextarea value={debatRetranscrit} onIonChange={e => setDebatRetranscrit(e.detail.value!)}></IonTextarea>
            </IonItem>
            <br />
            <IonItem>
                <IonLabel position="floating">Propos sujet à des votes</IonLabel>
              <IonTextarea value={proposSujet} onIonChange={e => setProposSujet(e.detail.value!)}></IonTextarea>
            </IonItem>
            <br />
            <IonItem>
                <IonLabel position="floating">Résultat des votes</IonLabel>
                <IonInput  onIonChange={e => setResultatVote(e.detail.value!)}></IonInput>
            </IonItem>
            <br />
            <IonItem>
                <IonLabel position="floating">Membres nominés</IonLabel>
                <IonInput  onIonChange={e => setMembresNomines(e.detail.value!)}></IonInput>
            </IonItem>
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