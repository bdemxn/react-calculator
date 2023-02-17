import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const urlImageMath = 'https://wallpapercave.com/wp/wp7513470.jpg';

  return (
    <div className='container'>
      <div class="card mt-4 animate__animated animate__fadeInRight">
        <div class="card-body">
          Introducing our new calculator app built in React! Our app is the perfect tool for anyone in need of a fast and reliable calculator, whether you're a student, a professional, or just someone who needs to crunch some numbers on the go
        </div>
      </div>
      <br />
      <div class="card animate__animated animate__fadeInLeft">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">General Formula</h5>
          <p class="card-text">With a sleek and modern design, our calculator app is easy to use and provides accurate results every time. Simply enter your numbers and operators using the buttons on the interface, and watch as the app calculates your result in real-time.</p>
          <Link to={'/general'} class="btn btn-primary">Try it now</Link>
        </div>
      </div>
      <img src={urlImageMath} alt='math' className='animate__animated animate__fadeInUpBig mt-3 rounded img-fluid' />
    </div>
  );
}

export default Home;