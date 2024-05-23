import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function History() {
  const [cards, setCards] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', amount: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/getData')
      .then(response => setCards(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setCards(cards.filter(card => card._id !== id));
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:3001/update/${id}`, formData)
      .then(() => {
        setCards(cards.map(card => (card._id === id ? { ...card, ...formData } : card)));
        setEditId(null);
        setFormData({ name: '', amount: '' });
      })
      .catch(err => console.log(err));
  };

  const handleEditClick = (card) => {
    setEditId(card._id);
    setFormData({ name: card.name, amount: card.amount });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-75'>
        <table className='table table-striped table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>Payment Id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cards.map(card => (
              <tr key={card._id}>
                <td>{card._id}</td>
                <td>
                  {editId === card._id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    card.name
                  )}
                </td>
                <td>
                  {editId === card._id ? (
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                    />
                  ) : (
                    card.amount
                  )}
                </td>
                <td>
                  {editId === card._id ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleUpdate(card._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(card)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(card._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
