import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ClinicDetailPage from './page/ClinicDetailPage'
import DeliveryDetailPage from './page/DeliveryDetailPage'
import Navbar from './Component/Navbar'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                    <Route path='/clinic-detail' element={<ClinicDetailPage />} />
                    <Route path='/delivery-detail' element={<DeliveryDetailPage />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App