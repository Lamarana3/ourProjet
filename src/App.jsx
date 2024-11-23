import React from 'react';


import Accueil from './pages/Accueil';
import {BrowserRouter, Routes, Route  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Formateurs from './pages/Formateurs';


import Archive from './pages/Archive';
import Message from './pages/Message';
import Connexion from './pages/Connexion';

import Aide from './pages/Aide';

import Apd from './pages/Apd';
import Abd from './pages/Abd';
import Dfe from './pages/Dfe';
import Dbe from './pages/Dbe';
import Rsiot from './pages/Rsiot';
import Assc from './pages/Assc';

import Add from './pages/Add';
import Edit from './pages/Edit';
import Tableau from './pages/Tableau';
import Profile from './pages/Profile';
import ListFormateur from './components/ListFormateur';
import Content from './components/Content';


import Details from './pages/Details';
import FicheForm from './components/FicheForm';
import Register from './Loginregister/Register';
import RsponsListe from './pages/RsponsListe';
import FileManager from './components/FileManager';
import BoiteRecept from './pages/BoiteRecept';
import Fiche from './components/Fiche';
import ModuleForm from './components/ModuleForm';
import Send from './components/Send';

import Administrateur from './pages/Administrateur';
import CreerFiliere from './components/CreerFiliere';
import CreerMatiere from './components/CreerMatiere';
import AssignerMaFi from './components/AssignerMaFi';







function App() {

 
  

  return (
    <>
      <div className='App'>

      

        <BrowserRouter>
          <Routes>


            <Route path='/register' element={<Connexion />}/>
            
            <Route path='/inscription' element={<Register />}/>
            <Route path='/' element={<Accueil />}/>
            <Route path='/list' element={<Formateurs />}/>

            <Route path='/listrespons' element={<RsponsListe />}/>
            
            <Route path='/tableau' element={<Tableau />}/>
            <Route path='/archive' element={<Archive />}/>
            
            <Route path='/message' element={<Message />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/contenu' element={<Content />}/>
            
            
            
            <Route path='/crud' element={<ListFormateur/>}/>

            <Route path='/send' element={<Send/>}/>
            
            <Route path='/form' element={<ModuleForm/>}/> 
            
            <Route path='/boite' element={<BoiteRecept/>}/>
            
            <Route path='/listeFiche' element={<FicheForm />}/> 

            <Route path='/fiche' element={<Fiche />}/>


            
            

            <Route path='/abd' element={<Abd />}/>
            <Route path='/apd' element={<Apd />}/>
            <Route path='/dfe' element={<Dfe />}/>
            <Route path='/dbe' element={<Dbe />}/>
            <Route path='/assc' element={<Assc />}/>
            <Route path='/assc' element={<Rsiot />}/>

            
  
            
            <Route path='/aide' element={<Aide />}/>


          
            <Route path='/create' element={<Add />} />

            <Route path="/update/:id" element={<Edit />} />


            <Route path='/file' element={<FileManager/>}/>
            
            <Route path='/admin' element={<Administrateur/>}/>

            <Route path='/filiere' element={<CreerFiliere/>}/>

            <Route path='/matiere' element={<CreerMatiere/>}/>

            <Route path='/assigner' element={<AssignerMaFi/>}/>

            <Route path='/detail' element={<Details/>}/>
            
                  
          </Routes>
        </BrowserRouter>

      </div>
      
    </>
  )
}

export default App
