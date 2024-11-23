import React from 'react';

const Send = () => {
    return (
        <div className='send'>
             <a href="/listeFiche"><button style={{ marginLeft: '20px', marginBottom: '24px', }} className="btn btn-primary">Retour</button></a>
             <a href="/"><button style={{ marginLeft: '20px', marginBottom: '24px', background: 'white',  color: '#19153b', }} className="btn btn-primary">Déconnexion</button></a>
             
             <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Envoie de Message</h2>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Saisire texte :</label>
                    <textarea
                    placeholder="text"
                    value={competence}
                    onChange={(e) => setCompetence(e.target.value)}
                    required
                    style={styles.textarea}
                    />
                </div>
            </form>
            
        </div>
    );
};

const styles = {
    form: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },

    textarea: {
      width: '100%',
      height: '80px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    }
};  


export default Send;