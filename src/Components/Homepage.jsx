import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <>
    <nav className="navbar">
      <div className="left">
        <h1 className="company-name">Comfort Zone</h1>
      </div>
      <div className="center">
        <ul className="nav-links">
          <li className="dropdown1">
            <a href="/">Products</a>
            <div className="dropdown-content1">
              <a href="/">Product 1</a>
              <a href="/">Product 2</a>
              <a href="/">Product 3</a>
            </div>
          </li>
          <li className="dropdown1">
            <a href="/">Services</a>
            <div className="dropdown-content1">
              <a href="/">Service 1</a>
              <a href="/">Service 2</a>
              <a href="/">Service 3</a>
            </div>
          </li>
          <li><a href="/">About Us</a></li>
        </ul>
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">&#128269;</span>
        <span className="favorite-icon">&#9825;</span>
        <span className="cart-icon">&#128722;</span>
      </div>
    </nav>
    <div class="section1">  
             <div class="img-slider">  
               <img src="https://i.pinimg.com/originals/61/7d/71/617d71a7d6341b8b1eba626db0808ce2.jpg" 
                 alt="" class="img"/>
               <img src="https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/D2gAAOSw0j5eIOXp/$_86.JPG"  
                 alt="" class="img"/>  
               <img src="https://th.bing.com/th/id/OIP.ABd7i-7b3bmEGpINsntG4wHaHa?pid=ImgDet&rs=1"  
                 alt="" class="img"/>  
               <img src="https://3.imimg.com/data3/VC/QB/MY-10514629/13892684230-500x500.jpg"  
                 alt="" class="img"/>  
               <img src="https://i.pinimg.com/originals/61/7d/71/617d71a7d6341b8b1eba626db0808ce2.jpg"  
                 alt="" class="img"/>
             </div>  
           </div><br/>
          <div className='clearfix'>
            <div className='box'>
              <p><b>35 Years Experience</b><br/>With your trust</p>
            </div>
            <div className='box'>
              <p><b>15 Awards own</b><br/>With your trust</p>
            </div>
            <div className='box'>
              <p><b>500 + Projects taken</b><br/>With your trust</p>
            </div>
            <div className='box'>
              <p><b>1 00,000+</b><br/>Happy Customers</p>
            </div>
          </div>
          </>
  );
}

export default Homepage;
