import React, { useState } from 'react';
import axios from 'axios';

const ModuleForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [competence, setCompetence] = useState('');
  const [contenu, setContenu] = useState('');
  const [duree, setDuree] = useState('');
  const [errors, setErrors] = useState({});
  const [items, setItems] = useState([
    { id: 1, label: 'CM', checked: false },
    { id: 2, label: 'TP', checked: false },
    { id: 3, label: 'TD', checked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const validateDate = (inputDate) => {
    const startDate = new Date('2024-08-26');
    const endDate = new Date('2024-08-31');
    const selectedDate = new Date(inputDate);
    return selectedDate >= startDate && selectedDate <= endDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateDate(date)) {
      newErrors.date = 'La date doit être comprise entre le 26/08/2024 et le 31/08/2024';
    }
    if (duree > 7) {
      newErrors.duree = 'La durée maximale est de 7 heures';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = {
        date,
        time,
        competence,
        contenu,
        duree,
        items: items.filter(item => item.checked).map(item => item.label),
      };

      try {
        const response = await axios.post('http://localhost:8000/api/module', formData);
        alert(response.data.message);
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire :', error);
        alert('Une erreur est survenue lors de la soumission.');
      }
    }
  };

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        { id: Date.now(), label: newItem, checked: false },
      ]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Formulaire de cours</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Volume horaire :</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={styles.input}
        />
        {errors.time && <span style={styles.error}>{errors.time}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Date :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
        {errors.date && <span style={styles.error}>{errors.date}</span>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Compétence du module :</label>
        <textarea
          placeholder="Détails sur la compétence"
          value={competence}
          onChange={(e) => setCompetence(e.target.value)}
          required
          style={styles.textarea}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Contenus du module :</label>
        <textarea
          placeholder="Contenu"
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          required
          style={styles.textarea}
        />
      </div>

      <ul style={styles.checklist}>
        {items.map((item) => (
          <li key={item.id} style={styles.checklistItem}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <span
              style={{
                ...styles.checklistLabel,
                textDecoration: item.checked ? 'line-through' : 'none',
              }}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <div style={styles.formGroup}>
        <input
          type="text"
          placeholder="Nouvel élément"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={styles.input}
        />
        <button type="button" onClick={handleAddItem} style={styles.button}>
          Ajouter
        </button>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Durée du cours :</label>
        <input
          type="number"
          placeholder="7h max"
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
          required
          style={styles.input}
        />
        {errors.duree && <span style={styles.error}>{errors.duree}</span>}
      </div>

      <button
        type="submit"
        style={{ ...styles.button, marginTop: '15px' }}
      >
        Soumettre
      </button>
    </form>
  );
};




const styles = {
  form: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '24px',
    fontWeight: '500',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '8px',
    color: '#4A4A4A',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  checklist: {
    listStyleType: 'none',
    padding: 0,
  },
  checklistItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  checklistLabel: {
    marginLeft: '12px',
    color: '#555',
    fontSize: '16px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
};


export default ModuleForm;

