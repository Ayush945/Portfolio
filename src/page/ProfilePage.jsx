import React from 'react'
import FirstComponent from '../Component/FirstComponent'
import SecondComponent from '../Component/SecondComponent'
import ThirdComponent from '../Component/ThirdComponent'
import AboutMe from '../Component/AboutMe'
import ContactMe from '../Component/ContactMe'

function ProfilePage() {
    return (
        <>
            <FirstComponent />
            <AboutMe />
            <SecondComponent />
            <ThirdComponent />
            <ContactMe />
        </>
    )
}

export default ProfilePage