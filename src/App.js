import React, { useState } from 'react';
import './App.css';
function App() {
 const [items, setItems] = useState([]);
 const [newItem, setNewItem] = useState('');
 const handleAddItem = () => {
 if (newItem.trim() !== '') {setItems([...items, newItem]);
  setNewItem('');
  }
  };
  const handleRemoveItem = (index) => {
  const updatedItems = items.filter((item, i) => i !== index);
  setItems(updatedItems);
  };
  return (
  <div className="App">
  <h1>Carrinho de Compras</h1>
  <div className="container">
  <input
  type="text"
  value={newItem}
  onChange={(e) => setNewItem(e.target.value)}
  placeholder="Digite um item..."
  />
  <button onClick={handleAddItem}>Adicionar Item</button>
  </div>
  <ul>
  {items.map((item, index) => (
  <li key={index}>
  {item}
  <button onClick={() => handleRemoveItem(index)}>Remover</button>
  </li>
  ))}
  </ul>
  </div>
  );
 }
 export default App;