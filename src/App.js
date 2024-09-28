import React from 'react';
import './App.css'; // Import your CSS
import constructionImage from './construction_site.png'; // Import the image

function App() {
  return (
    <div className="App">
      <header className="hero-section" style={{ backgroundImage: `url(${constructionImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay">
          <h1>Managing Your Properties, Simplifying Your Life</h1>
          <p>Trust the experts at J&E Management Co. to handle every detail.</p>
          <a href="#signup" className="cta-button">Sign Up for More Info</a>
        </div>
      </header>

      <section id="signup" className="signup-section">
        <h2>Get In Touch</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
