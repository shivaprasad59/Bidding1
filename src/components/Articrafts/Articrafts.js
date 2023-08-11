import React, { useEffect, useState } from 'react';
import Books from '../Images/Books.jpeg';
import axios from 'axios';
import './Articrafts.css';

function Articrafts() {
  const [color, setColor] = useState('green');
  const [data, setData] = useState([]);
   const [state,setState]=useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9099/getArticrafts-books");
        setData(response.data);
        console.log(response.data);
        setState(response.data.status);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClicking = (item) => {
    console.log("Buy clicked for item:", item.Name);
    // You can perform any actions related to buying here
  };
  
  return (
    <div className='articrafts-books'>
      <h2 className='articrafts-heading'>Books</h2>
      {data.map((item) => (
        <div key={item.id} className='articrafts-books-card'>
          <img src={item.imageUrl} alt={item.Name} />
          <div className='boooks-inner-div'>
            <h4>{item.Name}</h4>
            <h5 className='books-price'>${item.price}/-</h5>
          </div>
          <div className='books-inner-2'>
            <h6 className='books-count'>Left Biddings :: <h5>{10 - item.count}</h5></h6>
            <button className='books-state' onClick={() => handleClicking(item)}>Buy</button>
          </div>
          <h5 className='books-status' style={{ backgroundColor: color }}>{item.status}</h5>
        </div>
      ))}
    </div>
  );
}

export default Articrafts;
