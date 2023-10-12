import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './page/ProfilePage'
import ClinicDetailPage from './page/ClinicDetailPage'
import DeliveryDetailPage from './page/DeliveryDetailPage'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProfilePage />} />
                    <Route path='/clinic-detail' element={<ClinicDetailPage />} />
                    <Route path='/delivery-detail' element={<DeliveryDetailPage />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App