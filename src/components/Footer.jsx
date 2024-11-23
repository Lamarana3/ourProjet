import React from 'react';
import '../components/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>À propos</h3>
                        <p>
                            Educode est une plateforme dédiée à la gestion des fiches, des archives,
                            et de la documentation pour les établissements éducatifs. 
                            Nous facilitons l'organisation et le bon déroulement des cours.
                        </p>
                    </div>
                    <div className="footer-section links">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/filiere">Filières</a></li>
                            <li><a href="/formateurs">Formateurs</a></li>
                            <li><a href="/archives">Archives</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h3>Suivez-nous</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Educode. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
