import React, { useContext, useState } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonToast, IonTextarea, IonCol, IonRow, IonGrid } from '@ionic/react';
import './forms.css'
import AppContext from '../../data/app-context';

const Form: React.FC = () => {
    const ctx = useContext(AppContext)
    const [showToast, setShowToast] = useState(false);
    
    let valider = () => {
        ctx.addAssociation(ctx.association)
        ctx.numberReset()
    }

    let retour = () => {
        ctx.numberLess()
    }

    return (
        <div className="form1">
            <h1>Resumé</h1>
            <p><i>Création de votre association</i></p>
            <div className="resume">
                <p><b>Titre</b></p>
                <p><i>{ctx.association.nom}</i></p>
                <br />

                <p><b>Description</b></p>
                <p><i>{ctx.association.description}</i></p>
                <br />
                
                <p><b>Type de l'association</b></p>
                <p><i>{ctx.association.type}</i></p>
                <br />


                <p><b>Type d'adhésion</b></p>
                <p><i>{ctx.association.typeAdhesion}</i></p>
                <br />

                <p><b>Type de cotisation</b></p>
                <p><i>{ctx.association.typeCotisation}</i></p>
                <br />
                
                <p><b>Ressources mise à disposition</b></p>
                <p><i>{ctx.association.ressources}</i></p>
                
            </div>

            <br />

            <p><i>Siege social</i></p>
            <div className="resume">

            <p><b>Adresse</b></p>
                <p><i>{ctx.association.siegeSocial.adress}</i></p>
                <br />

                <p><b>Code Postal</b></p>
                <p><i>{ctx.association.siegeSocial.codePostal}</i></p>
                <br />
                
                <p><b>Ville</b></p>
                <p><i>{ctx.association.siegeSocial.ville}</i></p>

            </div>

            <br />
            <p><i>Dirigeant</i></p>
            <div className="resume">

                <p><b>Nom</b></p>
                <p><i>{ctx.association.dirigeant.nom}</i></p>
                <br />

                <p><b>Prénom</b></p>
                <p><i>{ctx.association.dirigeant.prenom}</i></p>
                <br />
                
                <p><b>Numéro</b></p>
                <p><i>{ctx.association.dirigeant.numero}</i></p>

            </div>
            
            <br />
            <p><i>Trésorier</i></p>
            <div className="resume">

                <p><b>Nom</b></p>
                <p><i>{ctx.association.tresorier.nom}</i></p>
                <br />

                <p><b>Prénom</b></p>
                <p><i>{ctx.association.tresorier.prenom}</i></p>
                <br />
                
                <p><b>Numéro</b></p>
                <p><i>{ctx.association.tresorier.numero}</i></p>

            </div>
            
            <br />
            <p><i>Proces Verbal</i></p>
            <div className="resume">

                <p><b>Nom des personnes</b></p>
                <p><i>{ctx.association.procesVerbal.nbPersonnes}</i></p>
                <br />

                <p><b>Débat retranscrit</b></p>
                <p><i>{ctx.association.procesVerbal.debatRetranscrit}</i></p>
                <br />
                
                <p><b>Propos sujet à des votes</b></p>
                <p><i>{ctx.association.procesVerbal.proposSujet}</i></p>
                
                <br />

                <p><b>Résultat des votes</b></p>
                <p><i>{ctx.association.procesVerbal.resultatVote}</i></p>
                <br />
                
                <p><b>Membres nominés</b></p>
                <p><i>{ctx.association.procesVerbal.membresNomines}</i></p>

            </div>
            <br />
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonButton expand="block" onClick={() => retour()}>Retour</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton expand="block" onClick={() => valider()}>Valider</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <br />
        </div>
    )
}

export default Form;