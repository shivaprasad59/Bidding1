import React from 'react'
import Navbar from '../NavBar/Navbar'
import Books from '../Images/Books.jpeg'
import coins from '../Images/coins.jpeg'
import paintings from '../Images/paintings.jpeg'
import './Welcome.css'
function Welcome() {
  return (
    <div>
        <Navbar/>
        <div className='welcome'>
        <div className='books'>
            <img src={Books} alt='Image1' className='welcome-books'/>
            <hr/>
            <button className='books-button'>Books</button>
        </div>
        <div className='books'>
            <img src={coins} alt='Image1' className='welcome-books'/>
            <hr/>
            <button className='coins-button'>Coins</button>
        </div>
        <div className='books'>
            <img src={paintings} alt='Image1' className='welcome-books'/>
            <hr/>
            <button className='coins-button'>Paintings</button>
        </div>
        </div>
    </div>
  )
}

export default Welcome