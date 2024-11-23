import React from 'react';
import '../pages/accueil.css';
import Header from '../components/Header';
import Footer from '../components/Footer'



const Accueil = () => {
    return (
        <div className='accueil'>
           <Header />
           

            <div className='hero'>
                <div className='container-jumbo'>
                    <div className="jumbo-title">
                        <h1 className='title1' >GESTION DE FICHES </h1>
                        <p>Pour un bon déroulement des cours<br/> et une bonne gestion des fichiers
                        
                        </p>

                        

                    </div>
                    <div className='caroussel'>
                        <div className="jumbo-image1">
                            <img src="public/images/Samsill Fashion Color 3 Ring Storage Binders, 2 Inch Round Ring, Assorted Colors, Bulk Binders - 4 Pack.svg" alt="" />
                            
                            <img src="public/images/nullPack de 4 Classes à Dossiers en Plastique Épais A4 - Boîtes Organisatrices de Documents de Bureau Durables pour Étudiants et Professionnels_ (3).svg" alt="" />
                            <img src="public/images/Binder (2).svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <section>
            <div className="container">
                <div className="title">
                    <div className="section-title">
                        <h2>Nos filières</h2>

                    </div>
                    <div className="section-work">
                        <div className="works-element">
                            
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                
                                <img src="public/images/tic.svg" alt="" />
                                
                                <li><a href="/dfe">D.Frontend</a></li>
                            </div>
                        </div>
                        <div className="works-element">
                        
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                <img src="public/images/tic.svg" alt="" />
                                <a href="/apd">A.P.Digitale</a>
                            </div>
                        </div>
                        <div className="works-element">
                        
                    
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                <img src="public/images/tic.svg" alt="" />
                                <a href="/abd">A.B.Données</a>
                            </div>
                        </div>
                        <div className="works-element">
                            
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                <img src="public/images/tic.svg" alt="" />
                                <a href="/assc">System d'Exploitation</a>
                            </div>
                        </div>
                        <div className="works-element">
                            
        
    
                        
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                <img src="public/images/tic.svg" alt="" />
                                <a href="/rsiot">Réseau et securité</a>
                            </div>
                        </div>
                        <div className="works-element">
                        
    
                            
                            <div className="works-description">
                                <h3>Société Générale</h3>
                                <img src="public/images/tic.svg" alt="" />
                                <a href="/dbe">D.Backend</a>
                            </div>
                        </div>
                        
                    </div>

                    
                    
                   
                </div>
                
            </div>
            
        </section>

        <div className="hero-one">
            <div className="section-title1">
                <h2>Liste des formateurs</h2>
            </div>
            <div className="container">
                
        
                <div className="hero-one-content">  
                     
                        
                    <div className="hero-image">
                    <img src="public/images/Plan intérieur d'un homme à la peau sombre et heureux, habillé élégamment, porte de la documentation _ Photo Gratuite.svg" alt="" />
                    </div>
                    <div className="hero-texte">
                        <h3>formateurs</h3>
                        <p>Art party yuccie man bun cold-pressed kale chips poutine tattooed 3 wolf moon PBR&B ennui cliche franzen whatever gochujang. Actually ennui celiac, dreamcatcher portland art party everyday carry godard activated charcoal. Salvia fanny pack cardigan listicle beard meh pug. Schlitz brunch mixtape </p>
                        <a href="/register">Reservé à l'administration</a>
                    </div>

                    
                </div>            
                        
                    
            
            </div>
        </div>

        <div className='container-jumbo'>
            <div className="jumbo-title">
                <h1 >Gestion des Archives</h1>
                <p>Pour un bon déroulement des cours<br/> et une bonne gestion des fichiers
                        
                </p>

                <a href="/register">Reservé à l'administration</a>

                        

                </div>
                <div className="jumbo-image">
                    <img src="public/images/files-and-folder-55.svg" alt="" />
                </div>
            </div>


            <div className="hero-one">
            <div className="section-title1">
                <h2>Profile Formateur</h2>
            </div>
            <div className="container">
                
        
                <div className="hero-one-content">  
                     
                        
                    <div className="hero-image">
                    <img src="public/images/téléchargement - 2024-10-16T031853.888 copy.svg" alt="" />
                    </div>
                    <div className="hero-texte">
                        
                        <p>Art party yuccie man bun cold-pressed kale chips poutine tattooed 3 wolf moon PBR&B ennui cliche franzen whatever gochujang. Actually ennui celiac, dreamcatcher portland art party everyday carry godard activated charcoal. Salvia fanny pack cardigan listicle beard meh pug. Schlitz brunch mixtape </p>
                        <a href="/register">Reservé à l'administration</a>
                    </div>

                    
                </div>            
                        
                    
            
            </div>
         </div>
         <br/>
         <br/>
            <Footer />
        
            
        </div>
    );
};

export default Accueil;