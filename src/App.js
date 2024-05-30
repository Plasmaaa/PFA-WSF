// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ChantierList from './components/ChantierList';
import Footer from './components/Footer';
import './styles.css';
import PhotoPlan from './components/PhotoPlan';
import ButtonVert from './components/Buttonvert';
import image1 from './images/ecole.svg';
import image2 from './images/hopital.svg';
import bgImage1 from './images/wsf.svg';
import bgImage2 from './images/kys.svg';
import bgImage3 from './images/playmobile.svg';
import ChooseFloor from './components/ChooseFloor';
import DetailedAnalysis from './components/DetailedAnalysis';
import BuildingInfoForm from './components/BuildingInfoForm';
import RoomDetails from './components/RoomDetails';
import Summary from './components/Summary';
import EditChantier from './components/EditChantier';
import { RoomProvider } from './context/RoomContext';
import { ChantierProvider } from './context/ChantierContext';

const App = () => {
  return (
    <ChantierProvider>
      <RoomProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<>
                <Header />
                <ChantierList />
                <ButtonVert />
                <Footer />
              </>} />
              <Route path="/photo-plan" element={<>
                <Header />
                <PhotoPlan />
                <Footer />
              </>} />
              <Route path="/building-info-form" element={<>
                <Header />
                <BuildingInfoForm />
                <Footer />
              </>} />
              <Route path="/choose-floor" element={<>
                <Header />
                <ChooseFloor />
                <Footer />
              </>} />
              <Route path="/detailed-analysis" element={<>
                <Header />
                <DetailedAnalysis />
                <Footer />
              </>} />
              <Route path="/room-details/:roomId" element={<RoomDetails />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/edit-chantier/:title" element={<EditChantier />} />
            </Routes>
            
          </div>
        </Router>
      </RoomProvider>
    </ChantierProvider>
  );
};

export default App;
