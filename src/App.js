import React, { useState, useEffect } from 'react';
import Card from './components/card.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import data from './data.json'

function App() {
  const [getItems, setItems] = useState([]);
  useEffect(() => {
    setItems(data)
  }, [setItems]);

  const handleClickItem = (clickedItemId) => {
    console.log(clickedItemId)
    const newItems = getItems.map((item) => {
      item.isActive = item.id === clickedItemId ? true : false;
      return item;
    })
    setItems(newItems)
  }

  return (
    <div className="App container-fluid pt-5">
      <div className="row">
        {
          getItems.map((item, index) => { return <Card {...item} key={index} handleClick={handleClickItem} /> })
        }
      </div>
    </div>
  );
}

export default App;
