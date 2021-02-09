import React from 'react';


export interface Association {
    nom: string,
    description: string,
    type: string,
    typeAdhesion: string,
    typeCotisation: string,
    procesVerbal: ProcesVerbal,
    siegeSocial: SiegeSocial,
    dirigeant: Personne,
    tresorier: Personne,
    ressources: string
}

export interface ProcesVerbal {
    nbPersonnes: string,
    debatRetranscrit: string,
    proposSujet: string,
    resultatVote: string,
    membresNomines: string
}

export interface SiegeSocial {
    adress: string,
    codePostal: string,
    ville: string
}

export interface Personne {
    nom: string,
    prenom: string,
    numero: string,
}

export interface Profile  {
    username: string,
    password: string,
    email: string
    associations: Association[]
}

export const defaultProfile: Profile = {
    username: "",
    password: "",
    email: "",
    associations: []
}

export const defaultSiege: SiegeSocial = {
    adress: '',
    codePostal: '',
    ville: ''
}

export const defaultTresorier: Personne = {
    nom: '',
    prenom: '',
    numero: '',
}

export const defaultDirigeant: Personne = {
    nom: '',
    prenom: '',
    numero: '',
}

export const defaultProcesVerbal: ProcesVerbal = {
    nbPersonnes: '',
    debatRetranscrit: '',
    proposSujet: '',
    resultatVote: '',
    membresNomines: ''
}

export const defaultAssociation: Association = {
    nom: '',
    description: '',
    typeAdhesion: '',
    typeCotisation: '',
    type: '',
    procesVerbal: defaultProcesVerbal,
    siegeSocial: defaultSiege,
    dirigeant: defaultDirigeant,
    tresorier: defaultTresorier,
    ressources: ''
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void,
    updateSiege: (updatedSiege: SiegeSocial) => void;
    updateDirigeant: (updatedDirigeant: Personne) => void,
    updateTresorier: (updatedTresorier: Personne) => void,
    updateAssociation: (updatedAssociation: Association) => void,
    addAssociation: (add: Association) => void,
    number: number,
    numberReset: () => void,
    numberAdd: () => void,
    numberLess: () => void,
    association: Association,
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profile: defaultProfile,
    updateSiege: () => { },
    updateProfile: () => { },
    updateDirigeant: () => { },
    updateTresorier: () => { },
    updateAssociation: () => { },
    addAssociation: () => { },
    number: 0,
    numberReset: () => { },
    numberAdd: () => { },
    numberLess: () => { },
    association: defaultAssociation,
});

export default AppContext