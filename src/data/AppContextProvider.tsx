import React, { useState } from 'react';
import AppContext, { Profile, defaultProfile, Personne, SiegeSocial, Association, defaultAssociation }  from './app-context';

const AppContextProvider: React.FC = (props) => {
    const [profile, setProfil] = useState<Profile>(defaultProfile)
    const [association, setAsso] = useState<Association>(defaultAssociation)
    const [siegeSocial, setSiege] = useState<SiegeSocial>()
    const [dirigeant, setDirigeant] = useState<Personne>()
    const [tresorier, setTresorier] = useState<Personne>()
    const [number, setNumber] = useState<number>(0)
    
    const updateSiege = (newSiege: SiegeSocial) => {
        setSiege(newSiege)
    } 

    const numberAdd = () => {
        const newNumber = number + 1
        setNumber(newNumber)        
    }

    const numberLess = () => {
        const newNumber = number - 1
        setNumber(newNumber)        
    }

    const numberReset = () => {
        const newNumber = 0
        setNumber(newNumber)
    }

    const updateAssociation = (newAsso: Association) => {
        setAsso(newAsso)
    } 

    const updateDirigeant = (newPeronne: Personne) => {
        setDirigeant(newPeronne)
    } 
    
    const updateTresorier = (newPeronne: Personne) => {
        setTresorier(newPeronne)
    } 

    const updateProfile = (updateProfil: Profile) => {
        setProfil(updateProfil)
    }

    const addAssociation = (add: Association) => {
        profile.associations.push(add)
    }

    const initContext = async () => {
        setProfil(defaultProfile)
        setAsso(defaultAssociation)
    }

    return <AppContext.Provider value={{
        initContext,
        profile,
        updateProfile,
        updateAssociation,
        updateDirigeant,
        updateSiege,
        updateTresorier,
        addAssociation,
        numberAdd,
        numberLess,
        numberReset,
        number,
        association
    }}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider