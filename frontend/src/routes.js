import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './components/Logon';
import Profile from './components/Profile';
import Register from './components/Register';
import NewIncident from './components/NewIncident';

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Logon />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/incidents/new' element={<NewIncident />} />
            </Routes>               
        </BrowserRouter>
    )
}

export default Paths
