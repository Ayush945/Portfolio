import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className='overflow-x-hidden'>
                    <Routes>
                        <Route path='/' element={<Navbar />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
